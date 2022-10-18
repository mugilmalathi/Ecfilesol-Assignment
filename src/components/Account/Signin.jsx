import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { emailValidator, passwordValidator } from './validate'

const Signin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([])
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("https://ecfile-sol-backend.herokuapp.com/accAuth")
        .then((res)=>{
            setData(res.data)
        })
    }, [])

    const handleLogin=()=>{
        if(!emailValidator(email)){
            return setErrorMessage("Please Enter valid Email")
        }else if(!passwordValidator(password)){
            return setErrorMessage("Please Enter Valid Password")
        }
        // else{
        //     return setSuccessMessage("Successfully LoggedIn")
        // }

        data.map((el)=>{
            if(email == el.email && password == el.password){
                navigate("/dashboard")
                localStorage.setItem("name", JSON.stringify(el.name))
            }else{
                return setErrorMessage("Please Enter Valid Email or Password")
            }
        })
    }

  return (
    <div className="signin">
      <div className="signin-box">
        <h1>SIGNIN</h1>
        {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
		{successMessage.length > 0 && (<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>)}
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Enter Password"
          required
        />
        <br />
        <button onClick={handleLogin}>Submit</button>
        <div>New User? <Link to="/signup">Click Here</Link></div>
      </div>
    </div>
  )
}

export default Signin