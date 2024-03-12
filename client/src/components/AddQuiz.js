import React, { useContext, useState } from "react";
import quizContext from "../quizs/quizContext";
import '../styles/add.css'

const AddQuiz = (props) => {
  const { addQuiz } = useContext(quizContext);
  const [select, setSelect] = useState("Yes");
  const [quiz, setQuiz] = useState({
    id: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    title: "",
    mcq: select,
  });

  const handleClick = () => {
    addQuiz(quiz.question, quiz.option1, quiz.option2, quiz.option3, quiz.option4, quiz.answer, quiz.title, select);
    setQuiz({ question: "", option1: "", option2: "", option3: "", option4: "", answer: "", title: "", mcq: select });
    props.showAlert("Added Successfully", "success");
  };

  const onChange = (e) => setQuiz({ ...quiz, [e.target.name]: e.target.value });

  return (
    <>
    <h2 className="text-center text-primary my-3">Add your Quiz</h2>
    <div className="container-fluid my-2">
      <form className="add-quiz-form">
        <div className="form-group">
          <label htmlFor="question">Question</label>
          <input type="text" className="form-control" id="question" name="question" onChange={onChange} value={quiz.question} minLength={5} required placeholder="Write your Question here" />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" onChange={onChange} value={quiz.title} minLength={5} required placeholder="Enter the title" />
        </div>
        {[1, 2, 3, 4].map((num) => (
          <div className="form-group" key={num}>
            <label htmlFor={"option" + num}>Option {num}</label>
            <input type="text" className="form-control" id={"option" + num} name={"option" + num} onChange={onChange} value={quiz["option" + num]} minLength={3} required placeholder={"Enter option " + num} />
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="answer">Answer of the above question</label>
          <input type="text" className="form-control" id="answer" name="answer" onChange={onChange} value={quiz.answer} minLength={5} required placeholder="Enter the answer" />
        </div>
        <div className="form-group">
          <label htmlFor="mcq">Is this question MCQ:</label>
          <select name="mcq" value={select} onChange={(e) => setSelect(e.target.value)} className="form-control">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}>
          Add Quiz
        </button>
        </form>
    </div>
    </>
  );
};

export default AddQuiz;
