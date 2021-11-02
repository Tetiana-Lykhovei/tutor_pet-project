import React, { useState } from "react";
import { lessons } from "../../../moked/Services";
import Modal from "../../../components/Modal";
import RequestLessonModal from "../../requestModal";

const Lessons = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <h3 className="aboutUsh2">LESSONS WE CONDUCT</h3>
      <ul className="servicesUl">
        {lessons.map((l) => {
          return (
            <li className="servicesLessons">
              <img src={l.image} width="230px" height="230px" alt="pic" />
              <div style={{ width: "400px", textAlign: "center" }}>
                <h4>{l.title} </h4>
                <p style={{ marginBottom: "30px" }}>{l.text}</p>
                <button
                  class="waves-effect waves-light btn"
                  onClick={() => setActive(true)}
                >
                  <i class="material-icons right">arrow_forward</i>Have a lesson
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

export default Lessons;
