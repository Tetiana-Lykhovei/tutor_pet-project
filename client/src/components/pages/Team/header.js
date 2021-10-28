import React from "react";
import team from "../../../helpers/images/team.jpg";
import { filterskills } from "../../../moked/Team";

const TeamHeader = () => {
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
      <div className="filterBtns">
        {filterskills.map((b) => {
          return (
            <a class="teal btn-large filterButton">
              <i class="material-icons right">{b.icon}</i>
              {b.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default TeamHeader;
