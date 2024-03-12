import React, { useState } from 'react';
import Game from './Game';

const PlayQuizEntry = () => {
  const [seq, setSeq] = useState("");
  const [quizs, setQuizs] = useState([]);
  const [val, setVal] = useState('');

  const fetchAllQuiz = async () => {
    const response = await fetch(`http://localhost:1000/api/quiz/fetchallquiznoauthentication`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json, "FETCH");
    setSeq('1');
    setQuizs(json);
    const disableButton = () => {
      document.getElementById('btn2').disabled = true;
    }
    disableButton();
  }

  const generateScore = () => {
    console.log(sessionStorage.getItem("val"));
    setVal(sessionStorage.getItem("val"));
    const enableButton = () => {
      document.getElementById('btn').disabled = false;
    }
    enableButton();
  }
  const handleReset = () => {
    const radios = document.querySelectorAll('input[type=radio]');
    radios.forEach(radio => {
      radio.checked = false;
    });
    setVal('');
  }
  return (
    <div>
      <button className='btn btn-primary' id="btn2" onClick={fetchAllQuiz}>Play</button>
      {quizs.map((quiz) => {
        return (
          <Game quiz={quiz} key={quiz._id} />
        );
      })}
      <button className={seq === '1' ? 'btn btn-primary mx-2' : 'd-none mx-2'} id="btn" onClick={generateScore}>GENERATE SCORE</button>
      <div className={seq === '1' ? 'card my-3' : 'd-none'} > Your Score is : {val} </div>
      <div>
      <button className="btn btn-danger my-2" onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}

export default PlayQuizEntry;
