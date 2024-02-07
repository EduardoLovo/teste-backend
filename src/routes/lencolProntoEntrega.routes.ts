import { Router } from "express";
import multer from "multer";
import * as LencolProntoEntregaController from "../controller/LencolProntoEntrega";

const routes = Router();

const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });

routes.get("/", LencolProntoEntregaController.getAllLencolProntoEntrega);
routes.post(
  "/create",
  upload.single("img"),
  LencolProntoEntregaController.createLencolProntoEntrega
);
routes.get(
  "/getById/:id",
  LencolProntoEntregaController.getByIdLencolProntoEntrega
);
routes.patch(
  "/updateOne/:id",
  LencolProntoEntregaController.updateLencolProntoEntrega
);
routes.delete(
  "/deleteOne/:id",
  LencolProntoEntregaController.deleteLencolProntoEntrega
);

export default routes;
