import React, { useState, useReducer } from "react";
import { tutors } from "../../../moked/Team";
import Modal from "../../../components/Modal";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      Name: "",
      Email: "",
      Tel: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Tutors = () => {
  const [CallformData, setCallFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [active, setActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setCallFormData({
        reset: true,
      });
    }, 4000);
  };

  const handleChange = (event) => {
    setCallFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

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
              <img src={t.image} width="230px" height="270px" alt="pic" />
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
        {submitting && (
          <div className="notifySubmit">
            You are submitting:
            <ul>
              {Object.entries(CallformData).map(([name, value]) => (
                <li key={name}>
                  <strong>{name}</strong>: {value.toString()}
                </li>
              ))}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div class="input-field col s12" disabled={submitting}>
            <input
              name="Name"
              id="first_name"
              type="text"
              onChange={handleChange}
              value={CallformData.Name || ""}
            />
            <label for="first_name"> Name</label>
          </div>
          <div class="input-field col s12" disabled={submitting}>
            <input
              name="Email"
              id="email"
              type="email"
              onChange={handleChange}
              value={CallformData.Email || ""}
            />
            <label for="email">Email</label>
          </div>
          <div class="input-field col s12" disabled={submitting}>
            <input
              name="Tel"
              id="telef"
              type="text"
              onChange={handleChange}
              value={CallformData.Tel || ""}
            />
            <label for="telef">+38</label>
          </div>
          <button
            className="btn waves-effect waves-light blue  right"
            type="submit"
            name="action"
            disabled={submitting}
          >
            Order call
            <i className="material-icons right">send</i>
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Tutors;
