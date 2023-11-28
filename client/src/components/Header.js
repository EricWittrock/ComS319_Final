function Header() {

  function loginClick() {
    console.log("login clicked")
    document.getElementById('page').style.filter="blur(10px)";
    document.querySelector('.loginContainer').style.display="block";
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

                <button className="nav-item" type="button" onClick={loginClick}>Login</button>

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