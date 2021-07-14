import React from "react";
import { NavLink } from "react-router-dom";
import { AuthModal } from "../components/AuthModal";
import { useAuth } from "../hooks/auth.hook";
import { SearchBar } from "./SearchBar";
import Logo from "../helpers/images/logo.png";

export const Navbar = () => {
  const { token } = useAuth();
  const isAuthenticated = !!token;

  return (
    <nav>
      <div className="nav-wrapper cyan darken-1" style={{ padding: "0 2rem" }}>
        <NavLink to="/">
          <img
            src={Logo}
            style={{
              display: "inline-block",
              height: "62px",
              paddingLeft: "20px",
            }}
          />
          <NavLink to="/" className="brand-logo" style={{ marginLeft: "25px" }}>
            TUTORS
          </NavLink>
        </NavLink>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <SearchBar />
          </li>
          <li>
            <NavLink to="/">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/ourteam">Our Team</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li style={{ display: isAuthenticated ? "block" : "none" }}>
            <NavLink to="/cabinet">My cabinet</NavLink>
          </li>
          <li>
            <AuthModal />
          </li>
        </ul>
      </div>
    </nav>
  );
};
