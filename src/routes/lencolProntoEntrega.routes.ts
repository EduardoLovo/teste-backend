import { Router } from "express";
import * as LencolProntoEntregaController from "../controller/LencolProntoEntrega";

const routes = Router();

routes.get("/", LencolProntoEntregaController.getAllLencolProntoEntrega);
routes.post("/create", LencolProntoEntregaController.createLencolProntoEntrega);
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
