import React, { useState } from "react";
import people from "../../../helpers/images/people.png";
import { comments } from "../../../moked/AboutUs";
import Modal from "../../../components/Modal";

const Comments = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="peopleSay">
        <div style={{ width: "450px", marginRight: "20px" }}>
          <h3>What people are saying About Us</h3>
          <img src={people} />
        </div>

        <ul className="comments">
          {comments.map((c) => {
            return (
              <li
                style={{
                  marginRight: "25px",
                  width: "270px",
                }}
              >
                <h4>{c.person}</h4>
                <p>{c.position}</p>
                <p>{c.comment}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className="btn waves-effect waves-light blue commentBtn "
        name="action"
        onClick={() => setActive(true)}
      >
        Leave feedback
        <i className="material-icons blue right large">create</i>
      </button>
      <Modal active={active} setActive={setActive}>
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
      </Modal>
    </div>
  );
};

export default Comments;
