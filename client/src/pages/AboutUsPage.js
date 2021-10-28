import React from "react";
import AboutUsHeader from "../components/pages/AboutUs/header";
import Facts from "../components/pages/AboutUs/facts";
import Experience from "../components/experience";
import Methodology from "../components/pages/AboutUs/methodology";
import SignUp from "../components/signUp";
import Comments from "../components/pages/AboutUs/comments";
import Form from "../components/FormToApply";

export const AboutUsPage = () => {
  return (
    <div>
      <AboutUsHeader />
      <Facts />
      <Experience />
      <Methodology />
      <SignUp />
      <Comments />
      <Form />
    </div>
  );
};
