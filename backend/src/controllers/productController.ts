import {  Request, Response } from 'express'
import ProductModel from "../models/Product.model";

export class ProductController {

  static createProduct = async (req: Request, res: Response) => {
    const product = new ProductModel(req.body);
    try {
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      console.log(error);
    }
  }
  
  static getAllProducts = async (req: Request, res: Response) => {
    try {
      const products = await ProductModel.find({});
      res.json(products);
    } catch (error) {
      console.log(error);
    }
  }
}