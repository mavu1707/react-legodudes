import './App.css';
import Product from "./components/ArticleCard/Product";
import './css/main.css';
import data from "./components/ArticleCard/products.json";

//npm start
//npm run css:watch
//npm init

export default function App() {
  return (
    <div className="App">
      <main>
        {data.map((product) =>(
          <Product
          key={product.proid}
          name={product.title}
          price={product.price}
          cat={product.category}
        />
        ))}
      </main>
    </div>
  );
}
