// controllers/authController.ts

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { UserModel, IUser } from "../models/Usuario";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    // Verifica se o usuário existe no banco de dados
    const user: IUser | null = await UserModel.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ msg: "Nome de usuário ou senha inválidos" });
    }

    // Compara a senha fornecida com a senha hash armazenada no banco de dados
    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      user.password
    );

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
