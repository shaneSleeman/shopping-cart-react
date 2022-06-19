import '../styles/cartentries.css';

const CartEntries = ({cartItems}) => {

    function getRow(i) {
        return <div className="cartEntry">
            <div className="cartEntryPrice">${i.props.price}</div>
            <div className="cartEntryDesc">{i.props.description}</div>
        </div>
    }

    return (
        <div className="cartEntries">
            {cartItems.map(getRow)}
        </div>
    )
}

export default CartEntries;