import React from "react";
import ServicesHeader from "../components/pages/Services/header";
import Lessons from "../components/pages/Services/lessons";
import Approaches from "../components/pages/Services/approaches";
import Questions from "../components/pages/Services/questions";
import Form from "../components/FormToApply";
import Methodology from "../components/pages/Services/methodology";
import SignUp from "../components/signUp";

export const ServicesPage = () => {
  return (
    <div>
      <ServicesHeader />
      <Lessons />
      <Methodology />
      <Approaches />
      <SignUp />
      <Questions />
      <Form />
    </div>
  );
};
