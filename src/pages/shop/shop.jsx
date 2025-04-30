import React from "react";
import { useCart } from "../CartContext/index";

const Shop = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price.toString().replace(/\s/g, '').replace(/[^0-9]/g, ''));
    return acc + price;
  }, 0);
  


  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-8 mb-[50px]">
      <h1 className="text-2xl font-bold mb-6">Savatdagi mahsulotlar</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Savatingiz bo'sh.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center border rounded-lg p-4 shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">Sotuvchi: JOYBOX</p>
                  <p className="text-gray-500 text-sm">Yetkazib berish: 1-3 kun</p>
                  <div className="bg-gray-100 text-sm p-2 rounded-md mt-2 w-fit">
                    Rassrochka: <strong>152 323 so'm × 24 oy</strong>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#FF5757] font-bold text-lg">{item.price.toLocaleString()} so'm</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3 border rounded-lg p-4 shadow-sm bg-gray-50 h-fit">
            <h2 className="text-xl font-semibold mb-4">Itogo</h2>
            <div className="flex justify-between mb-2">
              <span>Kol-vo tovarov</span>
              <span>{cartItems.length} ta</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Dostavka</span>
              <span className="text-green-600 font-medium">Bepul</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-lg font-bold">
              <span>Jami</span>
              <span>{totalPrice.toLocaleString()} so'm</span>

            </div>
            <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition duration-200">
              Oformit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
