import Product from "./components/Product"
import { products } from "./data/products"

const App = () => {
  const productsList = products.map(product => <Product key={product.id} {...product} />);

  return (
    <main className="container mx-auto p-5">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">{productsList}</section>
    </main>
  )
}

export default App
