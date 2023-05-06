import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                {/* <!-- Brand --> */}
                <NavLink className="navbar-brand" to="/"><span><i class="fa-solid fa-recycle"></i> Remine India</span></NavLink>

                {/* <!-- Links --> */}
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <NavLink to="/login" className='nav-link'>Login</NavLink>
                        
                    </li>
                    <li class="nav-item">
                    <NavLink to="/register" className='nav-link'>Register</NavLink>

                    </li>
                    

                    {/* <!-- Dropdown --> */}
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            More Guide....
                        </a>
                        <div class="dropdown-menu">
                        <NavLink to="/" className="dropdown-item">Home</NavLink>
                        <NavLink to="/about" className="dropdown-item">About Us</NavLink>
                            <NavLink to="/contact" className="dropdown-item">Contact Us</NavLink>
                           
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header