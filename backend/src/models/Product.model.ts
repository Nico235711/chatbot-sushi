import mongoose, { Schema, Document, Types } from 'mongoose'

export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
}

const ProductSchema = new Schema<Product>({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true

  },
  category: {
    type: String,
    required: true
  }
}, { timestamps: true });

const ProductModel = mongoose.model<Product>('Product', ProductSchema);
export default ProductModel;