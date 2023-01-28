import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom" 
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav'>
            <h3>Notary</h3>
            <div className='links'>
                <Link id="link" to="/">Home</Link>
                <Link id="link" to="/add">Add Customer</Link>
                <Link id="link" to="/">Testiminials</Link>
                <Link id="link" to="/">Testiminials</Link>
                <Link id="link" to="/">Contact</Link>




            </div>
        </div>
    </div>
  )
}

export default Navbar