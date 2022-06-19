import '../styles/cartpage.css';
import React, {useEffect, useState} from "react";
import CartEntries from './CartEntries';

const Cartpage = ({clickFunction, cart}) => {
    const [cartRows, setCartRows] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalCopy = 0;
        for(let i = 0; i < cart.length; i++) {
            totalCopy += +cart[i].props.price;
        }
        setTotal(totalCopy);
    }, [])

    return (
        <div className="cartPage">
            <h1 className="total">Total: ${total}</h1>
            <CartEntries clickFunction2={clickFunction} cartItems={cart} />
        </div>
    )
}

export default Cartpage;