import React from "react";
import Logo from "../../img/logo.png";
import { NavLink } from "react-router-dom";
import NavBarSearch from "./NavBarSearch";
import ModalSearch from "./ModalSearch";

function NavBar() {
  return (
    <header className="header">
      <div className="header_content">
        <div className="nav">
          <img src={Logo} alt="Logo" />
          <nav>
            <NavLink to="anime" className="nav_bar_link">
              Anime
            </NavLink>
          </nav>
        </div>
        <NavBarSearch />
        <ModalSearch />
      </div>
    </header>
  );
}

export default NavBar;
