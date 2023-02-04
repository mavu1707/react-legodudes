import ProductCategory from "./ProductCategory";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductButton from "./ProductButton";

export default function ProductCard({ name, price, cat }) {
  return (
    <article className="product-card">
      <ProductCategory cat={cat} />
      <ProductName name={name} />
      <ProductPrice price={price} />
      <ProductButton />
    </article>
  );
}