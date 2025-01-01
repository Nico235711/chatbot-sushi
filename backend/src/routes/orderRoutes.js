import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/index.js";
import { OrderController } from "../controllers/OrderController.js";

const router = Router()

router.post('/', 
  body("clientName").notEmpty().withMessage("El nombre del cliente es obligatorio"),
  body("orderItems").isArray({  min: 1 }).withMessage("No ha ordenado nada"),
  handleInputErrors,
  OrderController.createOrder
)

router.get('/', OrderController.getAllOrders)

export default router