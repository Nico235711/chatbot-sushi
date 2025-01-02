import { Router } from "express";
import { ProductController } from "../controllers/productController.js";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/index.js";

const router = Router();

router.post("/", 
  body("name").notEmpty().withMessage("El nombre del producto es obligatorio"),
  body("description").notEmpty().withMessage("La descripcion del producto es obligatoria"),
  body("price")
    .isNumeric().withMessage("El precio del producto debe ser un numero")
    .custom(price => price > 0).withMessage("El precio del producto debe ser mayor a cero"),
  handleInputErrors,
  ProductController.createProduct
);

router.get("/", ProductController.getAllProducts);

export default router;