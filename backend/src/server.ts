import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import productRoutes from './routes/productRoutes'
import orderRoutes from './routes/orderRoutes'

dotenv.config();
connectDB()

const server = express();

// habilito la lectura de json
server.use(express.json())

server.use("/api/products", productRoutes)
server.use("/api/orders", orderRoutes)

export default server