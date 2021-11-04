import React from "react";
import ProgramsHeader from "../components/pages/Programs/header";
import SignUp from "../components/signUp";
import Programs from "../components/pages/Programs/programs";
import InterestedIn from "../components/pages/Programs/interestedIn";
import Form from "../components/FormToApply";

export const ProgramsPage = () => {
  return (
    <div>
      <ProgramsHeader />
      <SignUp />
      <Programs />
      <InterestedIn />
      <Form />
    </div>
  );
};
