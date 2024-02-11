import React, { useState } from "react";
import "./SignUp.css";
import Axios from "axios";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/signup", {
      username,
      email,
      password,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-conatiner">
      <div className="sign_up_desc">
        <h1 className="heading_06"></h1>
        <p>
          <span className="head">Garden Guru !</span><br/>
           Your ultimate plant care companion! Sign up now to
          access personalized tips, reminders, and expert advice tailored to
          your garden's needs. Unlock a world of green-thumb success with our
          intuitive app designed to nurture your plants and elevate your
          gardening experience. Join us today!
        </p>
      </div>
      <div className="singn_up_conatiner_01">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2 className="heading_05">Sign Up</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="Email"
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="*********"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
