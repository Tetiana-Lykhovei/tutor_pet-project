import React from "react";
import { programs } from "../../../moked/Team";

const Programs = () => {
  return (
    <div>
      <h3 className="aboutUsh2">EDUCATIONAL PROGRAMS</h3>
      <ul className="servicesUl">
        {programs.map((p) => {
          return (
            <li className="programs">
              <img src={p.image} width="350px" height="270px" />
              <h5 className="programsH4">{p.title}</h5>
              <p className="programsp">{p.text}</p>
              <button class="waves-effect  teal darken-2 btn programBtn">
                <i class="material-icons  teal darken-2 right">navigate_next</i>
                Learn more
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Programs;
