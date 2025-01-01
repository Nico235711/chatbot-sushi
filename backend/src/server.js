import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js';
import cors from 'cors'
import { corsConfig } from './config/cors.js';

dotenv.config()
connectDB();

const server = express();
// lectura en formato json
server.use(express.json())

// cors
server.use(cors(corsConfig))

server.use("/api/products", productRoutes);

export default server