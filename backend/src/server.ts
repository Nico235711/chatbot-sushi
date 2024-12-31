import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db';
import productRoutes from './routes/productRoutes'

dotenv.config()
connectDB()

const server = express();

// habilito la lectura en json
server.use(express.json());
server.use("/api/products", productRoutes)

export default server