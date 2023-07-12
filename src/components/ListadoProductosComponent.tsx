import { useEffect, useState } from "react";
import { ProductoCard } from "./product/Product";

const listStyle = {
  list: "flex flex-wrap w-full justify-center sm:justify-start gap-4",
};

export const ListadoProductosComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3001/productos");
    const products = await res.json();
    setProducts(products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className={listStyle.list}>
      {products.map((product: Product) => (
        <ProductoCard key={product.id} product={product} />
      ))}
    </div>
  );
};
