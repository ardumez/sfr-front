import { useState } from 'react';
import './Header.css';
import {
  Link
} from "react-router-dom";

function Header({ title, headerType }) {
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
            <a className="navbar-brand s-title" href="#">SFR {title}</a>
            <div className={"collapse navbar-collapse " + show} id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                {headerType == "crm" &&
                  <>
                    <li className="nav-item active">
                      <a className="nav-link s-item-menu" href="#">Phone</a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link s-item-menu" href="#">Electricity</a>
                    </li>
                  </>
                }
                {headerType == "landing" &&
                  <>
                    <li className="nav-item active">
                      <Link className="nav-link s-item-menu" to="/landing/telephone">Forfait mobile</Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link s-item-menu" to="/landing/electricite">Électricité</Link>
                    </li>
                  </>
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;