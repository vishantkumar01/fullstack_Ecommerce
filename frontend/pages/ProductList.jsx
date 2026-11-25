import React, { useState, useEffect } from "react";
import Loading from "../components/Loder";
import ProductsCard from "../components/ProductsCard";

const ProductList = () => {
  const [Products, setProducts] = useState([]);
  const [Loder, setLoder] = useState(true);

  const apiUrl = import.meta.env.VITE_Django_BASE_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/products/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((products) => {
        setProducts(products);
        setLoder(false);
      })
      .catch((err) => {
        console.log(err, "Not Found");
        setLoder(false);
      });
  }, []);

  return (
    <div className="h-full pl-5 pr-5 mx-5 my-3 overflow-x-hidden">
      <h1
        className="text-center text-xl font-bold mt-2 min-h-[5vh] px-1 py-1 overflow-hidden bg-white rounded-xl border border-gray-50
            shadow-[0_-4px_5px_rgba(0,0,0,0.05),8px_10px_15px_rgba(0,0,0,0.15)]"
        >
        Products
      </h1>

      {Loder ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-10">
          {Products.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
