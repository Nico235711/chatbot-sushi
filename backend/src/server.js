import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js';

dotenv.config()
connectDB();

const server = express();
// lectura en formato json
server.use(express.json())

server.use("/api/products", productRoutes);

export default server