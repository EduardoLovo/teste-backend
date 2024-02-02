import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript + Express!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});