import React, { useState } from "react";
import team from "../../../helpers/images/team.jpg";
import { filterskills } from "../../../moked/Team";
import Modal from "../../../components/Modal";
import RequestLessonModal from "../../requestModal";

const ProgramsHeader = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="main">
        <div>
          <h1 className="aboutUsh1"> What we teach </h1>
          <p className="servicesP">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque.
          </p>
        </div>
        <img className="teamImg" src={team} />
      </div>

      <h3 className="aboutUsh2 ">CATEGORIES</h3>
      <ul className="servicesUl">
        {filterskills.map((b) => {
          return (
            <li className="categories">
              <img src={b.icon} width="200px" height="150px" />
              <h6 className="programsH4">{b.title}</h6>
              <p className="programsp">{b.text}</p>
              <button
                class="waves-effect  teal darken-2 btn categoryBtn"
                onClick={() => setActive(true)}
              >
                <i class="material-icons  teal darken-2 right">navigate_next</i>
                Learn more
              </button>
            </li>
          );
        })}
      </ul>
      <Modal active={active} setActive={setActive}>
        <RequestLessonModal />
      </Modal>
    </div>
  );
};
export default ProgramsHeader;
