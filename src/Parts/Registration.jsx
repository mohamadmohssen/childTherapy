import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/registration.css";

const Registration = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      full_name: values.full_name,
      mother_name: values.mother_name,
      DOB: values.DOB,
      phone_number1: values.phone_number1,
      phone_number2: values.phone_number2,
      gender: values.gender,
      age: values.age,
      val_id: values.val_id,
      city: values.city,
    };
    if (data.phone_number1.length < 8 || data.phone_number2.length < 8) {
      toast.error("Phone number must be at least 8 characters long.", {
        position: "top-center",
      });
      return; // Exit early if validation fails
    }
    try {
      const response = await axios.post("api/user/addUser", data);
      toast.success("Registration successful!", {
        position: "top-center",
        onClose: () => {
          console.log("Toast closed");
          navigate(
            `/test/Questions/${response.data.user_id}/${response.data.test_counter}`
          );
        },
        autoClose: 2000, // Close the toast after 2 seconds
      });
    } catch (error) {
      toast.error("Error submitting registration.", {
        position: "top-center",
      });
      console.error("Error submitting registration:", error);
    }
  };

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="body-registration">
      <ToastContainer />
      <div className="container container-registration">
        <header>Registration</header>
        <form onSubmit={handleSubmit}>
          <div className="form first form-registration">
            <div className="details personal">
              <span className="title">Personal Details</span>
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="full_name">
                    <strong> Full Name </strong>
                  </label>
                  <input
                    onChange={handleInput}
                    name="full_name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="mother_name">
                    <strong> Mother Name</strong>
                  </label>
                  <input
                    onChange={handleInput}
                    name="mother_name"
                    type="text"
                    placeholder="Enter the Mother name"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="DOB">Date of Birth</label>
                  <input
                    onChange={handleInput}
                    name="DOB"
                    type="date"
                    placeholder="Enter birth date"
                    required
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="phone_number1">Mobile Number</label>
                  <input
                    onChange={handleInput}
                    name="phone_number1"
                    type="number"
                    placeholder="Enter mobile number"
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="gender">Gender</label>
                  <select required onChange={handleInput} name="gender">
                    <option disabled selected value="">
                      Select gender
                    </option>
                    <option value={1}>Male</option>
                    <option value={0}>Female</option>
                  </select>
                </div>
                <div className="input-field">
                  <label htmlFor="age">Age in month</label>
                  <input
                    name="age"
                    type="number"
                    placeholder="Age in month"
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="details ID">
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="phone_number2">Mobile Number two</label>
                  <input
                    type="text"
                    name="phone_number2"
                    placeholder="Enter Second Mobile Number"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="val_id">ID Number</label>
                  <input
                    type="number"
                    placeholder="Enter ID number"
                    name="val_id"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="city">
                    <strong>City</strong>
                  </label>
                  <input
                    onChange={handleInput}
                    name="city"
                    type="text"
                    placeholder="Enter the city"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button className="submit" variant="primary" type="submit">
                  <span className="">Next</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
