import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8001/api/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((products) => {
        setData(products);
      })
      .catch((err) => {
        console.log(err, "Not Found");
      });
  }, []);

  return (
    <div className="h-full p-0 mx-5 my-3 overflow-hidden">
      <h1 className="text-center font-bold">Products</h1>
      <div className="flex flex-wrap gap-10">
        {data.map((product) => (
          <div
            key={product.id}
            className="w-[31vw] min-h-[33vh] px-1  py-1 overflow-hidden bg-white rounded-xl
              border border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05),8px_10px_15px_rgba(0,0,0,0.15)]"
          >
            <div className="bg-gray-500 h-[20vh] rounded-xl">
              <img className="text-center" src={product.image} alt="image" />
            </div>
            <p className="text-[2.5vh]">Name:- {product.name}</p>
            <p className="text-[2.5vh]">Price:- {product.price}</p>
            <p className="text-[2.5vh]">description:- {product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
