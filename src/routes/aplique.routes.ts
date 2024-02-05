import { Router } from "express";
import * as ApliqueController from "../controller/Aplique";

const routes = Router();

routes.get("/", ApliqueController.getAllApliques);
routes.post("/create", ApliqueController.createAplique);
routes.get("/getById/:id", ApliqueController.getByIdAplique);
routes.patch("/updateOne/:id", ApliqueController.updateAplique);
routes.delete("/deleteOne/:id", ApliqueController.deleteAplique);

export default routes;
