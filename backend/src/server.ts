import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import productRoutes from './routes/productRoutes'
import orderRoutes from './routes/orderRoutes'
import { corsOptions } from './config/cors';
import cors from 'cors'
import morgan from 'morgan';

dotenv.config();
connectDB()

const server = express();

// habilito la lectura de json
server.use(express.json())

// habilito los cors
server.use(cors(corsOptions))

// habilito el logging de morgan
server.use(morgan("dev"));

server.use("/api/products", productRoutes)
server.use("/api/orders", orderRoutes)

export default server