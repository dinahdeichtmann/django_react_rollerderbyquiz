import React, { useState } from "react";
import "./NavbarStyle.css";

function Navbar() {
  const [clicked, setClick] = useState(false);

  return (
    <nav className="navItems">
      <h1 className="navLogo">Derby Rules</h1>

      <div className="menuIcons">
        <i
          className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}
          onClick={() => setClick(!clicked)}
        ></i>
      </div>

      <ul className={clicked ? "navMenu active" : "navMenu"}>
        <li>
          <a className="navLinks" href="/">
            <i className="fa-solid fa-house-user"></i>
            Accueil
          </a>
        </li>
        <li>
          <a
            className="navLinks"
            href="https://rules.wftda.com/fr/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-book"></i>
            Règles
          </a>
        </li>
        <li>
          <a className="navLinks" href="">
            <i className="fa-solid fa-person-skating"></i> Compte
          </a>
        </li>
        <li>
          <a className="navLinks" href="info">
            <i className="fa-solid fa-circle-info"></i>
            Info
          </a>
        </li>
        <li>
          <a className="navLinksMobile" href="">
            S'enregister
          </a>
        </li>
        <button>S'enregister</button>
      </ul>
    </nav>
  );
}

export default Navbar;
