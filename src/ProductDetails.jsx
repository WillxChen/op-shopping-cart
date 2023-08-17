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
    <div className="grid grid-cols-2 px-10 pb-20">
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
            <p className="text-xl">{selectedProduct.description}</p>
            <div>
              <p>{selectedProduct.tasting_notes}</p>
              <p>{selectedProduct.aroma_notes}</p>
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
