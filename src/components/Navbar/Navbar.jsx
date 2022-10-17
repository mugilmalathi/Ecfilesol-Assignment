import React from 'react'
import "./nav.scss"
import { AiOutlineAntCloud } from "react-icons/ai";
import { AiTwotoneBell } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { useNavigate } from 'react-router';

const Navbar = () => {
    
    const navigate = useNavigate()
    const handleLogout=()=>{
        navigate("/login")
    }

  return (
    <div className='navbar'>
        <div><AiOutlineAntCloud /></div>
        <div>
            <div><button onClick={handleLogout}>Logout</button></div>
            <div><AiTwotoneBell /></div>
            <div><AiTwotoneHome /></div>
            <div>{JSON.parse(localStorage.getItem("name"))}</div>
        </div>
    </div>
  )
}

export default Navbar