import '../styles/shopitem.css';

const ShopItem = ({image, description, price, sid}) => {
    return (
        <div className="shopItem">
            <img className="itemImage" src={image} />
            <div className="description">{description}</div>
            <div className="price">${price}</div>
            <div className="add" id={sid}>Add to Cart</div>
        </div>
    )
}

export default ShopItem;