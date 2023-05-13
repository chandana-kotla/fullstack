import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <React.Fragment>
     <nav className='navbar navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand'>User Component</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li className='nav-list'><Link to='/users' className='nav-link'>Users</Link></li>
            </ul>
        </div>
     </nav>
    </React.Fragment>
  
}

export default Navbar
