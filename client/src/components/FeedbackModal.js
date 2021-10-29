import React from "react";

const FeedbackModal = ({ active, setActive }) => {
  return (
    <div
      className={active ? "modale active" : "modale"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        <h5 className="feedbackModalh5">Please, leave your feedback</h5>

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
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Feedback</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light blue right"
          type="submit"
          name="action"
        >
          Send
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
