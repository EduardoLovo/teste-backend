import { Request, Response } from "express";
import Material from "../models/Material";

const getAllMaterial = async (req: Request, res: Response): Promise<void> => {
  try {
    const material = await Material.find({});
    res.send(material);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const createMaterial = async (req: Request, res: Response): Promise<void> => {
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
      await Material.create({ codigo, img, cor, estoque });
      res.status(200).send("Material adicionado com sucesso");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const getByIdMaterial = async (req: Request, res: Response): Promise<void> => {
  try {
    const material = await Material.findById({ _id: req.params.id });
    if (material) {
      res.json(material);
    } else {
      res.status(404).send("Material não encontrado");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro interno do servidor");
  }
};

const updateMaterial = async (req: Request, res: Response): Promise<void> => {
  try {
    await Material.updateOne({ _id: req.params.id }, req.body);
    res.status(200).send("Material atualizado com sucesso");
  } catch (err) {
    console.error(err);
    res.status(400).send("Erro ao atualizar Material");
  }
};

const deleteMaterial = async (req: Request, res: Response): Promise<void> => {
  try {
    await Material.deleteOne({ _id: req.params.id });
    res.status(200).send("Material excluído com sucesso");
  } catch (err) {
    console.error(err);
    res.status(400).send("Erro ao excluir Material");
  }
};

export {
  getAllMaterial,
  createMaterial,
  getByIdMaterial,
  updateMaterial,
  deleteMaterial,
};
