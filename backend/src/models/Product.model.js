import { model, Schema } from "mongoose"

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String
})

const ProductModel = model('Product', productSchema)
export default ProductModel