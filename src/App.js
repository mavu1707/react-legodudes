import './App.css';
import './css/main.css';
import ProductCard from './components/ProductCard/ProductCard';
import data from './components/ProductCard/products.json';


//npm start
//npm run css:watch
//npm init

export default function App() {
  return (
    <div className="App">
      <nav>
        
      </nav>
      <main>
      {data.map((product) => (
        <ProductCard
          key={product.proid}
          name={product.title}
          price={product.price}
          cat={product.category}
        />
      ))}
    </main>
  </div>

  )
}
