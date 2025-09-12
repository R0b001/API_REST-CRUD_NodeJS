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

export default getUser;
