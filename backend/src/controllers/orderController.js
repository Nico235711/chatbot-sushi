import { Order } from "../models/Order.model.js";

export class OrderController {
  
  static createOrder = async (req, res) => {
    try {
      const order = await Order.create(req.body)
      res.status(201).json(order)
    } catch (error) {
      console.log(error);
      
    }
  }
  
  static getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find()
      res.json(orders)
    } catch (error) {
      console.log(error);
      
    }
  }
}