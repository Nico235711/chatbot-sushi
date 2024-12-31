import { Router } from "express";
import { OrderController } from "../controllers/orderController";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware";

const router = Router()

router.post('/', 
  body("clientName").notEmpty().withMessage("El nombre del cliente es obligatorio."),
  handleInputErrors,
  OrderController.createOrder
)

router.get('/', OrderController.getAllOrders)

export default router