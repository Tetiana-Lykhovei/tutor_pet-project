import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../helpers/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Media = () => {
  return (
    <div className="col l2 s12">
      <div className="nav-wrapper cyan darken-1">
        <NavLink to="/" exact>
          <img
            src={Logo}
            style={{
              display: "inline-block",
              height: "62px",
            }}
          />
          <NavLink
            to="/"
            exact
            style={{
              marginLeft: "25px",
              position: "absolute",
              color: "#fff",
              display: "inline-block",
              fontSize: "2.1rem",
              padding: "0",
            }}
          >
            TUTORS
          </NavLink>
        </NavLink>
      </div>
      <div className="nav-wrapper cyan darken-1">
        <h5>Follow us:</h5>
        <a
          href="https://www.youtube.com"
          className="youtube social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com"
          className="facebook social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com"
          className="twitter social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com"
          className="instagram social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Media;
