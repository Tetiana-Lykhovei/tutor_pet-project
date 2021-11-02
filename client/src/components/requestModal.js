import React, { useState, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViber, faTelegram } from "@fortawesome/free-brands-svg-icons";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      Name: "",
      Surname: "",
      Email: "",
      Tel: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const RequestLessonModal = () => {
  const [requestFormData, setrequestFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setrequestFormData({
        reset: true,
      });
    }, 4000);
  };

  const handleChange = (event) => {
    setrequestFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <>
      <h5 className="feedbackModalh5">Send request</h5>
      {submitting && (
        <div className="notifySubmit">
          You are submitting:
          <ul>
            {Object.entries(requestFormData).map(([name, value]) => (
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
            value={requestFormData.Name || ""}
          />
          <label for="first_name"> Name</label>
        </div>
        <div class="input-field col s12" disabled={submitting}>
          <input
            name="Surname"
            id="surname"
            type="text"
            onChange={handleChange}
            value={requestFormData.Surname || ""}
          />
          <label for="surname">Surname</label>
        </div>
        <div class="input-field col s12" disabled={submitting}>
          <input
            name="Email"
            id="email"
            type="email"
            onChange={handleChange}
            value={requestFormData.Email || ""}
          />
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12" disabled={submitting}>
          <input
            name="Tel"
            id="telef"
            type="text"
            onChange={handleChange}
            value={requestFormData.Tel || ""}
          />
          <label for="telef">+38</label>
        </div>
        <button
          className="btn waves-effect waves-light  right"
          type="submit"
          name="action"
          disabled={submitting}
        >
          Send request
          <i className="material-icons right">send</i>
        </button>
      </form>
      <div>
        <h6 className="tryFreeh6">Other chanels</h6>
        <a
          href="https://www.viber.com/en/"
          className="viber social"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faViber} size="3x" />
        </a>
        <a
          href="https://t.me/junior_developer_ua"
          className="telegram social"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTelegram} size="3x" />
        </a>
      </div>
    </>
  );
};
export default RequestLessonModal;
