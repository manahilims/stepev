import React, { useState } from "react";
import "./Login.css";
import Hand from "./../../assets/Images/Hand.svg";
import ellipse from "./../../assets/Images/ellipse.svg";
import { loginApi } from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIN] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    var response_data = await loginApi(email, password);
    setData(response_data);
    if (response_data.status === "OK") {
      console.log("Success");
      navigate("/");
      setIsLoggedIN(true);
    } else {
      console.log("unsuccess", response_data.status);
      alert("Email or password is incorrect");
    }
  };
  return (
    <>
      {isLoggedIn ? (
        <Dashboard name={data.user.name} image={data.user.avatar} />
      ) : (
        <>
          <img className="handWave" src={Hand} alt="Handwave" />
          <div className="textLogin">
            <p className="greetingText">Welcome Admin!</p>
            <p className="loginInfo">Please login to continue</p>
          </div>
          <form className="form">
            <input
              className="formInput"
              type="email"
              placeholder="Email"
              onChange={handleEmail}
            />
            <input
              className="formInput"
              type="password"
              placeholder="Password"
              onChange={handlePassword}
            />

            <a href="/" className="btnLogin" onClick={(e) => handleLogin(e)}>
              <p>Login</p>
            </a>
            <a href="/" className="btnForget">
              Forget password?
            </a>
            <p className="copyright">Copyright StepEV 2022</p>
          </form>
          <img className="ellipse" src={ellipse} alt="Ellipse" />
        </>
      )}
    </>
  );
};

export default Login;
