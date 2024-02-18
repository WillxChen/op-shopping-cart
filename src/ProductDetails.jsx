import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "./routes/Root";

export default function ProductDetails() {
  const { productsData } = useContext(ShopContext);
  const { data, loading, error } = productsData;
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    data &&
      setSelectedProduct(
        ...data.filter((product) => product.id === parseInt(productId))
      );
  }, [data, productId, selectedProduct]);

  return (
    <div className="grid grid-cols-2 p-40 gap-x-36">
      {selectedProduct && (
        <>
          {/* Image */}
          <div className="grid justify-center">
            <h1 className="text-5xl mb-5 leading-loose font-bold">
              {selectedProduct.coffee_name}
            </h1>
            <div className="max-w-screen-sm">
              <img
                className="object-scale-down h-auto w-full "
                src={selectedProduct.image}
                alt="A picture of a bag of coffee"
              />
            </div>
          </div>

          <div className="grid grid-rows-2">
            <p className="text-2xl self-end mb-10">
              {selectedProduct.description}
            </p>
            <div className="flex flex-row items-start -mx-1">
              {selectedProduct.tasting_notes.map((note) => (
                <p className="border rounded border-slate-600 m-1 p-1 text-sm">
                  {note}
                </p>
              ))}
              {/* <p>{selectedProduct.aroma_notes}</p> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* 

-> Image
Product Image
Carousel


-> Details
Title
Description

  
Flavor Profiles

-> Cart
Quantity
Add to Cart

*/
