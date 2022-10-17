import React from 'react'

const Signin = () => {
  return (
    <div className="signin">
      <div className="signin-box">
        <h1>SIGNIN</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          required
        />
        <br />
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Signin