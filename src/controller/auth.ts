// controllers/authController.ts

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Usuario from "../models/Usuario";
import { IUsuario } from "../models/Usuario";

const login = async (req: Request, res: Response) => {
  const { usuario, senha } = req.body;

  try {
    // Verifica se o usuário existe no banco de dados
    const user: IUsuario | null = await Usuario.findOne({ usuario });

    if (!user) {
      return res
        .status(401)
        .json({ msg: "Nome de usuário ou senha inválidos" });
    }

    // Compara a senha fornecida com a senha hash armazenada no banco de dados
    const isPasswordValid: boolean = await bcrypt.compare(senha, user.senha);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ msg: "Nome de usuário ou senha inválidos" });
    }

    // Se a autenticação for bem-sucedida, você pode gerar um token JWT, criar uma sessão, etc.

    res.status(200).json({ msg: "Login bem-sucedido" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Erro no servidor" });
  }
};

export { login };
