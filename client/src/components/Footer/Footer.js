import React from "react";
import Media from "../Footer/LogoSocialMedia";
import Pages from "../Footer/Pages";
import EmailSubmit from "./emailSubmit";

export const Footer = () => {
  return (
    <footer className="page-footer" style={{}}>
      <div className="container">
        <div className="row">
          <Media />
          <Pages />
          <EmailSubmit />
        </div>
      </div>
      <div className="footer-copyright">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          © 2021 Copyright
        </div>
      </div>
    </footer>
  );
};
