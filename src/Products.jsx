import { useEffect, useState, useContext } from "react";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import { ShopContext } from "./routes/Root";

export default function Products() {
  // Context
  const { productsData } = useContext(ShopContext);
  // States
  const [filter, setFilter] = useState(null);
  const [products, setProducts] = useState(null);
  const { data, loading, error } = productsData;

  useEffect(() => {
    if (!filter) setProducts(data);
    if (typeof data !== "object") setProducts([]);
    else {
      console.log(products);
      const [key, value] = Object.entries(filter)[0];
      const filteredProducts = data.filter((product) => {
        return product[key].includes(value);
      });
      setProducts(filteredProducts);
    }
  }, [data, filter]);

  return (
    <>
      {/* Content Wrapper */}
      <div className="px-10 pb-20">
        <h1 className="text-8xl font-bold pt-7">Our Coffees</h1>
        <p className="my-5">
          Welcome to our selections, your gateway to a diverse collection of
          exceptional coffee blends that are all about flavor and enjoyment.
          <br />
          We&apos;re excited to share our range of thoughtfully crafted coffees
          that cater to your unique tastes.
        </p>
        <main className="flex gap-7">
          <Filter setFilter={setFilter} />
          <div className="grid grid-cols-5 auto-cols-max auto-rows-max gap-10">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </main>
      </div>
    </>
  );
}
