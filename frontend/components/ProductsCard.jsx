import { Link } from "react-router-dom";

function ProductsCard({ product }) {
  const apiUrl = import.meta.env.VITE_Django_BASE_URL;
  return (
    <Link to={`/product/${product.id}`}>
      <div className="flex flex-wrap gap-10 pt-10 justify-center cursor-pointer">
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
        </div>
      </div>
    </Link>
  );
}

export default ProductsCard;
