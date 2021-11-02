import React from "react";
import teach from "../../../helpers/images/teach.jpg";

const ServicesHeader = () => {
  return (
    <div className="main">
      <div>
        <h1 className="aboutUsh1">Our services</h1>
        <p className="servicesP">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
          suscipit eaque?
        </p>
      </div>

      <img className="servicesImg" src={teach} alt="pic" />
    </div>
  );
};
export default ServicesHeader;
