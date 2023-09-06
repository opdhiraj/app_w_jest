import React from "react";
import Tree from "./../../assets/tree.jpg";
const Application = () => {
  return (
    <>
      <h1>Job Application form</h1>
      <h2>Section 1</h2>
      <p>All feilds are mandatory</p>
      <span title="close">X</span>
      <img src={Tree} alt="Tree with sun" />
      <div data-testid="custom-element">Custom Html Element</div>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" placeholder="Fullname" value={"om"} onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="job-location"> Job Location: </label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="IN">INDIA</option>
            <option value="US">US a country</option>
            <option value="CA">canada</option>
            <option value="AU">Australia</option>
            <option value="EU">Europe</option>
            <option value="AF">Africa</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree TNC
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Application;
