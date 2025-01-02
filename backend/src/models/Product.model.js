import { Schema, model } from 'mongoose'

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number
} , { timestamps: true })

export const Product = model('Product', productSchema)
