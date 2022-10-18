import React, { useEffect, useState } from "react";
import axios from "axios";
import "./account.scss";
import { useNavigate } from "react-router";
import { emailValidator, mobileValidator, passwordValidator } from "./validate";
import { Link } from "react-router-dom";

const Signup = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [logindata, setLogindata] = useState([]);
  const [email, setEmail] = useState("")

  useEffect(()=>{
    axios.get("https://ecfile-sol-backend.herokuapp.com/accAuth")
    .then((res)=>{
      setLogindata(res.data)
      let datas = res.data;
      datas.map((e)=>{
        console.log(e.email, "bhsjghjgds")
        setEmail(e.email)
      })
      
    })
  }, [])


  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleSubmit = () => {
    axios
      .post("https://ecfile-sol-backend.herokuapp.com/accAuth", data)
      .then(() => {
        setData({
          name: "",
          email: "",
          mobile: "",
          password: "",
        });
      });
      if(!emailValidator(data.email)){
        return setErrorMessage("Please Enter valid Email")
      }else if(!passwordValidator(data.password)){
        return setErrorMessage("Please Enter Valid Password")
      }else if(data.mobile.length !== 10){
        return setErrorMessage("Please Enter 10 Digit Mobile Number")
      }else if(!mobileValidator(data.mobile)){
        return setErrorMessage("Please Enter valid Mobile Number Start with 6,7,8,9")
      }else if(email == data.email){
        return setErrorMessage("Email already registered")
      }else{
        navigate("/login")
        alert("Successfully Registered")
        return setSuccessMessage("Successfully Registered")
      }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
  };

  return (
    <div className="signup">
      <div className="signup-box">
        <h1>REGISTER</h1>
        {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
				{successMessage.length > 0 && (<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>)}
        <input
          onChange={handleChange}
          value={data.name}
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          required
        />
        <br />
        <input
          onChange={handleChange}
          value={data.email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          required
        />
        <br />
        <input
          onChange={handleChange}
          value={data.mobile}
          type="text"
          name="mobile"
          id="mobile"
          placeholder="Enter Mobile"
          required
        />
        <br />
        <input
          onChange={handleChange}
          value={data.password}
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          required
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <div>Already have an account? <Link to="/login">Click Here</Link></div>
      </div>
    </div>
  );
};

export default Signup;
