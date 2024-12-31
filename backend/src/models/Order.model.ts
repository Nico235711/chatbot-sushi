import moongoose, { Schema, Document, Types, PopulatedDoc } from 'mongoose'
import { Product } from './Product.model';

export interface Order extends Document {
  clientName: string;
  products: PopulatedDoc<Product & Document>[];
  total: number;
  status: string;
}

const OrderSchema = new Schema<Order>({
  clientName: {
    type: String,
    required: true
  },
  products: [
    {
      type: Types.ObjectId,
      ref: 'Product',
    }
  ],
  total: {
    type: Number,
    default: 0,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending'
  }
}, { timestamps: true });

const OrderModel = moongoose.model<Order>('Order', OrderSchema);
export default OrderModel