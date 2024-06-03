import { useState } from "react";
import "./LoginPage.css";
import { assets } from "../../assets/assets";

const LoginPage = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-page">
      <form className="login-page-container">
        <div className="login-page-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-page-inputs">
          <input placeholder="Username" required />

          {currState === "Login" ? (
            <></>
          ) : (
            <input type="email" placeholder="Example@mail.com" />
          )}

          <input type="password" placeholder="Password" />
        </div>
        <button>{currState === "Login" ? "Login" : "Creat account"}</button>
        <div className="login-page-condition">
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Creat a new account ?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Regiseter</span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span onClick={() => setCurrState("Login")}>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPage;
