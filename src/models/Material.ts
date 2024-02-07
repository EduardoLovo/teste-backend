import mongoose, { Document, Schema } from "mongoose";

interface IMaterial extends Document {
  codigo: string;
  img: string;
  cor: string;
  estoque: boolean;
}

const MaterialSchema = new Schema<IMaterial>({
  codigo: String,
  img: String,
  cor: String,
  estoque: Boolean,
});

const Material = mongoose.model<IMaterial>("Material", MaterialSchema);

export default Material;
