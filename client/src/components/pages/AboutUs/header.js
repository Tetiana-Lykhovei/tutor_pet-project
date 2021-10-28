import React from "react";
import mainpage from "../../../helpers/images/mainpage.jpg";

const AboutUsHeader = () => {
  return (
    <div className="main">
      <div>
        <h1 className="aboutUsh1">Tutors that inspire</h1>
        <p className="aboutUsp">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button
          className="btn waves-effect waves-light "
          style={{ marginTop: "20px" }}
          name="action"
        >
          Try for free
          <i className="material-icons right large">navigate_next</i>
        </button>
      </div>
      <div>
        <img className="aboutUsImg" src={mainpage} />
      </div>
    </div>
  );
};
export default AboutUsHeader;
