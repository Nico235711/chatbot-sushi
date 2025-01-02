import { Router } from "express";
import { OrderController } from "../controllers/orderController.js";

const router = Router();

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);

export default router;