import { Router } from "express";
import multer from "multer";
import * as ApliqueController from "../controller/Aplique";

const routes = Router();

const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });

routes.get("/", ApliqueController.getAllApliques);
routes.post("/create", upload.single("img"), ApliqueController.createAplique);
routes.get("/getById/:id", ApliqueController.getByIdAplique);
routes.patch("/updateOne/:id", ApliqueController.updateAplique);
routes.delete("/deleteOne/:id", ApliqueController.deleteAplique);

export default routes;
