import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/Loader.jsx";                                                                                                                                                             

function ProductDetail() {

  const { id } = useParams();
  const [product, setProducts] = useState([]);
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
        console.log(products, "product");                                 
      })
      .catch((err) => {
        console.log(err, "Not Found");
        setLoder(false);
      });
  }, [id, apiUrl]);

  return (
    <>
      {Loder ? (
        <Loader />
      ) : (
        product.filter((product) => product.id === parseInt(id)).map((product) => (
          <div key={product.id} className="flex flex-wrap gap-10 pt-10 justify-center">
            <div
              className="flex-grow hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out  cursor-pointer max-w-[31vw]  min-h-[33vh] px-1  py-1 overflow-hidden bg-white rounded-xl
          border border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05),8px_10px_15px_rgba(0,0,0,0.15)]"
            >
              <div className="w-full h-[20vh] bg-gray-100 rounded-xl overflow-hidden flex items-center    justify-center">
                <img
                  className="w-full h-full object-cover"
                  src={`${apiUrl}${product.image}`}
                  alt="image"
                />
              </div>
              <p className="text-[2.5vh]">Name:- {product.name}</p>
              <p className="text-[2.5vh]">Price:- {product.price}</p>
              <p className="text-[2.5vh]">description:- {product.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Add to Cart</button>
            </div>
          </div>
        ))
      )}
    </>
  );
}

// export default ProductDetail;
//         <div className="flex flex-wrap gap-10 pt-10 justify-center">
//           <div
//             className="flex-grow hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out  cursor-pointer max-w-[31vw]  min-h-[33vh] px-1  py-1 overflow-hidden bg-white rounded-xl
//         border border-gray-100 shadow-[0_-4px_10px_rgba(0,0,0,0.05),8px_10px_15px_rgba(0,0,0,0.15)]"
//           >
//             <div className="w-full h-[20vh] bg-gray-100 rounded-xl overflow-hidden flex items-center    justify-center">
//               <img
//                 className="w-full h-full object-cover"
//                 src={`${apiUrl}${product.image}`}
//                 alt="image"
//               />
//             </div>
//             <p className="text-[2.5vh]">Name:- {product.name}</p>
//             <p className="text-[2.5vh]">Price:- {product.price}</p>
//             <p className="text-[2.5vh]">description:- {product.description}</p>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">Add to Cart</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



















































































































































export default ProductDetail;
