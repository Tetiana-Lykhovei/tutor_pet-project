import React from "react";
import mailbox from "../helpers/images/mailbox.png";
import { formSubject } from "../moked/AboutUs";

const FormToApply = () => {
  return (
    <div>
      <h3 className="aboutUsh2">Get in Touch</h3>
      <div className="aboutUsForm">
        <div style={{ width: "600px" }}>
          <p className="aboutUsp">
            Fill up the form our team will get back to you within 24 Hours
          </p>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="validate" />
                  <label for="first_name">First Name</label>
                </div>
                <div className="input-field col s7">
                  <input id="last_name" type="text" className="validate" />
                  <label for="last_name">Last Name</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <h6 className="formSubject">Subject</h6>
              <div className="formCheckboxes">
                {formSubject.map((s) => {
                  return (
                    <p>
                      <label>
                        <input type="checkbox" />
                        <span>{s}</span>
                      </label>
                    </p>
                  );
                })}
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label for="textarea1">Your message</label>
                </div>
              </div>
            </form>
            <button
              className="btn waves-effect waves-light "
              type="submit"
              name="action"
            >
              Send
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
        <div>
          <img src={mailbox} width="400px" height="400px" />
        </div>
      </div>
    </div>
  );
};

export default FormToApply;
