import { Router } from "express";
import { ProductController } from "../controllers/productController.js";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/index.js";

const router = Router()

router.post('/', 
  body("name").notEmpty().withMessage("El nombre del producto es obligatorio"),
  body("description").notEmpty().withMessage("La descripción del producto es obligatoria"),
  body("price")
    .isNumeric().withMessage("Valor no numérico")
    .custom(price => price > 0).withMessage("El precio del producto debe ser mayor que cero"),
  body("category").notEmpty().withMessage("La categoría del producto es obligatoria"),
  handleInputErrors,
  ProductController.createProduct
)

router.get('/', ProductController.getAllProducts)

export default router