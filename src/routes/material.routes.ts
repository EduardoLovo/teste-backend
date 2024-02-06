import { Router } from "express";
import * as MaterialController from "../controller/Material";

const routes = Router();

routes.get("/", MaterialController.getAllMaterial);
routes.post("/create", MaterialController.createMaterial);
routes.get("/getById/:id", MaterialController.getByIdMaterial);
routes.patch("/updateOne/:id", MaterialController.updateMaterial);
routes.delete("/deleteOne/:id", MaterialController.deleteMaterial);

export default routes;
