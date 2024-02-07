import { Router } from "express";
import * as UsuarioController from "../controller/Usuario";

const routes = Router();

routes.get("/", UsuarioController.getAllUsuario);
routes.post("/create", UsuarioController.createUsuario);
routes.get("/getById/:id", UsuarioController.getByIdUsuario);
routes.patch("/updateOne/:id", UsuarioController.updateUsuario);
routes.delete("/deleteOne/:id", UsuarioController.deleteUsuario);

export default routes;
