import React from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import logo from '../src/images/logo.png';

const Navbar=()=> {
  return (
    <>
     <div className="container-fluid">
         <div className="row">
           <div className="col-10 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img  className="logo" src={logo}/> TechnoSpark</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact className="nav-link active" aria-current="page" activeClassName="menu_active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="menu_active" to="/Services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="menu_active" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="menu_active" to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
          
          </div>
         </div>
     </div>
      
    </>
  );
}

export default Navbar;
