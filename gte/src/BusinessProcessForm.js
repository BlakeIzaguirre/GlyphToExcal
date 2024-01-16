import React, { useState } from "react";

function FormComponent() {
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send data to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Let's start with an overview of the business process.</h2>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your business process description here..."
        />
      </div>
      <div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormComponent;
