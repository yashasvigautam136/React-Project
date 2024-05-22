import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      alert("Login succefully ");
      axios.post("http://127.0.0.1:5000/", { values });
    } catch {}
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded w-25 border loginForm">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>username:</strong>
            </label>
            <input
              type="email"
              name="username"
              autoComplete="off"
              placeholder="Enter Username"
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-0"
            />
          </div>
          <button className="btn btn-success w-100 rounded-0 mb-2">
            Log in
          </button>
          <div className="mb-1">
            <input type="checkbox" name="tick" id="tick" className="me-2" />
            <label htmlFor="password">
              You are Agree with terms & conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
