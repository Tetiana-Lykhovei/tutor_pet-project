import React, { useState, useReducer } from "react";
import people from "../../../helpers/images/people.png";
import { comments } from "../../../moked/AboutUs";
import Modal from "../../../components/Modal";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      Name: "",
      Surname: "",
      Email: "",
      Feedback: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

const Comments = () => {
  const [feedbackFormData, setFeedbackFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [active, setActive] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFeedbackFormData({
        reset: true,
      });
      window.location.reload();
    }, 7000);
  };

  const handleChange = (event) => {
    setFeedbackFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div>
      <div className="peopleSay">
        <div style={{ width: "400px", marginRight: "20px" }}>
          <h3 style={{ textTransform: "uppercase" }}>
            What people are saying About Us
          </h3>
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
        {submitting ? (
          <div className="notifySubmit feedback">
            <h5 className="feedbackModalh5">YOU ARE SUBMITTING:</h5>
            <ul>
              {Object.entries(feedbackFormData).map(([name, value]) => (
                <li key={name}>
                  <strong className="notifySubmitStrong">{name}</strong>:{" "}
                  {value.toString()}
                </li>
              ))}
            </ul>
            <h6 className="notifySubmitp thank">Thank you for your feedback</h6>
          </div>
        ) : (
          <>
            <h5 className="feedbackModalh5">Please, leave your feedback</h5>
            <form onSubmit={handleSubmit}>
              <div>
                <div class="input-field col s12" disabled={submitting}>
                  <input
                    name="Name"
                    id="first_name"
                    type="text"
                    onChange={handleChange}
                    value={feedbackFormData.Name || ""}
                  />
                  <label for="first_name">Name</label>
                </div>
                <div className="input-field col s7" disabled={submitting}>
                  <input
                    name="Surname"
                    id="surname"
                    type="text"
                    onChange={handleChange}
                    value={feedbackFormData.Surname || ""}
                  />
                  <label for="surname">Surname</label>
                </div>
                <div class="input-field col s12" disabled={submitting}>
                  <input
                    name="Email"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    value={feedbackFormData.Email || ""}
                  />
                  <label for="email">Email</label>
                </div>
                <div className="input-field col s12" disabled={submitting}>
                  <textarea
                    name="Message"
                    id="textarea1"
                    className="materialize-textarea"
                    onChange={handleChange}
                    value={feedbackFormData.Message || ""}
                  ></textarea>
                  <label for="textarea1">Feedback</label>
                </div>
              </div>
              <button
                className="btn waves-effect waves-light blue right"
                type="submit"
                name="action"
                disabled={submitting}
              >
                Send
                <i className="material-icons right">send</i>
              </button>
            </form>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Comments;
