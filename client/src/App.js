import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import QuizState from "./quizs/QuizState";
import About from "./components/About";
import Alert from "./components/Alert";
import Login from "./components/Login";
import PlayQuizEntry from "./components/PlayQuizEntry";
import Signup from "./components/Signup";
import{ useState } from 'react';

function App() {
  const[alert, setAlert] = useState(null);
  const showAlert =(message,type)=> { 
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null)
    },1500)
  }
  return (
    <>
      <QuizState>
        <BrowserRouter>
        <div>
          <Alert alert={alert}/>
            <Routes>
              <Route exact path="/home" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/" element={<About />} />
              <Route exact path="/playquiz" element={<PlayQuizEntry />} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </QuizState>
    </>
  );
}

export default App;
