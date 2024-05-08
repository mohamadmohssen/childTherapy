import React, { useState } from "react";
import "../css/registration.css";
import { Link } from "react-router-dom";
const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const [value, setValues] = useState({});

  return (
    <body className="body-registration">
      <div className="container container-registration">
        <header>Registration</header>
        <form action="" onSubmit={handleSubmit}>
          <div className="form first form-registration">
            <div className="details personal">
              <span className="title">Personal Details</span>
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="name">
                    <strong> Full Name </strong>
                  </label>
                  <input
                    onChange={handleInput}
                    name="Full Name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="mothername">
                    <strong> Mother Name</strong>
                  </label>
                  <input
                    onChange={handleInput}
                    name="MotherName"
                    type="text"
                    placeholder="Enter the Mother name"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    onChange={handleInput}
                    name="dob"
                    type="date"
                    placeholder="Enter birth date"
                    required
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="mobile">Mobile Number</label>
                  <input
                    onChange={handleInput}
                    name="phonenumber"
                    type="number"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="gender" onChange={handleInput} name="Gender">
                    Gender
                  </label>
                  <select required>
                    <option disabled selected>
                      Select gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="numberofmonth">Age in month</label>
                  <input
                    name="ageinmounth"
                    type="number"
                    placeholder="Age in month"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="details ID">
              <span className="title">Identity Details</span>
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="idType">ID Type</label>
                  <input
                    type="text"
                    name="idnumber"
                    placeholder="Enter ID type"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="idNumber">ID Number</label>
                  <input type="number" placeholder="Enter ID number" required />
                </div>
                <div className="input-field">
                  <label htmlFor="issuedAuthority">Issued Authority</label>
                  <input
                    name="idnumber2"
                    type="text"
                    placeholder="Enter issued authority"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="issuedState">Issued State</label>
                  <input
                    name="issued"
                    type="text"
                    placeholder="Enter issued state"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="issuedDate">Issued Date</label>
                  <input
                    name="issueddata"
                    type="date"
                    placeholder="Enter your issued date"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    name="exdate"
                    type="date"
                    placeholder="Enter expiry date"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button className="submit">
                  <span className="">Next</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
};

export default Registration;
