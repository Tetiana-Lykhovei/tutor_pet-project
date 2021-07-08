import { Height } from "@material-ui/icons";
import React from "react";

export const SearchBar = () => {
  return (
    <nav>
      <div
        className="nav-wrapper"
        style={{
          width: "500px",
          height: "60% ",
          top: "12px",
        }}
      >
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              required
              style={{ borderRadius: "20px", backgroundColor: "white" }}
            />
            <label className="label-icon" htmlFor="search">
              <i
                className="material-icons"
                style={{
                  marginRight: "20px",
                  transform: "translateY(-12px)",
                  color: "#00acc1",
                }}
              >
                search
              </i>
            </label>
            <i
              className="material-icons"
              style={{ transform: "translateY(-12px)" }}
            >
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};
