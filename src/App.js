import './App.css';
import './css/main.css';

import ProductCard from './components/ProductCard/ProductCard';
import data from './components/ProductCard/products.json';

import NavBar from './components/NavBar/NavBar';
import nav from './components/NavBar/navlinks.json';

import {ReactComponent as Logo} from './img/LD_logo.svg';
import {ReactComponent as Cart} from './img/legocart.svg';
//npm start
//npm run css:watch
//npm init

export default function App() {
  return (
    <div className="App">
      <main>
        {/*Header*/}
        <header>
          <Logo className='logo'/>
          <Cart className='cart'/>
        </header>

        {/*Nav Bar*/}
        <nav>
          {nav.map((navbar) => (
            <NavBar
              name={navbar.title}
            />
          ))}
        </nav>
          
        <h2>Ninjago</h2>

        {/*Product card*/}
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
