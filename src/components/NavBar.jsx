import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  render() { 
    return <div>
      <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand">Navbar</a>
</nav>
    </div>;
  }
}
 
export default NavBar;