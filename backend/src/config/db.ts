import mongoose from 'mongoose';
import colors from 'colors'
import { exit } from 'node:process'
import { dot } from 'node:test/reporters';

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.DATABASE_URL!);
    const url = `${connection.host}:${connection.port}`;
    console.log(colors.magenta(`MongoDB connected: ${url}`));
  } catch (error) {
    console.log(colors.red(`Error: ${error}`));
    exit(1);
  }
};