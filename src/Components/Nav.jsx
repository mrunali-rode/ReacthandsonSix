import React from 'react'
import {Link} from 'react-router-dom'
import Routing from './Routing'

const Nav = () => {
  return (
    <div className='bodyBackground'>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/table">Students</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Routing/>
    </div>
    
  )
}

export default Nav