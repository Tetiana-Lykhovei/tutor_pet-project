import React from "react";

export const ContactsPage = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <address
          style={{
            fontStyle: "normal",
            lineHeight: "200%",
            fontSize: "18px",
            paddingTop: "50px",
          }}
        >
          <div>
            <i className="material-icons">location_on</i>
            <span style={{ color: "black", marginLeft: "10px" }}>
              Volodymyrska St, 40А, Kyiv, 01034
            </span>
          </div>
          <div style={{ alignItems: "baseline" }}>
            <i className="material-icons">local_post_office</i>
            <a
              href="mailto:Litava@gmail.com"
              style={{ color: "black", marginLeft: "10px" }}
            >
              Litava@gmail.com
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <i className="material-icons">local_phone</i>
            <a
              href="tel:+380671234567"
              style={{ color: "black", marginLeft: "10px" }}
            >
              (067) 123-45-67
            </a>
          </div>
        </address>

        <iframe
          width="70%"
          height="450"
          style={{ border: "0", borderRadius: "10px", marginBottom: "100px" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDW6YFq7KOO4NQe55ku-v9dsMTGWKPhTuU
    &q=kyiv+golden gate"
        ></iframe>
      </div>
    </div>
  );
};
