import React from "react";

const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
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
  );
};

export default Application;
