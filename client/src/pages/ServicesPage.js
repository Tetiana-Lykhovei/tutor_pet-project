import React from "react";
import lang from "../helpers/images/lang.png";
import guitar from "../helpers/images/guitar.png";
import acounting from "../helpers/images/acounting.png";
import abc from "../helpers/images/abc.png";
import board from "../helpers/images/board.png";
import chat from "../helpers/images/chat.png";
import clock from "../helpers/images/clock.png";
import diploma from "../helpers/images/diploma.png";
import globe from "../helpers/images/globe.png";
import grade from "../helpers/images/grade.png";
import interact from "../helpers/images/interact.png";

export const ServicesPage = () => {
  return (
    <div>
      <h1>Our services</h1>
      <p
        style={{
          fontSize: "24px",
          marginTop: "100px",
          marginBottom: "100px",
          textAlign: "center",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
        repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit
        eaque?
      </p>
      <h3
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          textAlign: "center",
        }}
      >
        LESSONS WE CONDUCT
      </h3>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <li style={{ display: "flex" }}>
          <img src={lang} width="400px" height="400px" />
          <div style={{ width: "400px", textAlign: "center" }}>
            <h4>Languages </h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            <button class="waves-effect waves-light btn">
              <i class="material-icons right">arrow_forward</i>Have a lesson
            </button>
          </div>
        </li>
        <li style={{ display: "flex" }}>
          <div style={{ width: "400px", textAlign: "center" }}>
            <h4>Guitar playing</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            <button class="waves-effect waves-light btn">
              <i class="material-icons right">arrow_forward</i>Have a lesson
            </button>
          </div>
          <img src={guitar} width="400px" height="400px" />
        </li>
        <li style={{ display: "flex" }}>
          <img src={acounting} width="400px" height="400px" />
          <div style={{ width: "400px", textAlign: "center" }}>
            <h4>Painting</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            <button class="waves-effect waves-light btn">
              <i class="material-icons right">arrow_forward</i>Have a lesson
            </button>
          </div>
        </li>
        <li style={{ display: "flex", marginBottom: "30px" }}>
          <div
            style={{
              width: "400px",
              textAlign: "center",
            }}
          >
            <h4>Other lessons</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            <button class="waves-effect waves-light btn">
              <i class="material-icons right">arrow_forward</i>Have a lesson
            </button>
          </div>{" "}
          <img src={acounting} width="400px" height="400px" />
        </li>
      </ul>

      <h3
        style={{
          marginBottom: "100px",
          textAlign: "center",
        }}
      >
        Our methodology
      </h3>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <li
          style={{
            marginRight: "50px",
            width: "200px",
            padding: "10px",
          }}
        >
          <img src={clock} />
          <p>Tutors available 24/7</p>
        </li>
        <li
          style={{
            marginRight: "50px",
            width: "200px",
            padding: "10px",
          }}
        >
          <img src={board} />
          <p>70% of lesson is practicing</p>
        </li>
        <li
          style={{
            marginRight: "50px",
            width: "200px",
            padding: "10px",
          }}
        >
          <img src={interact} />
          <p>Interactive materials</p>
        </li>
        <li
          style={{
            marginRight: "50px",
            width: "200px",
            padding: "10px",
          }}
        >
          <img src={chat} />
          <p>Feedback after each lesson</p>
        </li>
        <li
          style={{
            marginRight: "50px",
            width: "200px",
            padding: "10px",
          }}
        >
          <img src={diploma} />
          <p>Emphasis on exam material</p>
        </li>
        <li
          style={{
            marginRight: "50px",
            width: "200px",
            padding: "10px",
          }}
        >
          <img src={globe} />
          <p>Motivation for discoveries</p>
        </li>
        <li
          style={{
            marginRight: "50px",
            width: "200px",
            padding: "10px",
          }}
        >
          <img src={abc} />
          <p>From simple to harder</p>
        </li>
        <li
          style={{
            marginRight: "50px",
            justifyContent: "center",
            width: "200px",
          }}
        >
          <img src={grade} />
          <p>Checking hometasks</p>
        </li>
      </ul>
    </div>
  );
};
