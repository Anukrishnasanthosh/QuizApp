import React, { useEffect, useState } from "react";
import Quizs from "./Quizs";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import PlayQuizEntry from "./PlayQuizEntry";

const Home = (props) => {
  const location = useLocation();
  console.log(location);
  const [data,setData] = useState();
useEffect(()=>{
  if(location.state.data){
    setData(location.state.data)
  }
},[location.state.data])
console.log(data);
const {showAlert} = props
  return (
    <div>
      <Navbar admin={data?.isAdmin} />
      {data?.isAdmin ? 
      <Quizs showAlert={showAlert} data={data}/>
        :
        <PlayQuizEntry/>
    }
    </div>
  );
};

export default Home;
