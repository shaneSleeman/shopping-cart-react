import '../styles/cartpage.css';
import React, {useEffect, useState} from "react";

const Cartpage = ({cart}) => {
    const [cartRows, setCartRows] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        
        let totalCopy = 0;
        for(let i = 0; i < cart.length; i++) {
            totalCopy += +cart[i].props.price;
            //console.log(cart[i].props.price);
            //totalCopy += cart[i].props.getAttribute("price");
        }
        setTotal(totalCopy);
    }, [])

    return (
        <div className="cartPage">
            <div className="total">${total}</div>
        </div>
    )
}

export default Cartpage;