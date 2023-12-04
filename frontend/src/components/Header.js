import React, { useEffect, useState } from 'react';
import { trySessionLogin } from '../tryLogin';

function Header({stateCallback, emailCallback}) {

  const [email, setEmail] = useState(window.globalVars.account._email);

  useEffect(() => {
    // bind account name text to global variable
    Object.defineProperty(window.globalVars.account, 'email', {
      set(e) {
        window.globalVars.account._email = e;
        setEmail(e);
        emailCallback(e);
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

  function shopClick() {
    stateCallback(0);
  }

  function checkoutClick() {
    stateCallback(1);
  }

  function aboutClick() {
    stateCallback(2);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">

        <a className="navbar-brand" type="button" onClick={shopClick}>Shop</a>
        <a className="navbar-brand" type="button" onClick={checkoutClick}>Checkout</a>
        <a className="navbar-brand" type="button" onClick={aboutClick}>About</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>

        <div>
          <span className="navbar-text" style={{paddingRight:"10px"}}>{email||""}</span>
          <a className="navbar-brand" type="button" onClick={loginClick}>{email?"Logout":"Login"}</a>
        </div>

      </div>
    </nav>
  );
}

export default Header;