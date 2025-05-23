import React from "react";
import { ShoppingCart, Heart, Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="header border-b-4shadow-sm bg-white">
      <div className="container flex items-center justify-between px-6 py-3 ">
        <div className="flex items-center gap-4">
        <a href="/"><img src="https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg" alt="alif shop" className="h-9 icokko" /></a>  
          <button className="butonsr flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-xl">
            <Menu className="w-5 h-5" />
            <p className="pereft">Tovarlar katalogi</p>
          </button>
        </div>
        <div className="nops flex-1 mx-6">
          <div className="tb1 flex border border-2 border-yellow-400 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Tovarlarni izlash"
              className="inpr flex-grow px-4 py-2 outline-none"
            />
            <button className="tb1 bg-yellow-400 px-4 flex items-center justify-center">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="shopsss flex items-center gap-4 relative ">
        <Link to="/shop" className="relative flex flex-col items-center justify-center cursor-pointer">
  <ShoppingCart className="w-5 h-5" />
  <p>Savat</p>
  <span className="absolute top-0 right-1 mt-[-8px] bg-red-500 text-white p-2 rounded-full w-4 h-4 flex items-center justify-center text-xs">
  0
</span>
</Link>

<Link to="/like" className="relative flex flex-col items-center justify-center cursor-pointer">
  <Heart className="w-5 h-5" />
  <p>Saralanganlar</p>
</Link>

<div className="flexdsa flex gap-3 items-center">
          <button className="border px-4 py-2 rounded border-amber-400 border-2 ">Kirish</button>
          <div>
          <span className="text-sm text-gray-500">РУС / UZB</span>
          </div>
</div>
        </div>
      </div>

      <nav className="greyn container px-4 py-2 bg-white text-gray-600  flex justify-between gap-6 text-sm border-gray-200 font-bold">
        <span>Smartfonlar va gadjetlar</span>
        <span>Noutbuklar, kompyuterlar</span>
        <span>TV va proektorlar</span>
        <span className="span1">Audiotexnikalar</span>
        <span className="span1">Transport</span>
        <span className="span1">Naborlar</span>
        <span className="span">Uy uchun texnika</span>
        <span className="span">Oshxona uchun texnika</span>
        <span className="cursor-pointer span text-[black]">Yana ▾</span>
      </nav>
    </header>
  );
};

export default Navbar;
