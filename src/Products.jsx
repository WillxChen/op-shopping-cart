import { useEffect, useState } from "react";
import Header from "./Header";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import useFetchProducts from "./useFetchProducts";

export default function Products() {
  const [filter, setFilter] = useState(null);
  const [products, setProducts] = useState(null);
  const url = "https://my.api.mockaroo.com/coffee.json?key=df90ae90";
  const { data, loading, error } = useFetchProducts(url);

  useEffect(() => {
    if (filter === null) setProducts(data);
    else {
      const [key, value] = Object.entries(filter)[0];
      const filteredProducts = data.filter((product) => {
        return product[key].includes(value);
      });
      setProducts(filteredProducts);
    }
  }, [data, filter]);

  return (
    <>
      <Header />
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
