import { Router } from "express";
import { ProductController } from "../controllers/productController";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware";

const router = Router()

router.post('/', 
  body("name").notEmpty().withMessage("El nombre del producto es obligatorio."),
  body("description").notEmpty().withMessage("La descripcion del producto es obligatoria."),
  body("price").custom(price => price > 0).withMessage("Valor del producto no válido."),
  body("category").notEmpty().withMessage("La categoria del producto es obligatoria."),
  handleInputErrors,
  ProductController.createProduct
)

router.get('/', ProductController.getAllProducts)

export default router