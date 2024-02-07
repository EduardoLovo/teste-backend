// const mongoose = require("mongoose");
import mongoose, { Document, Schema } from "mongoose";

interface IAplique extends Document {
  codigo: string;
  img: string;
  quantidade: number;
  estoque: boolean;
  cabana: boolean;
}

const ApliqueSchema = new Schema<IAplique>({
  codigo: String,
  img: String,
  quantidade: Number,
  estoque: Boolean,
  cabana: Boolean,
});

const Aplique = mongoose.model<IAplique>("Aplique", ApliqueSchema);

export default Aplique;
