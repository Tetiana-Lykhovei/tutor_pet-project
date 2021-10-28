import React from "react";
import { methodology } from "../../../moked/AboutUs";

const Methodology = () => {
  return (
    <div>
      <h2 className="aboutUsh2">Our methodology</h2>
      <ul className="aboutUsUl">
        {methodology.map((m) => {
          return (
            <li className="methodologyLi">
              <img src={m.image} />
              <p>{m.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Methodology;
