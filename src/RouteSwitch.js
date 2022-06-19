import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Cartpage from "./components/Cartpage";
import Shoppage from "./components/Shoppage";
import Nav from "./components/Nav";
import React, {useState, useEffect} from "react";
import ShopItem from "./components/ShopItem";

const RouteSwitch = () => {
  const [cartItems, setCartItems] = useState([]);
  const [shopItems, setShopItems] = useState([]);

  let items = [
    <ShopItem image="https://source.unsplash.com/200x200/?tshirt" description="Shirt 1" price="30" sid="0"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?shirt" description="Shirt 2" price="25" sid="1"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?sleeves" description="Shirt 3" price="40" sid="2"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?pants" description="Pants 1" price="32" sid="3"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?trousers" description="Pants 2" price="42" sid="4"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?shorts" description="Pants 3" price="25" sid="5"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?shoe" description="Shoes 1" price="120" sid="6"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?shoes" description="Shoes 2" price="80" sid="7"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?boots" description="Shoes 3" price="70" sid="8"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?cap" description="Hat 1" price="20" sid="9"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?hat" description="Hat 2" price="15" sid="10"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?fedora" description="Hat 3" price="40" sid="11"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?jumper" description="Jacket 1" price="60" sid="12"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?jacket" description="Jacket 2" price="40" sid="13"/>,
    <ShopItem image="https://source.unsplash.com/200x200/?hoodie" description="Jacket 3" price="30" sid="14"/>
  ];

  function addCartItem(e) {
    const ids = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
    if(ids.includes(e.target.id)) {
      setCartItems(cartItems => [...cartItems, items[e.target.id]]);
    }
    /*
    else if(e.target.id.charAt(0) == "r") {
      let selected = e.target.id.substr(1, e.target.id.length);
      let cartCopy = cartItems.filter(item => item !== cartItems[+selected]);
      setCartItems(empty => cartCopy);
    }*/
  }

  function test(e) {
    console.log(e.target.id)
    if(e.target.id.charAt(0) == "r") {
      let selected = e.target.id.substr(1, e.target.id.length);
      let cartCopy = cartItems.filter(item => item !== cartItems[+selected]);
      setCartItems(empty => cartCopy);
    }
  }

  useEffect(() => {
    
    let shopItemsAppend = [
              <div onClick={addCartItem}>{items[0]}</div>,
              <div onClick={addCartItem}>{items[1]}</div>,
              <div onClick={addCartItem}>{items[2]}</div>,
              <div onClick={addCartItem}>{items[3]}</div>,
              <div onClick={addCartItem}>{items[4]}</div>,
              <div onClick={addCartItem}>{items[5]}</div>,
              <div onClick={addCartItem}>{items[6]}</div>,
              <div onClick={addCartItem}>{items[7]}</div>,
              <div onClick={addCartItem}>{items[8]}</div>,
              <div onClick={addCartItem}>{items[9]}</div>,
              <div onClick={addCartItem}>{items[10]}</div>,
              <div onClick={addCartItem}>{items[11]}</div>,
              <div onClick={addCartItem}>{items[12]}</div>,
              <div onClick={addCartItem}>{items[13]}</div>,
              <div onClick={addCartItem}>{items[14]}</div>
    ];

    let empty = [];
    setShopItems(empty => shopItemsAppend);
  }, [])

  return (
    <BrowserRouter className="page">
      <Nav cartCount={cartItems.length}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cartpage" element={<Cartpage clickFunction={test} cart={cartItems}/>} />
        <Route path="/shoppage" element={<Shoppage items={shopItems}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;