// const mongoose = require("mongoose");
import mongoose, { Document, Schema } from "mongoose";

interface ILencolProntoEntrega extends Document {
  codigo: string;
  img: string;
  quantidade: number;
  cor: string;
  tamanho: string;
  estoque: boolean;
}

const LencolProntoEntregaSchema = new Schema<ILencolProntoEntrega>({
  codigo: String,
  img: String,
  quantidade: Number,
  cor: String,
  tamanho: String,
  estoque: Boolean,
});

const LencolProntoEntrega = mongoose.model<ILencolProntoEntrega>(
  "LencolProntoEntrega",
  LencolProntoEntregaSchema
);

export default LencolProntoEntrega;
