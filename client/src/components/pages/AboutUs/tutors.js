import React, { useState } from "react";
import { tutors } from "../../../moked/Team";
import Modal from "../../../components/Modal";

const Tutors = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <h3 className="aboutUsh2">OUR TUTORS</h3>
      <ul className="servicesUl">
        {tutors.map((t) => {
          return (
            <li
              className="servicesLessons "
              style={{ justifyContent: "center" }}
            >
              <img src={t.image} width="230px" height="270px" />
              <div style={{ width: "400px" }}>
                <h4>{t.name}</h4>

                {t.skills.map((i) => {
                  return (
                    <div>
                      <a class="teal lighten-4  btn-small tutorBtns">
                        <i class="material-icons right">{i.icon}</i>
                        {i.title}
                      </a>
                    </div>
                  );
                })}

                <p className="teamP">{t.text}</p>
                <button className="teamCallBtn" onClick={() => setActive(true)}>
                  ORDER CALL
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <Modal active={active} setActive={setActive}>
        <h5 className="feedbackModalh5">Call the tutor</h5>
        <div>
          <div class="input-field col s12">
            <input id="first_name" type="text" />
            <label for="first_name">Your Name</label>
          </div>

          <div class="input-field col s12">
            <input id="email" type="email" />
            <label for="email">Email</label>
          </div>
          <div class="input-field col s12">
            <input id="telef" type="text" />
            <label for="telef">+38</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light blue  right"
          type="submit"
          name="action"
        >
          Order call
          <i className="material-icons right">send</i>
        </button>
      </Modal>
    </div>
  );
};

export default Tutors;
