import React, { useState } from "react";
import { approaches } from "../../../moked/Services";
import Modal from "../../../components/Modal";
import RequestLessonModal from "../../requestModal";

const Approaches = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <h3 className="aboutUsh2">APROACHES WE APPLY</h3>
      <ul className="servicesUl">
        {approaches.map((a) => {
          return (
            <li className="servicesLessons approach">
              <img src={a.image} width="350px" height="250px" alt="pic" />
              <div className="servicesApproaches">
                <h5>{a.title} </h5>
                <p style={{ marginBottom: "20px" }}>{a.text}</p>
                <button
                  class="waves-effect  orange darken-2 btn"
                  onClick={() => setActive(true)}
                >
                  <i class="material-icons  orange darken-2 right">
                    arrow_forward
                  </i>
                  Learn more
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <Modal active={active} setActive={setActive}>
        <RequestLessonModal />
      </Modal>
    </div>
  );
};
export default Approaches;
