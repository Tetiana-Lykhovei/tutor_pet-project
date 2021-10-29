import React from "react";
import { tutors } from "../../../moked/Team";

const Tutors = () => {
  return (
    <div>
      <h3 className="aboutUsh2">OUR TUTORS</h3>
      <ul className="servicesUl">
        {tutors.map((t) => {
          return (
            <li
              className="servicesLessons "
              style={{ justifyContent: "center" }}
            >
              <img src={t.image} width="230px" height="270px" />
              <div style={{ width: "400px" }}>
                <h4>{t.name}</h4>

                {t.skills.map((i) => {
                  return (
                    <div>
                      <a class="teal lighten-4  btn-small tutorBtns">
                        <i class="material-icons right">{i.icon}</i>
                        {i.title}
                      </a>
                    </div>
                  );
                })}

                <p className="teamP">{t.text}</p>
                <button className="teamCallBtn">ORDER CALL</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tutors;
