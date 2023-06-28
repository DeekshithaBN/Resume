import React, { useState } from "react";

import './style.css';

const SignupPage = () => {
  return (
    <div className="signup">
    <div className="text-light"><h1>Registration Form</h1></div>
    <div className="row">
      <div className="col-6 offset-sm-3 text-left">
        <form>
          <div className="form-group">
            <label className="text-light">Name</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label className="text-light">Email</label>
            <input className="form-control" type="text" />
          </div>
          <div className="form-group">
            <label className="text-light">Password</label>
            <input className="form-control" type="password" />
          </div>

          <div className="form-group">
            <label className="text-light">Confirm Password</label>
            <input className="form-control" type="password" />
          </div>

          <div className="form-group">
            <label className="text-light">USN</label>
            <input className="form-control" type="text" />
          </div>

          <div className="form-group">
            <label className="text-light">Phone Number</label>
            <input className="form-control" type="number" />
          </div>

          <div className="form-group">
            <label className="text-light">Phone Number</label>
            <input className="form-control" type="number" />
          </div>



          <button className="btn btn-success btn-block">Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignupPage;
