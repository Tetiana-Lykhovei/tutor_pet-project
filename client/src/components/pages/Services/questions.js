import React from "react";
import { questions } from "../../../moked/Services";

const Questions = () => {
  return (
    <div>
      <h3 className="aboutUsh2">Main Questions</h3>
      <p className="servicesp">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="servicesQuestions">
        <ul className="servicesQuestionsUl">
          {questions.map((q) => {
            return (
              <li className="servicesQuestionsLi">
                <h6 className="servicesQuestionsh6">{q.title}</h6>
                <p className="servicesQuestionsp">{q.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Questions;
