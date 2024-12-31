import { useEffect, useState } from "react"
import { Product } from "./interfaces"
import { ProductsList } from "./components/ProductsList";

export default function App() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <header className="bg-slate-800 p-5">
        <h1 className="text-3xl text-white text-center">Sistema de Pedidos de Sushi</h1>
      </header>
      <main className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductsList key={product._id} product={product} />
          ))}
        </div>
      </main>
    </>
  )
}
