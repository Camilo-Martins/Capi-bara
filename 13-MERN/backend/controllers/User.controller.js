import User from "../models/User.model.js";
import generarID from "../helpers/GenerarId.js";
import generatJWT from "../helpers/generarJWT.js";

const createUser = async (req, res) => {
  //Evitar registro duplicados
  const { email } = req.body;
  const isUser = await User.findOne({ email });

  if (isUser) {
    const error = new Error("El correo se encuentra en uso.");
    return res.status(400).json({ msg: error.message });
  }

  try {
    const user = new User(req.body);
    user.token = await generarID();

    const userSaved = await user.save();
    res.json(userSaved);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("El usuario no existe.");
    return res.status(404).json({ msg: error.message });
  }

  if (!user.isConfirm) {
    const error = new Error("Tu cuenta no ha sido confimada.");
    return res.status(403).json({ msg: error.message });
  }

  if (await user.comprobarPassword(password)) {
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: generatJWT(user._id),
    });
  } else {
    const error = new Error("Hubo un error.");
    return res.status(403).json({ msg: error.message });
  }
};

const users = async (req, res) => {
  res.json({ msg: "Confirmando" });
};

const confirmar = async (req, res) => {
  const { token } = req.params;

  const userConfirm = await User.findOne({ token });

  if (!userConfirm) {
    const error = new Error("Token no válido");
    return res.status(403).json({ msg: error.message });
  }

  try {
    userConfirm.isConfirm = true;
    userConfirm.token = "";

    await userConfirm.save();
    res.json({ msg: "User confirmed sucessfuly" });
  } catch (error) {
    return res.status(404).json({ msg: error.message });
  }
};

const recuperarPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("El usuario no existe.");
    return res.status(404).json({ msg: error.message });
  }

  try {
    user.token = generarID();
    await user.save();
    res.json({ msg: "Hemos enviado un email con las instruncciones." });
  } catch (error) {
    console.log(error);
  }
};

const validarToken = async (req, res) => {
  const { token } = req.params;

  const tokenValido = await User.findOne({ token });

  if (tokenValido) {
    res.json({ msg: "Token válido" });
  } else {
    const error = new Error("Token no válido");
    return res.status(404).json({ msg: error.message });
  }
};

const newPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const findUser = await User.findOne({ token });
  console.log(password);

  if (!password) {
    const error = new Error("Debe ingresar una contraseña");
    return res.status(404).json({ msg: error.message });
  }

  if (findUser) {
    findUser.password = password;
    findUser.token = "";

    await findUser.save();
    res.json({ msg: "Su contraseña ha sido actualizada." });
  } else {
    const error = new Error("Token no válido");
    res.status(404).json({ msg: error.message });
  }
};

const perfil = async (req, res)  => {

  const {user} = req

  res.json({user})
  
};
export {
  createUser,
  users,
  loginUser,
  confirmar,
  recuperarPassword,
  validarToken,
  newPassword,
  perfil,
};
