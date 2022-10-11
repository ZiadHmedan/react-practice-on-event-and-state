import React, { useState } from "react";
import "./FormComponent.css";
export default function FormComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [education, setEducation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState("");

  //onChangeEvent
  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const lastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const educationChange = (e) => {
    setEducation(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  const experienceChange = (e) => {
    setExperience(e.target.value);
  };

  const addressChange = (e) => {
    setAddress(e.target.value);
  };

  //onSubmitEvent
  const formSubmitted = (e) => {
    e.preventDefault();
    const newUser = {
      FirstName: firstName,
      LastName: lastName,
      Education: education,
      Email: email,
      Phone: phone,
      Experience: experience,
      Address: address,
    };

    console.log(newUser);

    setFirstName("");
    setLastName("");
    setEducation("");
    setEmail("");
    setPhone("");
    setExperience("");
    setAddress("");
  };

  return (
    <>
      <form onSubmit={formSubmitted}>
        <div className="container">
          <div className="control">
            <label>FirstName :</label>
            <input type="text" value={firstName} onChange={firstNameChange} />
          </div>

          <div className="control">
            <label>LastName :</label>
            <input type="text" value={lastName} onChange={lastNameChange} />
          </div>

          <div className="control">
            <label>Education :</label>
            <input type="text" value={education} onChange={educationChange} />
          </div>

          <div className="control">
            <label>Email : </label>
            <input type="email" value={email} onChange={emailChange} />
          </div>

          <div className="control">
            <label>Phone :</label>
            <input type="number" value={phone} onChange={phoneChange} />
          </div>

          <div className="control">
            <label>Experience :</label>
            <input type="text" value={experience} onChange={experienceChange} />
          </div>

          <div className="control">
            <label>Address :</label>
            <input type="text" value={address} onChange={addressChange} />
          </div>

          <div className="control">
            <div></div>
            <button className="submitBtn">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}
