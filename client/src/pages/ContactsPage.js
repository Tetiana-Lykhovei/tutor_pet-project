import React from "react";
import Form from "../components/FormToApply";

export const ContactsPage = () => {
  const location = [
    {
      icon: "location_on",
      details: "Volodymyrska St, 40А, Kyiv, 01034",
      text: "Our Office",
      href: "#",
    },
    {
      icon: "local_post_office",
      details: "Litava@gmail.com",
      text: "Questions and propositions",
      href: "mailto:Litava@gmail.com",
    },
    {
      icon: "local_phone",
      details: "(067) 123-45-67",
      text: "Hot line",
      href: "tel:+380671234567",
    },
    {
      icon: "insert_invitation",
      details: "Monday-Friday: 10:00 - 21:00",
      text: "Work Schedule",
      href: "#",
    },
  ];
  return (
    <div>
      <h1>Contacts</h1>
      <div className="contacts">
        <address className="contactsAddress">
          <ul>
            {location.map((l) => {
              return (
                <li className="adressCard">
                  <h5 className="contactsh5">{l.text}</h5>
                  <div className="contactDetails">
                    <i className="material-icons">{l.icon}</i>
                    <a
                      href={l.href}
                      style={{ color: "black", marginLeft: "10px" }}
                    >
                      {l.details}
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </address>

        <iframe
          className="contactsMap"
          title="location"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDW6YFq7KOO4NQe55ku-v9dsMTGWKPhTuU
    &q=kyiv+golden gate"
        ></iframe>
      </div>
      <Form />
    </div>
  );
};
