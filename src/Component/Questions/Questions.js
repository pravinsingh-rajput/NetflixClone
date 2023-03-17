import React from "react";
import "./Questions.css";

function Questions(props) {
  return (
    <div className="question_Container">
      <div className="questions">
        <details>
          <summary className="question">{props.question}</summary>
          <p className="answer">{props.answer}</p>
        </details>
      </div>
    </div>
  );
}

export default Questions;
