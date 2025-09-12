import express from "express";
const app = express();
import { config } from "dotenv";
config();
import routes from "./routes/user.routes.js";
const userRoutes = routes;

//Para identificar los datos que pasan.
app.use(express.json());

//Ruta de los procesos sobre Usuarios:
app.use("/usuarios", userRoutes);

//El puerto donde escuchara el sistema.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Puerto", port, "Activo.");
});
