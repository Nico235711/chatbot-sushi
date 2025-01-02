import mongoose from 'mongoose'

export async function connectDB() {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL)
    const url = `${connection.host}:${connection.port}`
    console.log(`Conectado a la base de datos en ${url}`);
  } catch (error) {
    console.log(error);
  }
}