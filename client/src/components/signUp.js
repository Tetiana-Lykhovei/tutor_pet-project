import React from "react";
import signUp from "../helpers/images/signUp.png";

const SignUp = () => {
  return (
    <div className="signUp">
      <img src={signUp} />
      <div>
        <h3 className="signUph3">Sign up for free lesson</h3>
        <div className="row">
          <div className="input-field col s6">
            <input id="tel" type="text" className="validate" />
            <label className="signUplabel" for="tel">
              +38
            </label>
          </div>
          <div className="input-field col s6">
            <input id="mail" type="email" className="validate" />
            <label className="signUplabel" for="mail">
              Email
            </label>
          </div>
          <div className="input-field col s6">
            <input id="name" type="text" className="validate" />
            <label className="signUplabel" for="name">
              Name
            </label>
          </div>
          <div className="input-field col s6">
            <button
              className="btn waves-effect waves-light  orange lighten-1"
              type="submit"
              name="action"
            >
              <i className="material-icons ">send</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
