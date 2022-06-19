import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Homepage from "./components/Homepage";
import Cartpage from "./components/Cartpage";
import Shoppage from "./components/Shoppage";
import Nav from "./components/Nav";

const RouteSwitch = () => {
  return (
    <BrowserRouter className="page">
      <Nav cartCount="0"/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/shoppage" element={<Shoppage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;