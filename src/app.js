// const express = require('express');
import express from "express";
const app = express();
import { config } from "dotenv";
config();

import routes from "./routes/user.routes.js";
const userRoutes = routes;
//
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

/*
app.get("/", (req, res) => {
  res.send("Holaaa mundo!");
});
*/

//Ruta de los procesos sobre Usuarios:
app.use("/usuarios", userRoutes);

//El puerto donde escuchara el sistema.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Puerto", port, "Activo.");
});
