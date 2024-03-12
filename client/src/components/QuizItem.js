import React, { useContext } from "react";
import quizContext from "../quizs/quizContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen } from "@fortawesome/free-solid-svg-icons";

const Quizitem = (props) => {
  const context = useContext(quizContext);
  const { deleteQuiz } = context;
  const { quiz, updateQuiz } = props;
  
  return (
    <div className="col-md-6 gx-1">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{quiz.question}</h5>
          <div className="row gx-2">
            <div className="col">
              <ul><li>{quiz.option1}</li></ul>
            </div>
            <div className="col">
              <ul><li>{quiz.option2}</li></ul>
            </div>
            <div className="col">
              <ul><li>{quiz.option3}</li></ul>
            </div>
            <div className="col">
              <ul><li>{quiz.option4}</li></ul>
            </div>
          </div>
          <div className="row my-1">
            <div className="col">Answer is : {quiz.answer}</div>
          </div>
          <div className="row my-1">
            <div className="col">Is the question type MCQ : {quiz.mcq}</div>
          </div>
          <div className="row my-1">
            <div className="col">Title : {quiz.title}</div>
          </div>
          <FontAwesomeIcon icon={faTrash} className="mx-2" onClick={() => { deleteQuiz(quiz._id); props.showAlert("deleted successfully", "success") }} />
          <FontAwesomeIcon icon={faFilePen} className="mx-2" onClick={() => { updateQuiz(quiz) }} />
        </div>
      </div>
    </div>
  );
};

export default Quizitem;
