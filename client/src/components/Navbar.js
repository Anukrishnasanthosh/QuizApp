import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


const Navbar = (props) => {
  let navigator = useNavigate();
  let location = useLocation();
  const handleLogout=()=> {
    localStorage.removeItem('token'); 
    navigator('/login')
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Quiz App
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           {  !props.fromlogin && <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">
                home
              </Link>
            </li>}
            {((props.admin&&!props.admin) || (props.fromlogin&&!props.fromlogin)) && <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/playquiz"? "active":""}`} aria-current="page" to="/playquiz">
                PLAY QUIZ
              </Link>
            </li>}
          </ul>
          {!localStorage.getItem('token')?
          <form className="d-flex" role="search">
            <Link className="btn btn-dark mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-dark mx-1" to="/signup" role="button">Signup</Link>
          </form>: <button onClick={handleLogout} className="btn btn-dark">Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;