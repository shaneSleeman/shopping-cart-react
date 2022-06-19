import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import Cartpage from "./components/Cartpage";
import Shoppage from "./components/Shoppage";
import Nav from "./components/Nav";
import React, {useState, useEffect} from "react";
import ShopItem from "./components/ShopItem";

const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shopItems, setShopItems] = useState([
    <ShopItem image="https://source.unsplash.com/200x200/?tshirt" description="Shirt 1" price="30"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?shirt" description="Shirt 2" price="25"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?sleeves" description="Shirt 3" price="40"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?pants" description="Pants 1" price="32"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?trousers" description="Pants 2" price="42"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?shorts" description="Pants 3" price="25"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?shoe" description="Shoes 1" price="120"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?shoes" description="Shoes 2" price="80"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?boots" description="Shoes 3" price="70"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?cap" description="Hat 1" price="20"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?hat" description="Hat 2" price="15"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?fedora" description="Hat 3" price="40"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?jumper" description="Jacket 1" price="60"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?jacket" description="Jacket 2" price="40"/>,
            <ShopItem image="https://source.unsplash.com/200x200/?hoodie" description="Jacket 3" price="30"/>
  ]);

  useEffect(() => {
    function addCartItem(shopItem) {
      let empty = [];
      setCartItems(empty => cartItems);
    }
  })

  return (
    <BrowserRouter className="page">
      <Nav cartCount={cartItems.length}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/shoppage" element={<Shoppage items={shopItems}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;