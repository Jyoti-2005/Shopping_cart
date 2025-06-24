import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='link'>
            <Link to={'/'}>Shop</Link>
            <Link to={'/cart'}><CiShoppingCart/></Link>
        </div>
    </div>
  )
}

export default Navbar
