import { model, Schema, Types } from "mongoose";

const orderSchema = new Schema({
  clientName: String,
  orderItems: [
    {
      type: Types.ObjectId,
      ref: "Product",
    }
  ],
  total: Number,
  status: {
    type: String,
    enum: ["PENDING", "COMPLETED", "CANCELLED"],
    default: "PENDING",
  },
}, { timestamps: true });


export const OrderModel = model("Order", orderSchema);