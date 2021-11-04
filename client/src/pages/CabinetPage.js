import React from "react";

export const CabinetPage = () => {
  return (
    <div>
      <h1>Cabinet Page</h1>
      <h3>To Do</h3>
      <h6>THIS PAGE</h6>
      <ol>
        <li>
          aside account (photo(logged-in-name, e-mail), dashboard, homework,
          blog)
          <ol style={{ paddingLeft: "30px" }}>
            <li style={{ listStyleType: "lower-alpha" }}>
              dashboard (statistics(tasks completed, list of subjects))
            </li>
            <li style={{ listStyleType: "lower-alpha" }}>
              homework(calendar, progress, lessons/courses)
            </li>
            <li style={{ listStyleType: "lower-alpha" }}>blog</li>
          </ol>
        </li>
        <hr />
        <h6>IN GENERAL</h6>
        <li>preparation of DB on MondoDB and applying it (for mocked data).</li>
        <li>
          sending of data from application forms to DB and rendering of received
          feedbacks on page
        </li>
        <li>CSS organization improvement</li>
        <li>significant code refactoring</li>
      </ol>
    </div>
  );
};
