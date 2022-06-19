import {Link} from 'react-router-dom';
import '../styles/nav.css';
import cartIcon from '../cart.svg';

const Nav = ({cartCount}) => {
    return (
        <div className="nav">
            <Link className="links" to="/"><div className="navTitle">Shopping Cart</div></Link>
            <div className="navLinks">
                <div className="navLinks1">
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/shoppage">Shop</Link>
                </div>
                <div className="navLinks2">
                    <Link className="links" to="/cartpage">Cart</Link>
                    <Link className="links" to="/cartpage"><img className="cartIcon" src={cartIcon} /></Link>
                    <Link className="links" to="/cartpage"><div className="cartItems">{cartCount}</div></Link>
                </div>
            </div>
            
        </div>
    )
}

export default Nav;