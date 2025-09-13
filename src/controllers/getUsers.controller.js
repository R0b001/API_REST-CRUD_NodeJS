//Las operaciones del CRUD Users
import db from "../models/index.js";
const { Users } = db;

const usersGet = async (req, res) => {
  try {
    const getUsers = await Users.findAll();

    if (getUsers.length === 0) {
      return res.status(204).json([]);
    }

    res.json(getUsers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export default usersGet;
