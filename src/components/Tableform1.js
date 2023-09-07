import React, { useEffect, useState, useRef } from "react";
import "./Tableform1.css";
import Navbar from "./Navbar";
import "./star.css";
import Row from "./Addrow";

import { useReactToPrint } from "react-to-print";

export default function Tableform1() {
  //auto-fill data----
  const [name, setname] = useState(null);
  const [EC, setEC] = useState(null);
  const [gender, setGender] = useState(null);
  const [telephone, setTelephone] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [email, setemail] = useState(null);
  const [Address, setAddress] = useState(null);

  const componentPDF = useRef();

  const parentRef = useRef();
  const [elements, setelements] = useState([]);

  const createNewDiv = () => {
    let newElementsArr = [...elements];
    const newElement = React.createElement(
      "div",
      { key: "ele" + new Date().getTime() },
      <Row />
    );

    setelements((elements) => [...elements, newElement]);
  };

  useEffect(() => {
    // Using fetch to fetch the api from
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setname(data[0]["name"]);
        setEC(data[0]["employeid"]);
        setGender(data[0]["gender"]);
        setTelephone(data[0]["telephone"]);
        setMobile(data[0]["mobile"]);
        setemail(data[0]["email"]);
        setAddress(data[0]["Address"]);
      })
    );
  }, []);

  const genratePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "UserForm",
    onAfterPrint: () => alert("data saved!!"),
  });

  return (
    <>
      <div id="stars"></div>
      <div className="APP">
        <Navbar></Navbar>

        <header className="App-header ">
          <p>WELCOME , {name} </p>
          <p>EC No. {EC}</p>
        </header>

        {/* Button trigger modal */}
        <div className="main-btn">
          <button
            type="button"
            className="btn btn-outline-light"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Tour Proposal Cum Requisition Form 
          </button>

          <div >
            <img className="photo1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/450px-Indian_Space_Research_Organisation_Logo.svg.png?20150629021610" alt="not found" />
          </div>

        </div>


        {/* Modal */}

        <div
          className="modal fade  modal-lg"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <form action="/" method="POST">
                <div className="modal-body paper-form ">
                  <div ref={componentPDF}>
                    <div className="modal-header">
                      <div className="form-photo">
                      <img className="photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/450px-Indian_Space_Research_Organisation_Logo.svg.png?20150629021610" alt="not found" />
                      </div>
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        Tour Proposal Cum Requisition Form 
                      </h1>
                    </div>

                    <div className="fill-form">
                      <section>
                        <h2 className="section-title">Personal Details</h2>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">E.C No. </label>
                            <input
                              required
                              type="text"
                              name="EmployeID"
                              value={EC}
                            />
                            {/* <button onClick={handleClick} className="btn btn-sm btn-primary my-1">fetch </button> */}
                          </div>
                          <div className="form-input form-input--text">
                            <label htmlFor="">Name</label>
                            <input type="text" name="fullname" value={name} />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">Designation </label>
                            <input type="text" name="Designation" />
                          </div>
                          <div className="form-input form-input--text">
                            <label htmlFor="">Funtional Designation</label>
                            <input type="text" name="funDesignation" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">Gender</label>
                            <input type="text" name="gender" value={gender} />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">Level as per 7th CPC / Pay</label>
                            <input
                              required
                              type="number"
                              name="LevelAsPer7thCPC_Pay"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">Group/Division</label>
                            <input type="text" name="Group_Division" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">
                              General/Project (if under Project, Name of the
                              Project to be mentioned){" "}
                            </label>
                            <input type="text" name="General_Project" />
                          </div>
                          <div className="form-input form-input--text">
                            <label htmlFor="">Line item Code</label>
                            <input type="text" name="LineItemCode" />
                            <label htmlFor="">Object Code</label>
                            <input type="text" name="objectCode" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">
                              Purpose of journey in details
                            </label>
                            <input
                              type="text"
                              name="PurposeOfJourneyInDetails"
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">
                              In case of lectures/seminars etc, if TA is
                              provided by the organisation invited, please
                              attach copy of invitation
                            </label>
                            <input type="text" name="TA" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">Freq. Flying Return No.</label>
                            <input type="text" name="FreqFlyingReturnNo" />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">PNR/Ticket No.</label>
                            <input type="text" name="PNR_TicketNo" />
                          </div>
                        </div>
                      </section>
                      <section>
                        <h2 className="section-title">Contact Details</h2>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">Residential Address</label>
                            <input
                              type="text"
                              name="ResidentialAddress"
                              value={Address}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">Telephone </label>
                            <input
                              required
                              type="number"
                              name="Telephone"
                              value={telephone}
                            />
                          </div>
                          <div className="form-input form-input--text">
                            <label htmlFor="">Mobile</label>
                            <input
                              required
                              type="number"
                              name="Mobile"
                              value={mobile}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-input form-input--text">
                            <label htmlFor="">NRSC </label>
                            <input type="text" name="NRSC" />
                          </div>
                          <div className="form-input form-input--text">
                            <label htmlFor="">E-mail ID</label>
                            <input type="email" name="Email" value={email} />
                          </div>
                        </div>
                        <div
                          style={{ width: "100%" }}
                          className="form-input form-input--text"
                        >
                          <label htmlFor="">Other</label>
                          <input type="text" name="other" />
                        </div>
                      </section>
                      <section>
                        <h2 className="section-title">Travel Programme</h2>
                        <div className="form-row ">
                          <div className="form-input form-input--text">
                            <label htmlFor="">From</label>
                            <input type="text" name="Travel_from" />
                          </div>
                          <div className="form-input form-input--text">
                            <label htmlFor="">To</label>
                            <input type="text" name="Travel_to" />
                          </div>
                          <div className="form-input">
                            <label htmlFor="">Preferred Time-Slot.</label>
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              name="Preferred_Time_Slot"
                              style={{ width: "200px" }}
                            >
                              <option selected="">NULL</option>
                              <option value={"00.00 Hrs to 03.00 Hrs"}>
                                00.00 Hrs to 03.00 Hrs
                              </option>
                              <option value={"03.00 Hrs to 06.00 Hrs"}>
                                03.00 Hrs to 06.00 Hrs
                              </option>
                              <option value={"06.00 Hrs to 09.00 Hrs"}>
                                06.00 Hrs to 09.00 Hrs
                              </option>
                              <option value={"09.00 Hrs to 12.00 Hrs"}>
                                09.00 Hrs to 12.00 Hrs
                              </option>
                              <option value={"12.00 Hrs to 15.00 Hrs"}>
                                12.00 Hrs to 15.00 Hrs
                              </option>
                              <option value={"15.00 Hrs to 18.00 Hrs"}>
                                15.00 Hrs to 18.00 Hrs
                              </option>
                              <option value={"18.00 Hrs to 21.00 Hrs"}>
                                18.00 Hrs to 21.00 Hrs
                              </option>
                              <option value={"21.00 Hrs to 24.00 Hrs"}>
                                21.00 Hrs to 24.00 Hrs
                              </option>
                            </select>
                          </div>
                          <div className="form-input">
                            <label htmlFor="">Departure date</label>
                            <input required type="date" name="Departure_Date" />
                          </div>
                          <div className="form-input form-input--text">
                            <label htmlFor="">Class</label>
                            <input type="text" name="Class" />
                          </div>
                        </div>

                        {elements}
                      </section>
                    </div>

                    <div className="section-subtitle">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I do here by certify that i have not drawn TA advance
                          to perform the above journey.
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer .flex-column">
                    <div className="footer-btns">
                      <button
                        className="btn btn-outline-primary"
                        onClick={createNewDiv}
                        ref={parentRef}
                      >
                        ADD ROW
                      </button>

                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <input type="reset" className="btn btn-secondary"></input>
                      <button type="submit" className="btn btn-success">
                        Submit
                      </button>
                      <button
                        onClick={genratePDF}
                        type="submit"
                        className="btn btn-success"
                      >
                        Print/PDF
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
