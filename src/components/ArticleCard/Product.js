import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import ShopButton from "./ShopButton";

export default function Product(){
  return (
    <article className="product-card">
      <ProductTitle name ="Dragon Zane"/>
      <ProductCategory category="Ninjago"/>
      <ProductPrice price="99 kr"/>
      <ShopButton />
     </article>
  )
}