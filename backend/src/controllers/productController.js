import ProductModel from "../models/Product.model.js";

export class ProductController {

  static createProduct = async(req, res) => {
    try {
      const product = new ProductModel(req.body);
      await product.save();
      res.status(201).json(product);
    } 
    catch (error) {
      console.log(error);
    }
  }

  static getAllProducts = async(req, res) => {
    try {
      const products = await ProductModel.find();
      res.json(products);
    } 
    catch (error) {
      console.log(error);
    }
  }
}