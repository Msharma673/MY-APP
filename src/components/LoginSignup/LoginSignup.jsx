import React, { useState } from "react";
import "./LoginSignup.css";
import loginsignup from "./loginImage.png";
import logo from '../../assets/images/logo.svg'
import NavBar from "../NavBar/NavBar";

function LoginSignup() {
    
  const [isRegistering, setIsRegistering] = useState(true);
  const [role, setRole] = useState("student");

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const toggleRole = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="container1">
      <div className="image-section">
        <img src={loginsignup} alt="Classroom" />
      </div>
      <div className="form-section">
        <a href="#" className="logo1">
          <img src={logo} width="130" height="10" alt="EduWeb logo" />
        </a>
        <h2>Welcome to AccentAura!</h2>
        {isRegistering ? (
          <>
            <div className="role-toggle">
              <button
                className={role === "student" ? "active" : ""}
                onClick={() => toggleRole("student")}
              >
                Student
              </button>
              <button
                className={role === "teacher" ? "active" : ""}
                onClick={() => toggleRole("teacher")}
              >
                Teacher
              </button>
            </div>
            <form>
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Register</button>
            </form>
            <p>
              Already Registered?{" "}<span onClick={toggleForm} className="link">Log In</span>
            </p>
          </>
        ) : (
          <>
            <form>
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
              <button type="submit">Log In</button>
            </form>
            <p>
              Need an account?{" "}
              <span onClick={toggleForm} className="link">
                Register
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;
