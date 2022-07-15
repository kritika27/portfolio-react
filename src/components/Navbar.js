import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    
    
    <div id="navbar" className="navbar top">
      <h1 className="logo">
        KS
      </h1>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/skills">SKILLS</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
        </ul>
      </nav>
    </div>
    
  )
}

export default Navbar