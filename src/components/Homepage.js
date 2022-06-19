import '../styles/homepage.css';
import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="home">
            <div className="welcome">
                <div className="welcomeText">
                    Browse our collection of exclusive, affordable items.
                </div>
                <Link className="links2" to="/shoppage">
                    <div className="shopButton">
                        Browse
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Homepage;