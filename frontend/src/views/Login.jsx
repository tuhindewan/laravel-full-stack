import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {

  const [message, setMessage] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <h1 className="title">Login into your account</h1>

      {message &&
        <div className="alert">
          <p>{message}</p>
        </div>
      }

      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <button className="btn btn-block">Login</button>
      <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
    </form>
  )
}

export default Login