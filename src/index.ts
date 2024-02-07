if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express, { Application } from "express";
import mongoose from "mongoose";
import apliqueRouter from "./routes/aplique.routes";
import lencolProntoEntregaRouter from "./routes/lencolProntoEntrega.routes";
import materialRouter from "./routes/material.routes";
import tecidoParaLencolRouter from "./routes/tecidoParaLencol.routes";
import usuarioRouter from "./routes/usuario.routes";
import { register, login } from "./controller/authController";

// import login from "./routes/login.routes";

// import cors from "cors";

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/apliques", apliqueRouter);
app.use("/lencois-pronto-entrega", lencolProntoEntregaRouter);
app.use("/materiais", materialRouter);
app.use("/tecidos-para-lencol", tecidoParaLencolRouter);
app.use("/usuarios", usuarioRouter);
// app.use("/usuarios", usuarioRouter);
app.post("/register", register);
app.post("/login", login);

app.get("/", (req, res) => {
  res.send("Hello, TypeScript + Express!");
});

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose
  .set("strictQuery", false)
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@inphantilmoveis.asqijf5.mongodb.net/`
  )

  .then(() => {
    app.listen(3000);
    console.log(`Servidor rodando em http://localhost:${port}`);

    console.log("Conectou com o banco");
  })
  .catch((err) => console.log(err));
