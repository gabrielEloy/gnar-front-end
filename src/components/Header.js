import React from 'react'
import logo from '../assets/gnar.png';
import {
    Link
} from "react-router-dom";

const Header = () => (
    <h4 className='display-4 text-center mb-4'>
        <Link to="/">
            <img
                src={logo}
                alt="gnar's logo"
                className="app__gnar_logo"
            />
        </Link>
            File Upload
    </h4>
)

export default Header;