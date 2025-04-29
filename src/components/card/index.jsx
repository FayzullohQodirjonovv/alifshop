import React, { useEffect, useState } from "react";
import { ShoppingCart } from 'lucide-react';

const Card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://6810cb0527f2fdac2412cf31.mockapi.io/alifshop")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("API error:", error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="calan mt-[50px]">
      <div className="flex w-[80%] m-auto gap-3 items-center">
        <h2 className="font-bold text-2xl">скидки </h2>
        <p className="text-[#2A8BE7] text-2xl">Смотреть все ></p>
      </div>
      <div className=" w-[80%] m-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bordershadow hover:shadow-lg rounded-2xl transition-all">
            <div className="relative">
              <img src={product.image} alt={product.title} className="w-[35vh] rounded-t-xl h-[30vh]" />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.chegirma}
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <h3 className="mont text-sm font-semibold bg-[#FFEDC2] rounded-3xl">{product.mokia}</h3>
              <p className="text-gray-400 text-sm line-through">{product.eski_narx}</p>
              <p className="text-lg font-bold text-[#FF5757] mb-[10px]">{product.price}</p>
              <button className="colormany bg-[#FFBE1F] rounded-[10px] flex items-center justify-center gap-2 px-4 py-2">
                <ShoppingCart className="w-5 h-5" />
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
