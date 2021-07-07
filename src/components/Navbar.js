import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper cyan darken-1" style={{ padding: "0 2rem" }}>
        <span className="brand-logo">TUTORS</span>
        <div
          className="row"
          style={{
            position: "absolute",
            width: "70%",
            marginLeft: "500px",
          }}
        >
          <form className="col s12" style={{ color: "white" }}>
            <div className="input-field col s6">
              <i className="material-icons prefix">search</i>
              <textarea
                id="icon_prefix2"
                className="materialize-textarea"
                style={{ borderBottom: "1px solid white" }}
              ></textarea>
              <label
                htmlFor="icon_prefix2"
                style={{
                  color: "white",
                  transform: "translateY(-2px)",
                }}
              >
                Enter your query
              </label>
            </div>
          </form>
        </div>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
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
          <li>
            <NavLink to="/blog">Contacts</NavLink>
          </li>
          <li>
            <a className="indigo darken-4 btn-small">Sign in</a>
          </li>
          <li>
            <a className="deep-orange darken-4 btn-small">Log in</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
