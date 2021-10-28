import React from "react";
import { interestedIn } from "../../../moked/Team";

const InterestedIn = () => {
  return (
    <div>
      <h3 className="aboutUsh2 ">Why you should be interested...</h3>
      <p>Just because:</p>
      <ul className="interested">
        {interestedIn.map((i) => {
          return (
            <li style={{ display: "flex" }}>
              <i class="material-icons ">lightbulb_outline</i>
              <p style={{ marginLeft: "10px" }}>{i}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InterestedIn;
