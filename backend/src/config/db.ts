import mongoose from 'mongoose'
import { exit } from 'node:process'

export async function connectDB() {
  
  try {
    const { connection } = await mongoose.connect(process.env.DATABASE_URL!);
    const url = `${connection.host}:${connection.port}`;
    console.log(`MongoDB connected at ${url}`);
  } catch (error) {
    console.log(error);
    exit(1);
  }
}