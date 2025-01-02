import { Product } from "../models/Product.model.js";

export class ProductController {
  
  static createProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body)
      res.status(201).json(product)
    } catch (error) {
      console.log(error);
      
    }
  }
  
  static getAllProducts = async (req, res) => {
    try {
      const products = await Product.find()
      res.json(products)
    } catch (error) {
      console.log(error);
      
    }
  }
}