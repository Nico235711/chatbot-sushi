import { Schema , model } from 'mongoose';

const orderSchema = new Schema({
  products: String,
}, { timestamps: true });

export const Order = model('Order', orderSchema);