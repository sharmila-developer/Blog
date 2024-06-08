import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", { email, password })
      .then((res) => {
        if (res.data.status === "Success") {
          navigate("/home");
          alert("You are logged in!");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="login">
        <form onSubmit={handlesubmit}>
          <h2>Login</h2>

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email id"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="****"
            value={password}
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>
            <Link to="/forgotpassword"> Forgot Password </Link>
          </p>
          <button type="submit">Login</button>

          <p>
            Don't Have a Account? <Link to="/signup">SignUp</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
