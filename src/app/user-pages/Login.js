import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useLocation } from "wouter";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState("");
  let [Login, setLogin] = useState({
    email: "",
    password: "",
  });
  
  const { email, password } = Login;
  
  // const checkUser = localStorage.getItem("signUP");
  
  let [location, setLocation] = useLocation();
  
  let checkSignIn = async () => {
    localStorage.setItem("signUP", "true");
    if (user[0].email === email && user[0].password === password) {
      alert("Admin Enters");
      localStorage.setItem("admin","isAdmin");
      setLocation("/");
    } else if (user[1].email === email && user[1].password === password) {
      alert("Manager Enters");
      localStorage.setItem("manager","isManager");
      setLocation("/");
    } else if (user[2].email === email && user[2].password === password) {
      alert("User Enters");
      localStorage.setItem("user","isUser")
      setLocation("/");
    } else {
      alert("User not allowed!..");
    }
    
  };

  const signUp = async () => {
    let signUpdata = await axios.get("http://localhost:5000/");
    const userinfo = await signUpdata.data;
    setUser(userinfo);
  };
  
  useEffect(() => {
    signUp();
  }, []);
  
  console.log("All USers",user)
  // useEffect(() => {
  //   checkSignIn()
  // }, []);
  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo text-center">
                <img src="/logo192.png" alt="logo" />
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <Form className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="email"
                    placeholder="Username"
                    size="lg"
                    name="email"
                    className="h-auto"
                    value={email}
                    onChange={(e) =>
                      setLogin({ ...Login, [e.target.name]: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    size="lg"
                    name="password"
                    className="h-auto"
                    value={password}
                    onChange={(e) =>
                      setLogin({ ...Login, [e.target.name]: e.target.value })
                    }
                  />
                </Form.Group>
                <div className="mt-3">
                  <div
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    onClick={checkSignIn}
                  >
                    SIGN IN
                  </div>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Keep me signed in
                    </label>
                  </div>
                  <a
                    href="!#"
                    onClick={(event) => event.preventDefault()}
                    className="auth-link text-black"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mb-2">
                  <button
                    type="button"
                    className="btn btn-block btn-facebook auth-form-btn"
                  >
                    <i className="mdi mdi-facebook mr-2"></i>Connect using
                    facebook
                  </button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account?
                  <Link to="/register" className="text-primary">
                    Create
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
