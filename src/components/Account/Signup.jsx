import React, { useEffect, useState } from "react";
import axios from "axios";
import "./account.scss";
import { useNavigate } from "react-router";
import { emailValidator, mobileValidator, passwordValidator } from "./validate";

const Signup = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // const [logindata, setLogindata] = useState([]);

  // useEffect(()=>{
  //   axios.get("")
  //   .then((res)=>{
  //     setLogindata(res.data)
  //   })
  // }, [])

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
      setSuccessMessage("")
      if(!emailValidator(data.email)){
        return setErrorMessage("Please Enter valid Email")
      }else if(!passwordValidator(data.password)){
        return setErrorMessage("Please Enter Valid Password")
      }else if(!mobileValidator(data.mobile)){
        return setErrorMessage("Please Enter valid Mobile Number")
      }else{
        navigate("/login")
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
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
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
      </div>
    </div>
  );
};

export default Signup;
