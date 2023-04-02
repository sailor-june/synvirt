import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header goldenrod is-flex is-justify-content-space-between'>
        <Link to="about">
            about
        </Link>

 <Link to="home">
            home
        </Link>
        <Link to="shop">
            shop
        </Link>
        <Link to="contact">
            contact
        </Link>
        


    </div>
  )
}

export default Header