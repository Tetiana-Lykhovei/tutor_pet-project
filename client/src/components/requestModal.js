import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faViber, faTelegram } from "@fortawesome/free-brands-svg-icons";

const RequestLessonModal = () => {
  return (
    <>
      <h5 className="feedbackModalh5">Send request</h5>

      <div>
        <div class="input-field col s12">
          <input id="first_name" type="text" />
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s12">
          <input id="last_name" type="text" />
          <label for="last_name">Last Name</label>
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
        className="btn waves-effect waves-light  right"
        type="submit"
        name="action"
      >
        Send request
        <i className="material-icons right">send</i>
      </button>
      <div>
        <h6 className="tryFreeh6">Other chanels</h6>
        <a
          href="https://www.viber.com/en/"
          className="viber social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faViber} size="3x" />
        </a>
        <a
          href="https://www.facebook.com"
          className="telegram social"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTelegram} size="3x" />
        </a>
      </div>
    </>
  );
};
export default RequestLessonModal;
