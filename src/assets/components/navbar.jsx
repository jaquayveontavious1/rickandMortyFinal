import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container flex   '>
        <div className='navbar-logo text-3xl'>
            <Link to='/'>
             <h2>Rick and Morty <span className='text-green-800'>Wiki</span> </h2>
            </Link>
        </div>
        <div className='flex ml-96 gap-2.5 justify-end items-start absolute top-0 right-0 mr-1.5 text-xl'>

            
            <NavLink to='/' activeClassName='active'>
                <h4>Characters</h4>
            </NavLink>
            
            <NavLink to='/location'>
                <h4>Location</h4>
            </NavLink>

            <NavLink to='episodes'>
                <h4>Episodes</h4>
            </NavLink>
          
            
        </div>
     
    </div>
  )
}

export default Navbar;