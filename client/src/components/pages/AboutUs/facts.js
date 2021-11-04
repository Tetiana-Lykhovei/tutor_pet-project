import React from "react";
import { facts } from "../../../moked/AboutUs";

const Facts = () => {
  return (
    <div>
      <h3 className="aboutUsh2">Facts about us</h3>
      <ul className="aboutUsUl">
        {facts.map((fact) =>
          fact.image.map((i) => {
            return (
              <li className="aboutUsFactsLi">
                <img src={i} width="200px" height="200px" />
                <p
                  style={{
                    width: "200px",
                    padding: "10px",
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
