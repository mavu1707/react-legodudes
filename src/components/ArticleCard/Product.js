import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import ShopButton from "./ShopButton";

export default function Product({name, price, cat}){
  return (
    <article className="product-card">
      <ProductCategory cat={cat} />
      <ProductTitle name={name} />
      <ProductPrice price={price} />
      <ShopButton />
    </article>
  )
}