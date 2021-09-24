import React from "react";
import tutor1 from "../helpers/images/tutor1.jpg";
import tutor2 from "../helpers/images/tutor2.jpg";
import tutor3 from "../helpers/images/tutor3.png";
import Blob from "../helpers/images/Blob.png";
export const OurTeamPage = () => {
  return (
    <div>
      <h1> Our Team </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "80px 5px",
        }}
      >
        <a
          class="teal btn-large"
          style={{
            borderRadius: "20px",
          }}
        >
          <i class="material-icons right">speaker_notes</i>Languages
        </a>
        <a
          class="btn-large teal"
          style={{
            marginRight: "20px",
            marginLeft: "20px",
            borderRadius: "20px",
          }}
        >
          <i class="material-icons right">group</i>Sociology
        </a>
        <a
          class="btn-large teal "
          style={{
            borderRadius: "20px",
          }}
        >
          <i class="material-icons right">leak_add</i>Marketing
        </a>
        <a
          class="btn-large teal"
          style={{
            marginRight: "20px",
            marginLeft: "20px",
            borderRadius: "20px",
          }}
        >
          <i class="material-icons right">palette</i>Painting
        </a>
        <a
          class="btn-large teal"
          style={{
            marginRight: "20px",
            marginLeft: "20px",
            borderRadius: "20px",
          }}
        >
          <i class="material-icons right">music_note</i>Guitar Playing
        </a>
      </div>

      <ul style={{ justifyContent: "center" }}>
        <li
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingBottom: "30px",
          }}
        >
          <img src={tutor1} width="400px" height="400px" />
          <div style={{ paddingLeft: "70px" }}>
            <h4>Jane Smith</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <a
                class="teal lighten-4  btn-small"
                style={{
                  color: "black",
                }}
              >
                <i class="material-icons right ">speaker_notes</i>Languages
              </a>
              <a
                class="teal lighten-4  btn-small"
                style={{
                  marginRight: "20px",
                  marginLeft: "20px",
                  color: "black",
                }}
              >
                <i class="material-icons right">group</i>Sociology
              </a>
              <a
                class="teal lighten-4 btn-small"
                style={{
                  color: "black",
                }}
              >
                <i class="material-icons right">music_note</i>Guitar Playing
              </a>
            </div>
            <p
              style={{
                width: "500px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "18px",
                lineHeight: "32px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            <button
              style={{
                padding: "7px 10px",
                background: "#FFFFFF",
                border: "1px solid #56CCF2",
                boxShadow:
                  "0px 2px 4px rgba(38, 50, 56, 0.08), 0px 4px 6px rgba(38, 50, 56, 0.08)",
                borderRadius: "99px",
              }}
            >
              ORDER CALL
            </button>
          </div>
        </li>
        <li
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: "30px",
          }}
        >
          <img src={tutor2} width="400px" height="400px" />
          <div style={{ paddingLeft: "70px" }}>
            <h4>Mary Smith</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <a
                class="teal lighten-4  btn-small"
                style={{
                  color: "black",
                }}
              >
                <i class="material-icons right">leak_add</i>Marketing
              </a>
              <a
                class="teal lighten-4  btn-small"
                style={{
                  marginRight: "20px",
                  marginLeft: "20px",

                  color: "black",
                }}
              >
                <i class="material-icons right">group</i>Sociology
              </a>
              <a
                class="teal lighten-4 btn-small"
                style={{
                  color: "black",
                }}
              >
                <i class="material-icons right">palette</i>Painting
              </a>
            </div>
            <p
              style={{
                width: "500px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "18px",
                lineHeight: "32px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            <button
              style={{
                padding: "7px 10px",
                background: "#FFFFFF",
                border: "1px solid #56CCF2",
                boxShadow:
                  "0px 2px 4px rgba(38, 50, 56, 0.08), 0px 4px 6px rgba(38, 50, 56, 0.08)",
                borderRadius: "99px",
              }}
            >
              ORDER CALL
            </button>
          </div>
        </li>
        <li
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingBottom: "30px",
          }}
        >
          <img
            src={Blob}
            width="400px"
            height="400px"
            style={{ position: "relative" }}
          />
          <img
            src={tutor3}
            width="290px"
            height="400px"
            style={{ position: "absolute" }}
          />

          <div style={{ paddingLeft: "70px" }}>
            <h4>John Smith</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <a
                class="teal lighten-4  btn-small"
                style={{
                  color: "black",
                }}
              >
                <i class="material-icons right">leak_add</i>Marketing
              </a>
              <a
                class="teal lighten-4  btn-small"
                style={{
                  color: "black",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
              >
                <i class="material-icons right">music_note</i>Guitar Playing
              </a>
              <a
                class="teal lighten-4 btn-small"
                style={{
                  color: "black",
                }}
              >
                <i class="material-icons right">palette</i>Painting
              </a>
            </div>
            <p
              style={{
                width: "500px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "18px",
                lineHeight: "32px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias aut, repellat ipsum facere voluptate dicta obcaecati
              deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Molestias aut, repellat ipsum facere
              voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            <button
              style={{
                padding: "7px 10px",
                background: "#FFFFFF",
                border: "1px solid #56CCF2",
                boxShadow:
                  "0px 2px 4px rgba(38, 50, 56, 0.08), 0px 4px 6px rgba(38, 50, 56, 0.08)",
                borderRadius: "99px",
              }}
            >
              ORDER CALL
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
