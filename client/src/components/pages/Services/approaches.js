import React from "react";
import { approaches } from "../../../moked/Services";

const Approaches = () => {
  return (
    <div>
      <h3 className="aboutUsh2">APROACHES WE APPLY</h3>
      <ul className="servicesUl">
        {approaches.map((a) => {
          return (
            <li className="servicesLessons approach">
              <img src={a.image} width="350px" height="250px" />
              <div className="servicesApproaches">
                <h5>{a.title} </h5>
                <p style={{ marginBottom: "20px" }}>{a.text}</p>
                <button class="waves-effect  orange darken-2 btn">
                  <i class="material-icons  orange darken-2 right">
                    arrow_forward
                  </i>
                  Learn more
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Approaches;
