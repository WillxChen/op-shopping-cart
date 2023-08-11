import { useEffect } from "react";
import Header from "./Header";
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import useFetchProducts from "./useFetchProducts";

export default function Products() {
  const url = "https://my.api.mockaroo.com/coffee.json?key=df90ae90";
  const { data, loading, error } = useFetchProducts(url);

  useEffect(() => {});

  return (
    <>
      <Header />
      {/* Content Wrapper */}
      <div className="px-10 pb-20">
        <h1 className="text-8xl font-bold pt-7">Our Coffees</h1>
        <p className="my-5">
          Welcome to our selections, your gateway to a diverse collection of
          exceptional coffee blends that are all about flavor and enjoyment.
          We&apos;re excited to share our range of thoughtfully crafted coffees
          that cater to your unique tastes.
        </p>
        <main className="flex">
          <Filter />
          <div className="grid grid-cols-5 auto-cols-max auto-rows-max gap-10">
            {data &&
              data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </main>
      </div>
    </>
  );
}
