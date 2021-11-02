import React, { useState, useReducer } from "react";
import mailbox from "../helpers/images/mailbox.png";
import { formSubject } from "../moked/AboutUs";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      Name: "",
      Surname: "",
      Email: "",
      Tel: "",
      Subject: false,
      Message: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const FormToApply = () => {
  const [formToApplyData, setFormToApplyData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormToApplyData({
        reset: true,
      });
      window.location.reload();
    }, 5000);
  };

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormToApplyData({
      name: event.target.name,
      value: isCheckbox ? event.target.name : event.target.value,
    });
  };

  return (
    <div>
      <h3 className="aboutUsh2">Get in Touch</h3>
      <div className="aboutUsForm">
        <div style={{ width: "600px" }}>
          <p className="aboutUsp">
            Fill up the form our team will get back to you within 24 Hours
          </p>
          <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s6" disabled={submitting}>
                  <input
                    name="Name"
                    id="first_name"
                    type="text"
                    onChange={handleChange}
                    value={formToApplyData.Name || ""}
                  />
                  <label for="first_name">Name</label>
                </div>
                <div className="input-field col s7" disabled={submitting}>
                  <input
                    name="Surname"
                    id="surname"
                    type="text"
                    onChange={handleChange}
                    value={formToApplyData.Surname || ""}
                  />
                  <label for="surname">Surname</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12" disabled={submitting}>
                  <input
                    name="Email"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    value={formToApplyData.Email || ""}
                  />
                  <label for="email">Email</label>
                </div>
              </div>
              <h6 className="formSubject">Subject</h6>
              <div className="formCheckboxes">
                {formSubject.map((s) => {
                  return (
                    <p>
                      <label>
                        <input
                          type="checkbox"
                          name={s}
                          onChange={handleChange}
                          disabled={submitting}
                          // checked={formToApplyData[{ s }] || false}
                        />
                        <span>{s}</span>
                      </label>
                    </p>
                  );
                })}
              </div>
              <div className="row">
                <div className="input-field col s12" disabled={submitting}>
                  <textarea
                    name="Message"
                    id="textarea1"
                    className="materialize-textarea"
                    onChange={handleChange}
                    value={formToApplyData.Message || ""}
                  ></textarea>
                  <label for="textarea1">Your message</label>
                </div>
              </div>
              <button
                className="btn waves-effect waves-light "
                type="submit"
                name="action"
                disabled={submitting}
              >
                {submitting ? <span>Sending</span> : <span>Send</span>}

                <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
        {submitting ? (
          <div className="notifySubmit getInTouch">
            <p className="notifySubmitp">YOU ARE SUBMITTING:</p>
            <ul>
              {Object.entries(formToApplyData).map(([name, value]) => (
                <li key={name}>
                  <strong className="notifySubmitStrong">{name}</strong> :
                  {value.toString()}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <img src={mailbox} width="400px" height="400px" />
        )}
      </div>
    </div>
  );
};

export default FormToApply;
