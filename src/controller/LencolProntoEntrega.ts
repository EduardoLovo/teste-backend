import { Request, Response } from "express";
import LencolProntoEntrega from "../models/LencolProntoEntrega";

const getAllLencolProntoEntrega = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const lencolProntoEntrega = await LencolProntoEntrega.find({});
    res.send(lencolProntoEntrega);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const createLencolProntoEntrega = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (
      !req.body.codigo ||
      !req.body.img ||
      !req.body.quantidade ||
      !req.body.cor ||
      !req.body.tamanho ||
      !req.body.estoque
    ) {
      res.status(400).send("Adicione o número do lençol");
    } else {
      await LencolProntoEntrega.create(req.body);
      res.status(200).send("Lençol adicionado com sucesso");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const getByIdLencolProntoEntrega = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const lencolProntoEntrega = await LencolProntoEntrega.findById({
      _id: req.params.id,
    });
    if (lencolProntoEntrega) {
      res.json(lencolProntoEntrega);
    } else {
      res.status(404).send("Lençol não encontrado");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const updateLencolProntoEntrega = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await LencolProntoEntrega.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send("Lençol atualizado com sucesso");
  } catch (err) {
    console.error(err);
    res.status(400).send("Erro ao atualizar Lençol");
  }
};

const deleteLencolProntoEntrega = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await LencolProntoEntrega.deleteOne({ _id: req.params.id });
    res.status(200).send("Lençol excluído com sucesso");
  } catch (err) {
    console.error(err);
    res.status(400).send("Erro ao excluir Lençol");
  }
};

export {
  getAllLencolProntoEntrega,
  createLencolProntoEntrega,
  getByIdLencolProntoEntrega,
  updateLencolProntoEntrega,
  deleteLencolProntoEntrega,
};
