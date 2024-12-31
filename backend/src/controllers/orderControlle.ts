import OrderModel from "../models/Order.model";
import {  Request, Response } from 'express'

export class OrderController {

  static createOrder = async (req: Request, res: Response) => {
    const order = new OrderModel(req.body);
    try {
      await order.save();
      res.status(201).json(order);
    } catch (error) {
      console.log(error);
    }
  }
}