import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(" ");
  const [passMessage, setpassMessage] = useState("");

  const handleemail = (e) => {
    let inputValue = e.target.value;
    setEmail(inputValue);

    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(inputValue)) {
      setMessage("Error! you have entered invalid email.");
    } else {
      setMessage("");
    }
  };
  const handlepass = (e) => {
    let pass = e.target.value;
    setPassword(pass);

    // regular expressions to validate password
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!pass.match(lowerCase)) {
      setpassMessage("Password should contains lowercase letters!");
    } else if (!pass.match(upperCase)) {
      setpassMessage("Password should contain uppercase letters!");
    } else if (!pass.match(numbers)) {
      setpassMessage("Password should contains numbers also!");
    } else if (pass.length < 8) {
      setpassMessage("Password length should be more than 8.");
    } else {
      setpassMessage("Password is strong!");
    }
  };

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register", { username, email, password })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="signup">
        <form onSubmit={handlesubmit}>
          <h2>SignUp</h2>
          <label>UserName</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            autoComplete="off"
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email id"
            value={email}
            autoComplete="off"
            onChange={handleemail}
          />
          <span style={{ color: "red", fontSize: "12px" }}>{message}</span>

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="****"
            value={password}
            autoComplete="off"
            onChange={handlepass}
          />
          <span style={{ color: "red", fontSize: "12px" }}>{passMessage}</span>

          <button type="submit">Register</button>
          <p>
            Already Have a Account ? <Link to="/">Login</Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
