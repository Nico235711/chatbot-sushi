import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db';
import productRoutes from './routes/productRoutes'
import cors from 'cors'
import { corsConfig } from './config/cors';

dotenv.config()
connectDB()

const server = express();

// habilito la lectura en json
server.use(express.json());

// habilito los cors
server.use(cors(corsConfig))
server.use("/api/products", productRoutes)

export default server