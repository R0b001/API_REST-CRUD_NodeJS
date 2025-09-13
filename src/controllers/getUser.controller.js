//Mostrar un usuario.
const userGet = async (req, res) => {
  res.json(res.user);
};

export default userGet;
