import moongoose, { Schema, Document, Types } from 'mongoose'

export interface Order extends Document {
  user: string;
  products: Types.ObjectId;
  total: number;
  status: string;
}

const OrderSchema = new Schema<Order>({
  user: {
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