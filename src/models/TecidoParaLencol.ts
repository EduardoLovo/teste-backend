// const mongoose = require("mongoose");
import mongoose, { Document, Schema } from "mongoose";

interface ITecidoParaLencol extends Document {
  codigo: string;
  img: string;
  cor: string;
  estoque: boolean;
}

const TecidoParaLencolSchema = new Schema<ITecidoParaLencol>({
  codigo: String,
  img: String,
  cor: String,
  estoque: Boolean,
});

const TecidoParaLencol = mongoose.model<ITecidoParaLencol>(
  "TecidoParaLencol",
  TecidoParaLencolSchema
);

export default TecidoParaLencol;
