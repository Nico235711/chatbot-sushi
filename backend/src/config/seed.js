import { Product } from '../models/Product.model.js';

const products = [
  {
    "name": "California Roll",
    "price": 500,
    "description": "Arroz, alga nori, aguacate, pepino y surimi."
  },
  {
    "name": "Spicy Tuna Roll",
    "price": 600,
    "description": "Atún fresco, arroz, alga nori y salsa picante."
  },
  {
    "name": "Salmon Nigiri",
    "price": 300,
    "description": "Loncha de salmón fresco sobre arroz avinagrado."
  },
  {
    "name": "Tuna Nigiri",
    "price": 350,
    "description": "Loncha de atún fresco sobre arroz avinagrado."
  },
  {
    "name": "Shrimp Tempura Roll",
    "price": 700,
    "description": "Gamba tempura, aguacate, arroz y alga nori."
  },
  {
    "name": "Avocado Roll",
    "price": 400,
    "description": "Arroz, alga nori y aguacate fresco."
  },
  {
    "name": "Dragon Roll",
    "price": 750,
    "description": "Anguila, aguacate, arroz, alga nori y salsa especial."
  },
  {
    "name": "Rainbow Roll",
    "price": 800,
    "description": "Roll California cubierto con salmón, atún y aguacate."
  },
  {
    "name": "Cucumber Roll",
    "price": 300,
    "description": "Arroz, alga nori y rodajas de pepino fresco."
  },
  {
    "name": "Eel Nigiri",
    "price": 400,
    "description": "Loncha de anguila a la parrilla sobre arroz avinagrado."
  }
]

export async function seedDatabase() {
  try {
    // Seed products
    const existingProducts = await Product.find();
    if (existingProducts.length > 0) {
      console.log('Products already seeded.');
      return;
    }

    await Product.insertMany(products);
    console.log('Products seeded successfully.');

  } catch (error) {
    console.log('Error seeding database:', error);
  }
}