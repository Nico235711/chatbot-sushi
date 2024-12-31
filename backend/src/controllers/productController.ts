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

  static getAllProducts = async(req: Request, res: Response) => {
    
    try {
      const product = await ProductModel.find();
      res.status(201).json(product);
    } catch (error) { 
      console.log(error);
    } 
  }
}