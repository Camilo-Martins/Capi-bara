import express from "express";
import {
  users,
  perfil,
  createUser,
  loginUser,
  confirmar,
  recuperarPassword,
  validarToken,
  newPassword,
} from "../controllers/User.controller.js";

import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/confirmar/:token", confirmar);
router.post("/olvide-password", recuperarPassword);
//router.get("/olvide-password/:token", validarToken)
//router.post("/olvide-password/:token", newPassword)

router.route("/olvide-password/:token").get(validarToken).post(newPassword);
router.get("/perfil", checkAuth, perfil);

export default router;
