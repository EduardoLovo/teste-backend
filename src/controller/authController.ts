// controllers/authController.ts
import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authService";

const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await registerUser(username, password);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao registrar usuário");
  }
};

const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await loginUser(username, password);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).send("Credenciais inválidas");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao realizar login");
  }
};

export { register, login };
