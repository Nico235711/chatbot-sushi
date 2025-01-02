import { Router } from "express";
import { ProductController } from "../controllers/productController.js";

const router = Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProducts);

export default router;