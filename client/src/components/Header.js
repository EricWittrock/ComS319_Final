import React, { useEffect, useState } from 'react';
import { trySessionLogin } from '../tryLogin';

function Header() {

  const [email, setEmail] = useState(window.globalVars.account._email);

  useEffect(() => {
    // bind account name text to global variable
    Object.defineProperty(window.globalVars.account, 'email', {
      set(e) {
        window.globalVars.account._email = e;
        setEmail(e);
      },
      get() {
        return window.globalVars.account.email;
      }
    })

    // try to log in with last session
    trySessionLogin();
  }, []);

  function loginClick() {
    if(email) { // if logged in
      localStorage.setItem("session", "");
      window.location.reload();
      return;
    }

    console.log("login clicked")
    document.getElementById('page').style.filter = "blur(10px)";
    document.querySelector('.loginContainer').style.display = "block";
  }

  function checkoutClick() {

  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">

        <a className="navbar-brand" href="#">Home</a>

        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <button className="nav-item" type="button" onClick={checkoutClick}>
              Checkout 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
            </button>
            <button className="nav-item" type="button" onClick={loginClick}>{email?"Logout":"Login"}</button>
            <li className="nav-item">
              <p className="nav-link" href="#">{email||""}</p>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">Action</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another action</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>

          </ul>

          <ul className="navbar-nav d-flex flex-row me-1">
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#"><i className="fas fa-shopping-cart"></i></a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
            </li>
          </ul>

          <form className="w-auto">
            <input type="search" className="form-control" placeholder="Type query" aria-label="Search"></input>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Header;