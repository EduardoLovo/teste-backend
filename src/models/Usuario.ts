// const mongoose = require("mongoose");
import mongoose, { Document, Schema } from "mongoose";

interface IUsuario extends Document {
  usuario: string;
  senha: string;
  tipo: string;
}

const UsuarioSchema = new Schema<IUsuario>({
  usuario: String,
  senha: String,
  tipo: String,
});

const Usuario = mongoose.model<IUsuario>("Usuario", UsuarioSchema);

export default Usuario;
