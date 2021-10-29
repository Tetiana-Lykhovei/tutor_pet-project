import React, { useState } from "react";
import AboutUsHeader from "../components/pages/AboutUs/header";
import Facts from "../components/pages/AboutUs/facts";
import Experience from "../components/experience";

import SignUp from "../components/signUp";
import Comments from "../components/pages/AboutUs/comments";
import Form from "../components/FormToApply";
import FeedbackModal from "../components/FeedbackModal";
import Tutors from "../components/pages/AboutUs/tutors";
export const AboutUsPage = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <AboutUsHeader />
      <Facts />
      <Experience />
      <Tutors />
      {/* <Methodology /> */}
      <SignUp />
      <Comments setActive={setActive} />
      <Form />
      <FeedbackModal active={active} setActive={setActive} />
    </div>
  );
};
