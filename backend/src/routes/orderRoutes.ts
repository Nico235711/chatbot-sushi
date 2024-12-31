import { Router } from "express";
import { OrderController } from "../controllers/orderControlle";

const router = Router()

router.post('/', OrderController.createOrder)

export default router