import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

let Register = () => {
  const [user, setUser] = useState({
    name:'',
    username: "",
    email: "",
    password: "",
    dob: "",
    address: "",
    mobile: "",
  });

  const { name,username, email, password,dob,address,mobile } = user;

  let clicktosignUp = async () => {
    console.log("data",user)
    axios.post("http://localhost:5000/",user);
  };
  const signUp = async () => {};

  useEffect(() => {
    signUp();
  }, []);
  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src="/logo192.png" alt="logo" />
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">
                Signing up is easy. It only takes a few steps
              </h6>
              <form className="pt-3">
              
              <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Date Of Birth"
                    name="dob"
                    value={dob}
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Address"
                    name="address"
                    value={address}
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={mobile}
                    onChange={(e) =>
                      setUser({ ...user, [e.target.name]: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <select
                    className="form-control form-control-lg"
                    id="exampleFormControlSelect2"
                  >
                    <option>Country</option>
                    <option>United States of America</option>
                    <option>United Kingdom</option>
                    <option>India</option>
                    <option>Germany</option>
                    <option>Argentina</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>I agree to all Terms &
                      Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <Link
                    className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    onClick={clicktosignUp}
                  >
                    SIGN UP
                  </Link>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
