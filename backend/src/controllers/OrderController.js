import { OrderModel } from "../models/Order.model.js";

export class OrderController {

  static createOrder = async(req, res) => {
    try {
      const order = new OrderModel(req.body);
      await order.save();
      res.status(201).json(order);
    } 
    catch (error) {
      console.log(error);
    }
  }

  static getAllOrders = async(req, res) => {
    try {
      const orders = await OrderModel.find();
      res.json(orders);
    } 
    catch (error) {
      console.log(error);
    }
  }
}