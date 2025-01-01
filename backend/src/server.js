import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js';
import cors from 'cors'
import { corsConfig } from './config/cors.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config()
connectDB();

const server = express();
// lectura en formato json
server.use(express.json())

// cors
server.use(cors(corsConfig))

server.use("/api/products", productRoutes);
server.use("/api/orders", orderRoutes);

export default server