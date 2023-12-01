import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import useAppContext from '../AppContext'

const Navbar = () => {

  const {loggedIn, setLoggedIn} = useAppContext();

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem('user');
    setCurrentUser(null);
    navigate('/login');
    setLoggedIn(false);
  }

  const displayLoginOptions = () => {
    if(loggedIn){
      return <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/upload">
            Upload Novel
          </NavLink>
        </li>
        <li className='nav-item'>
          <button className='my-btn' onClick={logout}>Logout</button>
        </li>
      </>
    }else{
      return <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </>
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-navbar" style={{backgroundColor: '#0d1b2a'}}> 
    <div className="container-fluid">
    <a className="navbar-brand" href="#">
      NovelNebula
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/books">
            Books
          </NavLink>
        </li>

        {displayLoginOptions()}
      </ul>
      
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="my-btn" type="submit">
          Search
        </button>
      </form>
    </div>
    </div>
    </nav>

  )
}

export default Navbar