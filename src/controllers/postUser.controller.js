import db from "../models/index.js";
const { Users } = db;

const postUser = async (req, res) => {
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
};

export default postUser;
