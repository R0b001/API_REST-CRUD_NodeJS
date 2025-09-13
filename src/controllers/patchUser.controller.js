//Actualización parcial o completa.
const patchUser = async (req, res) => {
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
};

export default patchUser;
