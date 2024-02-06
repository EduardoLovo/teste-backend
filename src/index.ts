if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import express from "express";
import mongoose from "mongoose";
import apliqueRouter from "./routes/aplique.routes";
import lencolProntoEntregaRouter from "./routes/lencolProntoEntrega.routes";
import materialRouter from "./routes/material.routes";

// import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/apliques", apliqueRouter);
app.use("/lencois-pronto-entrega", lencolProntoEntregaRouter);
app.use("/materiais", materialRouter);

app.get("/", (req, res) => {
  res.send("Hello, TypeScript + Express!");
});

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose
  .set("strictQuery", false)
  .connect(
    // `mongodb+srv://${dbUser}:${dbPass}@cluster0.wrwrg0v.mongodb.net/?retryWrites=true&w=majority`
    // `mongodb+srv://${dbUser}:${dbPass}@cluster0.wrwrg0v.mongodb.net/`
    `mongodb+srv://${dbUser}:${dbPass}@inphantilmoveis.asqijf5.mongodb.net/`
  )

  .then(() => {
    app.listen(3000);
    console.log(`Servidor rodando em http://localhost:${port}`);

    console.log("Conectou com o banco");
  })
  .catch((err) => console.log(err));
