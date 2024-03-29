import { Request, Response } from "express";
import Aplique from "../models/Aplique";

const getAllApliques = async (req: Request, res: Response): Promise<void> => {
  try {
    const apliques = await Aplique.find({});
    res.send(apliques);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const createAplique = async (req: Request, res: Response): Promise<void> => {
  try {
    if (
      !req.body.codigo ||
      !req.body.quantidade ||
      !req.body.estoque ||
      !req.body.cabana
    ) {
      res.status(400).send("Preencha todos os campos");
    } else {
      const { codigo, quantidade, estoque, cabana } = req.body;

      // Check if an image file is uploaded
      let img = "";
      if (req.file) {
        // Convert the image buffer to a base64 string or save it to your preferred storage (e.g., AWS S3)
        img = req.file.buffer.toString("base64");
      }

      // Create the Aplique with the image data
      await Aplique.create({ codigo, img, quantidade, estoque, cabana });

      res.status(200).send("Aplique adicionado com sucesso");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const getByIdAplique = async (req: Request, res: Response): Promise<void> => {
  try {
    const aplique = await Aplique.findById({ _id: req.params.id });
    if (aplique) {
      res.json(aplique);
    } else {
      res.status(404).send("Aplique não encontrado");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const updateAplique = async (req: Request, res: Response): Promise<void> => {
  try {
    await Aplique.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send("Aplique atualizado com sucesso");
  } catch (err) {
    console.error(err);
    res.status(400).send("Erro ao atualizar Aplique");
  }
};

const deleteAplique = async (req: Request, res: Response): Promise<void> => {
  try {
    await Aplique.deleteOne({ _id: req.params.id });
    res.status(200).send("Aplique excluído com sucesso");
  } catch (err) {
    console.error(err);
    res.status(400).send("Erro ao excluir Aplique");
  }
};

export {
  getAllApliques,
  createAplique,
  getByIdAplique,
  updateAplique,
  deleteAplique,
};
