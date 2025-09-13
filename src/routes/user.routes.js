import express from "express";
const routes = express.Router();
//Rutas de los controladores:
import getUser from "../middleware/getUser.middleware.js";
import usersGet from "../controllers/getUsers.controller.js";
import userGet from "../controllers/getUser.controller.js";
import postUser from "../controllers/postUser.controller.js";
import patchUser from "../controllers/patchUser.controller.js";
import deleteUser from "../controllers/deleteUser.controller.js";

//Rutas de las operaciones del CRUD Users:
//Mostrar todos los usuarios:
routes.get("/", usersGet);

//Mostrar un usuario:
routes.get("/:id", getUser, userGet);

//Crear un usuario:
routes.post("/", postUser);

//Actualizar parcialmente un usuario:
routes.patch("/:id", getUser, patchUser);

//Eliminar un usuario:
routes.delete("/:id", getUser, deleteUser);

export default routes;
