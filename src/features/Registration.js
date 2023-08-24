import Navbar from "../components/Navbar";
import DatePicker from "react-date-picker";
import { useState, useEffect, useMemo } from "react";
import "../sass/registration.scss";

import States from "../moked_data/states.json";

import { Modal } from "stan-modal-v2";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

function Registration() {
  const states = useMemo(() => States, []);

  //User Table
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  //Input States
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState(
    new Date().toJSON().substring(0, 10)
  );
  const [startdate, setStartdate] = useState(
    new Date().toJSON().substring(0, 10)
  );
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [department, setDepartment] = useState("");

  const modalTrigger = document.getElementById("trigger");

  //form submition

  const handleSubmit = (e) => {
    e.preventDefault();
    //obj
    let user = {
      firstname,
      lastname,
      birthdate,
      startdate,
      street,
      city,
      state,
      zipcode,
      department,
    };
    setUsers([...users, user]);
    modalTrigger.click();
    console.log(user);
  };

  //Form Saving

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const content = (
    <div className="container">
      <Navbar />
      <main>
        <div className="main">
          <div className="title">
            <h2>Employee Registration</h2>
          </div>
          <form action="#" id="create-employee" onSubmit={handleSubmit}>
            <div className="fields">
              <label htmlFor="first-name">First Name</label>
              <input
                className="input"
                required
                type="text"
                id="first-name"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />

              <label htmlFor="date-of-birth">Date of Birth</label>
              <DatePicker onChange={setBirthdate} value={birthdate} />

              <label htmlFor="last-name">Last Name</label>
              <input
                className="input"
                required
                type="text"
                id="last-name"
                onChange={(e) => setLastname(e.target.value)}
              />

              <label htmlFor="start-date">Start Date</label>

              <DatePicker required onChange={setStartdate} value={startdate} />
            </div>

            <div className="adress">
              <label htmlFor="street" aria-required>
                Street
              </label>
              <input
                className="input"
                required
                id="street"
                type="text"
                onChange={(e) => setStreet(e.target.value)}
              />

              <label htmlFor="city">City</label>
              <input
                className="input"
                required
                id="city"
                type="text"
                onChange={(e) => setCity(e.target.value)}
              />

              <label htmlFor="state">State</label>
              <select
                name="state"
                required
                id="state"
                onChange={(e) => setState(e.target.value.name)}
              >
                {states.map((state, index) => {
                  return (
                    <option value={state} key={index}>
                      {state.name}
                    </option>
                  );
                })}
              </select>

              <label htmlFor="zip-code">Zip Code</label>
              <input
                className="input no-spinner"
                required
                id="zip-code"
                type="number"
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>

            <div className="select">
              <label htmlFor="department">Department</label>
              <select
                name="department"
                id="department"
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
              </select>
            </div>

            <button className="btn-save" type="submit">
              Save
            </button>
          </form>
          <Modal
            triggerElement={
              <button id="trigger" type="submit">
                Save
              </button>
            }
            content={<h4>Employee Successfully Added</h4>}
            closeText="[X]"
          />
        </div>
      </main>
    </div>
  );
  return content;
}

export default Registration;
