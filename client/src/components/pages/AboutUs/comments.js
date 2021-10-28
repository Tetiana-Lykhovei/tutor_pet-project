import React from "react";
import people from "../../../helpers/images/people.png";
import { comments } from "../../../moked/AboutUs";

const Comments = () => {
  return (
    <div className="peopleSay">
      <div style={{ width: "450px", marginRight: "20px" }}>
        <h3>What people are saying About Us</h3>
        <img src={people} />
      </div>

      <ul className="comments">
        {comments.map((c) => {
          return (
            <li
              style={{
                marginRight: "25px",
                width: "270px",
              }}
            >
              <h4>{c.person}</h4>
              <p>{c.position}</p>
              <p>{c.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
