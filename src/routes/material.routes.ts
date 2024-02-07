import { Router } from "express";
import multer from "multer";
import * as MaterialController from "../controller/Material";

const routes = Router();

const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });

routes.get("/", MaterialController.getAllMaterial);
routes.post("/create", upload.single("img"), MaterialController.createMaterial);
routes.get("/getById/:id", MaterialController.getByIdMaterial);
routes.patch("/updateOne/:id", MaterialController.updateMaterial);
routes.delete("/deleteOne/:id", MaterialController.deleteMaterial);

export default routes;
