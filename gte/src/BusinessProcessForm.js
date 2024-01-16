import React, { useState } from "react";

function FormComponent() {
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send data to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your business process description here..."
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default FormComponent;
