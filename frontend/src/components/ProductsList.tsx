import { Product } from "@/interfaces"
import { formatCurrency } from "@/utils"

interface ProductsListProps {
  product: Product
}
export const ProductsList = ({ product }: ProductsListProps) => {

  return (
    <div className="mt-5 space-y-5 bg-slate-100 p-5 rounded-md flex flex-col justify-between items-start">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-lg">{product.description}</p>
      <p>{formatCurrency(product.price)}</p>
      <span className="bg-slate-800 text-white p-2 inline-block">Categoría: {product.category}</span>
    </div>
  )
}
