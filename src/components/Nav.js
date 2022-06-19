import {Link} from 'react-router-dom';
import '../styles/nav.css';
import cartIcon from '../assets/cart.svg';

const Nav = ({cartCount}) => {
    return (
        <div className="nav">
            <div className="navTitle">Shopping Cart</div>
            <div className="navLinks">
                <div className="navLinks1">
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/shoppage">Shop</Link>
                </div>
                <div className="navLinks2">
                    <Link className="links" to="/cartpage">Cart</Link>
                    <img className="cartIcon" src={cartIcon} />
                    <div className="cartItems">{cartCount}</div>
                </div>
            </div>
            
        </div>
    )
}

export default Nav;