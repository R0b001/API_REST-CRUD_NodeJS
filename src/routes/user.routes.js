import express from "express";
const routes = express.Router();
import db from "../models/index.js";
const { Users } = db;

//Middleware para localizar el usuario por su ID:
const getUser = async (req, res, next) => {
  let user;
  const { id } = req.params;

  if (isNaN(id) || parseInt(id) <= 0) {
    return res.status(400).json({
      message: "El Id dado no es valido.",
    });
  }

  try {
    user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado.",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }

  res.user = user;
  next();
};

//Rutas de las operaciones del CRUD Users:
//Mostrar todos los usuarios:
routes.get("/", async (req, res) => {
  try {
    const getUsers = await Users.findAll();
    console.log("GET ALL,", getUsers);

    if (getUsers.length === 0) {
      return res.status(204).json([]);
    }

    res.json(getUsers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//Mostrar un usuario:
routes.get("/:id", getUser, async (req, res) => {
  res.json(res.user);
});

//Crear un usuario:
routes.post("/", async (req, res) => {
  const { completeName, email, password, typeRol } = req?.body;

  if (!completeName || !email || !password || !typeRol) {
    return res.status(400).json({
      message: "Todos los campos deben estar llenos.",
    });
  }

  try {
    const newUser = await Users.create({
      completeName,
      email,
      password,
      typeRol,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//Actualizar parcialmente un usuario:
routes.patch("/:id", getUser, async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      message: "Al menos UN campo debe ser actualizado.",
    });
  }

  try {
    const userUpdate = res.user;
    await userUpdate.update(req.body);
    res.status(200).json(userUpdate);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//Eliminar un usuario:
routes.delete("/:id", getUser, async (req, res) => {
  try {
    const userDelete = res.user;
    await userDelete.destroy();
    res.status(200).json({
      message: "Usuario " + userDelete.completeName + " eliminado.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Ocurrió un error al intentar eliminar al usuario.",
      error: error.message,
    });
  }
});

export default routes;
