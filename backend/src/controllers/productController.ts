import { ProductModel } from "../models/Produt.model";
import { Request, Response } from "express";

export class ProductController {

  static createProduct = async(req: Request, res: Response) => {
    const product = new ProductModel(req.body);

    try {
      await product.save();
      res.status(201).json(product);
    } catch (error) { 
      console.log(error);
    } 
  }
}