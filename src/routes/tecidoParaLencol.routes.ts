import { Router } from "express";
import multer from "multer";
import * as TecidoParaLencolController from "../controller/TecidoParaLencol";

const routes = Router();

const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });

routes.get("/", TecidoParaLencolController.getAllTecidoParaLencol);
routes.post(
  "/create",
  upload.single("img"),
  TecidoParaLencolController.createTecidoParaLencol
);
routes.get("/getById/:id", TecidoParaLencolController.getByIdTecidoParaLencol);
routes.patch(
  "/updateOne/:id",
  TecidoParaLencolController.updateTecidoParaLencol
);
routes.delete(
  "/deleteOne/:id",
  TecidoParaLencolController.deleteTecidoParaLencol
);

export default routes;
