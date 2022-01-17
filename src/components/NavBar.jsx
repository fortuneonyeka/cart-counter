import React from 'react'

const NavBar = (props) => {
  return (
    <div>
   <nav className="navbar navbar-light bg-light">
<h1 className="navbar-brand">Navbar{" "} <span className="badge badge-pill bg-secondary">{props.totalCounters}</span></h1>
</nav>
  </div>
  );
}
// class NavBar extends React.Component {
//   render() { 
     
//   }
// }
 
export default NavBar;