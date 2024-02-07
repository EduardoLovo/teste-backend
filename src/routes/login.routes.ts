import { login } from "./../controller/auth";
import { Router } from "express";
import * as loginController from "../controller/auth";

const routes = Router();

routes.post("/login", loginController.login);

export default routes;
