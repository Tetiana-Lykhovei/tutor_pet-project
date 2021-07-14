import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";

const Pages = () => {
  const { token } = useAuth();
  const isAuthenticated = !!token;

  return (
    <div className="col l3 offset-l2 s12">
      <h4 className="white-text" style={{ marginTop: "4px" }}>
        TUTORS
      </h4>
      <ul
        id="nav-mobile"
        className="hide-on-med-and-down"
        style={{ fontSize: "14px", color: "white" }}
      >
        <li>
          <NavLink
            to="/"
            exact
            className="grey-text text-lighten-3"
            style={{ color: "white" }}
            activeStyle={{ fontSize: "16px", color: "white" }}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            exact
            className="grey-text text-lighten-3"
            style={{ color: "white" }}
            activeStyle={{ fontSize: "16px", color: "white" }}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ourteam"
            exact
            className="grey-text text-lighten-3"
            style={{ color: "white" }}
            activeStyle={{ fontSize: "16px", color: "white" }}
          >
            Our Team
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            exact
            className="grey-text text-lighten-3"
            style={{ color: "white" }}
            activeStyle={{ fontSize: "16px", color: "white" }}
          >
            Contacts
          </NavLink>
        </li>
        <li style={{ display: isAuthenticated ? "block" : "none" }}>
          <NavLink
            to="/cabinet"
            exact
            className="grey-text text-lighten-3"
            style={{ color: "white" }}
            activeStyle={{ fontSize: "16px", color: "white" }}
          >
            My cabinet
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Pages;
