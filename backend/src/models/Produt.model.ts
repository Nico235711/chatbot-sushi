import moongoose, {  Schema, Document } from 'mongoose'

export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
}

const productSchema = new Schema<Product>({
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
  },
}, { timestamps: true });

export const ProductModel = moongoose.model<Product>('Product', productSchema);