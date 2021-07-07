import React from "react";
import { NavLink } from "react-router-dom";
import { AuthModal } from "../components/AuthModal";
import { useAuth } from "../hooks/auth.hook";
// import { NavBtn } from "./NavBtn";

export const Navbar = () => {
  const { token } = useAuth();
  const isAuthenticated = !!token;
  return (
    <nav>
      <div className="nav-wrapper cyan darken-1" style={{ padding: "0 2rem" }}>
        <NavLink to="/" className="brand-logo" style={{ marginLeft: "25px" }}>
          TUTORS
        </NavLink>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">
              <i className="material-icons">search</i>
            </NavLink>
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
