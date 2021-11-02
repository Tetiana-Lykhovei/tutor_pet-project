import React, { useState, useReducer } from "react";
import signUp from "../helpers/images/signUp.png";

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

const SignUp = () => {
  const [signUpFormData, setSignUpFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSignUpFormData({
        reset: true,
      });
    }, 2000);
  };

  const handleChange = (event) => {
    setSignUpFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="signUp">
      <img src={signUp} />
      <div>
        <h3 className="signUph3">Sign up for free lesson</h3>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="input-field col s6" disabled={submitting}>
              <input
                style={{ paddingLeft: "15px" }}
                name="Tel"
                id="tel"
                type="text"
                className="validate"
                onChange={handleChange}
                value={signUpFormData.Tel || ""}
              />
              <label className="signUplabel" for="tel">
                +38
              </label>
            </div>
            <div className="input-field col s6" disabled={submitting}>
              <input
                style={{ paddingLeft: "15px" }}
                name="Email"
                id="mail"
                type="email"
                className="validate"
                onChange={handleChange}
                value={signUpFormData.Email || ""}
              />
              <label className="signUplabel" for="mail">
                Email
              </label>
            </div>
            <div className="input-field col s6" disabled={submitting}>
              <input
                style={{ paddingLeft: "15px" }}
                name="Name"
                id="name"
                type="text"
                className="validate"
                onChange={handleChange}
                value={signUpFormData.Name || ""}
              />
              <label className="signUplabel" for="name">
                Name
              </label>
            </div>
            <div className="input-field col s6">
              <button
                disabled={submitting}
                className="btn waves-effect waves-light  orange lighten-1"
                type="submit"
                name="action"
              >
                <i className="material-icons ">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
