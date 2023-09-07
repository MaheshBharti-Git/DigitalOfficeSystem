import React from "react";
import "./star.css";
import "./LogIn_Page.css";

export default function LogIn_Page() {
  return (
    <>
      <div id="stars"></div>
      {/* Section: Design Block */}
      <section className="text-center ">
        <div className="card-container">
          <div className=" card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Employee</h2>
                <form action="/login" method="POST">
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form3Example3"
                      className="form-control"
                      name="empid"
                      value='AA5625'
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Employee ID
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      name="emppswd"
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      value='12345'
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-block mb-4"
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Admin</h2>
                <form>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Admin ID
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-outline-primary btn-block mb-4"
                  >
                    Signin
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>
  );
}
