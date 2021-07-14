import React, { useEffect, useState } from "react";
import { useMessage } from "../../hooks/message.hook";
import { useHttp } from "../../hooks/http.hook";

const EmailSubmit = () => {
  const message = useMessage();
  const { error, request, clearError } = useHttp();
  const [email, setEmail] = useState("");

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setEmail({ [event.target.name]: event.target.value });
  };

  const SubscribeHandler = async () => {
    try {
      const data = await request("/api/subscribe/mail", "POST", email);
      message(data.message);
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    } catch (e) {}
  };

  return (
    <div className="col l2 s12" style={{ width: "auto" }}>
      <h5>Subscribe</h5>
      <div className="input-field col s12" style={{ display: "flex" }}>
        <input
          id="email"
          type="email"
          name="email"
          className="validate"
          onChange={changeHandler}
          style={{
            borderBottomColor: "white",
            width: "300px",
            marginRight: "20px",
            color: "white",
          }}
        />
        <label
          htmlFor="email"
          style={{
            color: "#fff",
          }}
        >
          Email
        </label>
        <button
          type="submit"
          className="waves-effect yellow darken-2 black-text btn"
          onClick={SubscribeHandler}
        >
          <i className="material-icons right">send</i>Subscribe
        </button>
      </div>
    </div>
  );
};

export default EmailSubmit;
