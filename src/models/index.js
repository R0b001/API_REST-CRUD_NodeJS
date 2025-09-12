// src/models/index.js

import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import { fileURLToPath, pathToFileURL } from "url"; // <-- IMPORTANTE: Añadir 'pathToFileURL'

// --- Bloque para hacer que __dirname funcione con Módulos ES ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || "development";
const db = {};

// --- Bloque para cargar el config.js de forma dinámica ---
const configPath = path.join(__dirname, "..", "config", "config.js");
// CAMBIO: Envolvemos la ruta con pathToFileURL
const { default: configObject } = await import(pathToFileURL(configPath));
const config = configObject[env];
// --- Fin del bloque ---

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// --- Bloque para cargar todos los modelos de esta carpeta dinámicamente ---
const files = fs.readdirSync(__dirname).filter((file) => {
  return (
    file.indexOf(".") !== 0 &&
    file !== path.basename(__filename) &&
    file.slice(-3) === ".js"
  );
});

for (const file of files) {
  const modelPath = path.join(__dirname, file);
  // CAMBIO: Envolvemos la ruta con pathToFileURL
  const { default: modelDefinition } = await import(pathToFileURL(modelPath));
  const model = modelDefinition(sequelize, DataTypes);
  db[model.name] = model;
}
// --- Fin del bloque ---

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
