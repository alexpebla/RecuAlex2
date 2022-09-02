import React from 'react'
import { NavLink } from "react-router-dom";

const PublicNavegation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="articles">Articles</NavLink>
          <NavLink className="nav-link" to="login">Login</NavLink>
          <NavLink className="nav-link" to="admin">Admin</NavLink>
          
        </div>
      </div>
    </div>
  </nav>
  )
}

export default PublicNavegation