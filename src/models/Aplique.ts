// const mongoose = require("mongoose");
import mongoose, { Document, Schema } from "mongoose";

interface IAplique extends Document {
  number: string;
  img: string;
  quantidade: number;
  estoque: boolean;
}

const ApliqueSchema = new Schema<IAplique>({
  number: String,
  img: String,
  quantidade: Number,
  estoque: Boolean,
});

const Aplique = mongoose.model<IAplique>("Aplique", ApliqueSchema);

export default Aplique;
