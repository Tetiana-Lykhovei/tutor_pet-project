import React from "react";
import TeamHeader from "../components/pages/Team/header";
import Tutors from "../components/pages/Team/tutors";
import SignUp from "../components/signUp";
import Programs from "../components/pages/Team/programs";
import InterestedIn from "../components/pages/Team/interestedIn";
import Form from "../components/FormToApply";

export const OurTeamPage = () => {
  return (
    <div>
      <TeamHeader />
      <Tutors />
      <SignUp />
      <Programs />
      <InterestedIn />
      <Form />
    </div>
  );
};
