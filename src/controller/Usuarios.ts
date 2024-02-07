import { Request, Response } from "express";
import Usuario from "../models/Usuario";

const getAllUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario = await Usuario.find({});
    res.send(usuario);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const createUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.body.usuario || !req.body.senha || !req.body.tipo) {
      res.status(400).send("Preencha todos os campos");
    } else {
      await Usuario.create(req.body);
      res.status(200).send("Usuario adicionado com sucesso");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const getByIdUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario = await Usuario.findById({ _id: req.params.id });
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).send("Usuario não encontrado");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const updateUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    await Usuario.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send("Usuario atualizado com sucesso");
  } catch (err) {
    console.error(err);
    res.status(400).send("Erro ao atualizar Usuario");
  }
};

const deleteUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    await Usuario.deleteOne({ _id: req.params.id });
    res.status(200).send("Usuario excluído com sucesso");
  } catch (err) {
    console.error(err);
    res.status(400).send("Erro ao excluir Usuario");
  }
};

export {
  getAllUsuario,
  createUsuario,
  getByIdUsuario,
  updateUsuario,
  deleteUsuario,
};
