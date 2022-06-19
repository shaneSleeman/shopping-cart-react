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
  const [shopItems, setShopItems] = useState([]);
  /*
  const [shopItems, setShopItems] = useState([
    <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?tshirt" description="Shirt 1" price="30" sid="0"/></div>,
            <div onClick={addCartItem}><ShopItem onClick={addCartItem} image="https://source.unsplash.com/200x200/?shirt" description="Shirt 2" price="25" sid="1"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?sleeves" description="Shirt 3" price="40" sid="2"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?pants" description="Pants 1" price="32" sid="3"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?trousers" description="Pants 2" price="42" sid="4"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?shorts" description="Pants 3" price="25" sid="5"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?shoe" description="Shoes 1" price="120" sid="6"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?shoes" description="Shoes 2" price="80" sid="7"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?boots" description="Shoes 3" price="70" sid="8"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?cap" description="Hat 1" price="20" sid="9"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?hat" description="Hat 2" price="15" sid="10"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?fedora" description="Hat 3" price="40" sid="11"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?jumper" description="Jacket 1" price="60" sid="12"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?jacket" description="Jacket 2" price="40" sid="13"/></div>,
            <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?hoodie" description="Jacket 3" price="30" sid="14"/></div>
  ]);*/

  useEffect(() => {
    let shopItemsAppend = [
      <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?tshirt" description="Shirt 1" price="30" sid="0"/></div>,
              <div onClick={addCartItem}><ShopItem onClick={addCartItem} image="https://source.unsplash.com/200x200/?shirt" description="Shirt 2" price="25" sid="1"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?sleeves" description="Shirt 3" price="40" sid="2"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?pants" description="Pants 1" price="32" sid="3"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?trousers" description="Pants 2" price="42" sid="4"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?shorts" description="Pants 3" price="25" sid="5"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?shoe" description="Shoes 1" price="120" sid="6"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?shoes" description="Shoes 2" price="80" sid="7"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?boots" description="Shoes 3" price="70" sid="8"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?cap" description="Hat 1" price="20" sid="9"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?hat" description="Hat 2" price="15" sid="10"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?fedora" description="Hat 3" price="40" sid="11"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?jumper" description="Jacket 1" price="60" sid="12"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?jacket" description="Jacket 2" price="40" sid="13"/></div>,
              <div onClick={addCartItem}><ShopItem image="https://source.unsplash.com/200x200/?hoodie" description="Jacket 3" price="30" sid="14"/></div>
    ];
    let empty = [];
    setShopItems(empty => shopItemsAppend);

    function addCartItem(e) {
      const ids = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
      if(ids.includes(e.target.id)) {
        setCartItems(cartItems, [...cartItems, shopItems[e.target.id]]);
        alert(e.target.id)
      }
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