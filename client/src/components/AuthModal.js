import React, { useState, useEffect, useContext } from "react";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

export const AuthModal = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const message = useMessage();

  const [modalIsOpen, setModalisOpen] = useState(false);
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
      setTimeout(function () {
        message("Please push LOG IN button");
      }, 1000);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
      setModalisOpen(false);
      setTimeout(function () {
        message("You are logged in");
        window.location.reload();
      }, 1500);
    } catch (e) {}
  };

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/");
    window.location.reload();
  };

  return (
    <div className="authModal">
      <a
        className="yellow darken-2 btn-small black-text"
        style={{ marginRight: "25px" }}
        onClick={() => setModalisOpen(true)}
      >
        <i className="material-icons left">input</i>SIGN UP
      </a>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalisOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            position: "absolute",
            width: "50%",
            top: "120px",
            left: "450px",
            bottom: "200px",
            border: "1px solid #ccc",
            background: "#fff",
            outline: "none",
            padding: "40px",
          },
        }}
      >
        <div className="row">
          <div className="col s8 offset-s2">
            <h1
              style={{
                textAlign: "center",
                backgroundColor: "#ffa726 ",
                padding: "5px 0",
              }}
            >
              JOIN US
            </h1>
            <div className="card teal  darken-1">
              <div className="card-content white-text">
                <span className="card-title" style={{ textAlign: "center" }}>
                  Authorization
                </span>
                <div>
                  <div className="input-field">
                    <input
                      id="email"
                      type="text"
                      name="email"
                      className="modal-input"
                      onChange={changeHandler}
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="input-field">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="modal-input"
                      onChange={changeHandler}
                    />
                    <label htmlFor="email">Password</label>
                  </div>
                </div>
              </div>
              <div className="card-action" style={{ textAlign: "center" }}>
                <button
                  className="btn deep-orange darken-4 "
                  style={{ marginRight: 30 }}
                  disabled={loading}
                  onClick={loginHandler}
                >
                  Log In
                </button>
                <button
                  className="btn amber accent-4 black-text"
                  onClick={registerHandler}
                  disabled={loading}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <a
        className="blue darken-4 btn-small "
        style={{ marginRight: "25px" }}
        onClick={logoutHandler}
      >
        <i className="material-icons left">power_settings_new</i>LOG OUT
      </a>
    </div>
  );
};
