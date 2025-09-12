import express from "express";
const routes = express.Router();
const users = require("../models/users");

//Rutas de las operaciones del CRUD Users:
//Mostrar todos los usuarios:
routes.get("/", async (req, res) => {
  try {
    const Users = await users.findAll();
    console.log("GET ALL,", Users);

    if (Users.length === 0) {
      return res.status(204).json([]);
    }

    res.json(Users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//Mostrar un usuario:
routes.get("/:id", async (req, res) => {});

//Crear un usuario:
routes.post("/", async (req, res) => {
  const { completeName, email, password, typeRol } = req?.body;

  if (!completeName || !email || !password || !typeRol) {
    res.status(400).json({
      message: "Todos los campos deben estar llenos.",
    });

    try {
      const newUser = await users.create(req.body);
      console.log(newUser);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).message({
        message: error.message,
      });
    }
  }
});

//Actualizar un usuario:
routes.put("/:id", async (req, res) => {});

//Actualizar parcialmente un usuario:
routes.patch("/:id", async (req, res) => {});

//Eliminar un usuario:
routes.delete("/:id", async (req, res) => {});

export default routes;
