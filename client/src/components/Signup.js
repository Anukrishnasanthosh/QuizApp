import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/login.css";

const Signup = (props) => {
  const [credential, setcredential] = useState({ name:"", email: "", password: "", confirmpassword:"" });
  let Navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = credential;
    
    const response = await fetch("http://localhost:1000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,email, password }),
    });
    
    const json = await response.json();
    
    if(json.success){
      localStorage.setItem('token', json.authtoken);
      Navigate('/login');
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };
  
  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value });
  };
  
  return (
    <>
      <Navbar fromlogin/>
      <div className="form-container m-auto my-5">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" 
              className="form-control" 
              id="name"  
              name="name"
              onChange={onChange} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              onChange={onChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" 
              className="form-label">
              Password
            </label>
            <input type="password"
              className="form-control" 
              id="password"
              name="password" 
              onChange={onChange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" 
              className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword" 
              name="confirmpassword"
              onChange={onChange} minLength={5} required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
