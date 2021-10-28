import React from "react";
import { experience } from "../moked/AboutUs";

const Experience = () => {
  return (
    <div className="experience">
      <div
        style={{
          width: "470px",
          marginRight: "10px",
        }}
      >
        <h3>10 years of positive experience</h3>
        <p>With our super powers we have reached:</p>
      </div>

      <ul
        style={{
          display: "flex",
        }}
      >
        {experience.map((e) => {
          return (
            <li
              style={{
                marginRight: "35px",
              }}
            >
              <h3>{e.heading}</h3>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                {e.text}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Experience;
