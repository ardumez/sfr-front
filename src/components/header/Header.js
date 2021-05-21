import { useState } from 'react';
import './Header.css';

function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const toggleMenu = e => {
    setIsToggle(!isToggle);
    console.log("coucou");
  }

  const show = isToggle ? "show" : "";

  return (
    <header className="s-header" id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="s-container-header container-fluid">
            <button onClick={toggleMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand s-title" href="#">Souscription Facile</a>
            <div className={"collapse navbar-collapse " + show} id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link s-item-menu" href="#">Phone</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link s-item-menu" href="#">Electricity</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;