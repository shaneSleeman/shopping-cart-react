import '../styles/shopitem.css';

const ShopItem = ({image, description, price}) => {
    return (
        <div className="shopItem">
            <img className="itemImage" src={image} />
            <div className="description">{description}</div>
            <div className="price">${price}</div>
            <div className="add">Add to Cart</div>
        </div>
    )
}

export default ShopItem;