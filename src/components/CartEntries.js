import '../styles/cartentries.css';

const CartEntries = ({clickFunction2, cartItems}) => {

    function getRow(i, index) {
        return <div onClick={clickFunction2} id={"r"+index} className="cartEntry">
            <div className="cartEntryPrice">${i.props.price}</div>
            <div className="cartEntryDesc">{i.props.description}</div>
        </div>
    }

    return (
        <div className="cartEntries">
            {cartItems.map(getRow)}
            <div className="cartEntry buy">Checkout</div>
        </div>
    )
}

export default CartEntries;