import React from "react";
import { facts } from "../../../moked/AboutUs";

const Facts = () => {
  return (
    <div>
      <h2 className="aboutUsh2">Facts about us</h2>
      <ul className="aboutUsUl">
        {facts.map((fact) =>
          fact.image.map((i) => {
            return (
              <li
                style={{
                  marginRight: "20px",
                }}
              >
                <img src={i} width="300px" height="300px" />
                <p
                  style={{
                    width: "300px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Facts;
