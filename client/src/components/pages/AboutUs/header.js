import React, { useState } from "react";
import mainpage from "../../../helpers/images/mainpage.jpg";
import Modal from "../../../components/Modal";
import RequestLessonModal from "../../requestModal";

const AboutUsHeader = () => {
  const [active, setActive] = useState(false);
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
          onClick={() => setActive(true)}
        >
          Try for free
          <i className="material-icons right large">navigate_next</i>
        </button>
      </div>
      <div>
        <img className="aboutUsImg" src={mainpage} />
      </div>
      <Modal active={active} setActive={setActive}>
        <RequestLessonModal />
      </Modal>
    </div>
  );
};
export default AboutUsHeader;
