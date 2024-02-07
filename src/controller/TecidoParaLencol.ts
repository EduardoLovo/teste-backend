import { Request, Response } from "express";
import TecidoParaLencol from "../models/TecidoParaLencol";

const getAllTecidoParaLencol = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tecidoParaLencol = await TecidoParaLencol.find({});
    res.send(tecidoParaLencol);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const createTecidoParaLencol = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.body.codigo || !req.body.cor || !req.body.estoque) {
      const { codigo, cor, estoque } = req.body;

      // Check if an image file is uploaded
      let img = "";
      if (req.file) {
        // Convert the image buffer to a base64 string or save it to your preferred storage (e.g., AWS S3)
        img = req.file.buffer.toString("base64");
      }

      // Create the Aplique with the image data
      await TecidoParaLencol.create({ codigo, img, cor, estoque });
      res.status(200).send("Tecido adicionado com sucesso");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const getByIdTecidoParaLencol = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tecidoParaLencol = await TecidoParaLencol.findById({
      _id: req.params.id,
    });
    if (tecidoParaLencol) {
      res.json(tecidoParaLencol);
    } else {
      res.status(404).send("Tecido não encontrado");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const updateTecidoParaLencol = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await TecidoParaLencol.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send("Tecido atualizado com sucesso");
  } catch (err) {
    console.error(err);
    res.status(400).send("Erro ao atualizar Tecido");
  }
};

const deleteTecidoParaLencol = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await TecidoParaLencol.deleteOne({ _id: req.params.id });
    res.status(200).send("Tecido excluído com sucesso");
  } catch (err) {
    console.error(err);
    res.status(400).send("Erro ao excluir Tecido");
  }
};

export {
  getAllTecidoParaLencol,
  createTecidoParaLencol,
  getByIdTecidoParaLencol,
  updateTecidoParaLencol,
  deleteTecidoParaLencol,
};
