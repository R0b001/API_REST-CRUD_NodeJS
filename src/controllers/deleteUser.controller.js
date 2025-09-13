//Eliminar un usuario.
const deleteUser = async (req, res) => {
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
};

export default deleteUser;
