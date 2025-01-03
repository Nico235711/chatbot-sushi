import mongoose from 'mongoose'
import { seedDatabase } from './seed.js';

export async function connectDB() {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL)
    await seedDatabase();
    const url = `${connection.host}:${connection.port}`
    console.log(`Conectado a la base de datos en ${url}`);
  } catch (error) {
    console.log(error);
  }
}