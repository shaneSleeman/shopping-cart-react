import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/shoppage">Shop</Link>
            <Link to="/cartpage">Cart</Link>
        </div>
    )
}

export default Nav;