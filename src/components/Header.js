import React from 'react'
import logo from '../assets/gnar.png';

const Header = () => {
    return (
        <h4 className='display-4 text-center mb-4'>
            <img
                src={logo}
                alt="gnar's logo"
                className="app__gnar_logo"
            />  File Upload
        </h4>
    )
}

export default Header;