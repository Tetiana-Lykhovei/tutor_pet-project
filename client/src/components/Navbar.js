import React from "react";
import { NavLink } from "react-router-dom";
import { AuthModal } from "../components/AuthModal";
import { useAuth } from "../hooks/auth.hook";
import { SearchBar } from "./SearchBar";
import Logo from "../helpers/images/logo.png";

export const Navbar = () => {
  const { userId } = useAuth();

  return (
    <nav>
      <div className="nav-wrapper cyan darken-1" style={{ padding: "0 2rem" }}>
        <NavLink to="/" exact>
          <img
            src={Logo}
            style={{
              display: "inline-block",
              height: "62px",
              paddingLeft: "20px",
            }}
          />
          <NavLink
            to="/"
            exact
            className="brand-logo"
            style={{ marginLeft: "25px" }}
          >
            TUTORS
          </NavLink>
        </NavLink>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <SearchBar />
          </li>
          <li>
            <NavLink to="/" exact activeStyle={{ backgroundColor: "#00838f " }}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              exact
              activeStyle={{ backgroundColor: "#00838f " }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/programs"
              exact
              activeStyle={{ backgroundColor: "#00838f " }}
            >
              Programs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              exact
              activeStyle={{ backgroundColor: "#00838f " }}
            >
              Contacts
            </NavLink>
          </li>
          {userId && (
            <li
            // style={{ display: userId ? "block" : "none" }}
            >
              <NavLink
                to="/cabinet"
                exact
                activeStyle={{ backgroundColor: "#00838f " }}
              >
                My cabinet
              </NavLink>
            </li>
          )}
          <li>
            <AuthModal />
          </li>
        </ul>
      </div>
    </nav>
  );
};
