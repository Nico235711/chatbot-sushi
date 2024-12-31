import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DATABASE_URL)
    const url = `${connection.host}:${connection.port}`
    console.log(`Database connected at ${url}`)
  } catch (error) {
    console.log(error)
  }
}