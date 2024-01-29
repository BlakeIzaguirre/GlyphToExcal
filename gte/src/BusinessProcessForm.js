import React, { useState } from "react";
import Axios from "axios";

function FormComponent() {
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description.trim() === "") {
      setError("Description is required");
    } else {
      setError("");
      // Send data to the backend
      axios
        .post(
          "https://api.openai.com/v1/engines/davinci-codex/completions",
          {
            prompt: description,
            max_tokens: 60,
          },
          {
            headers: {
              Authorization: `Bearer YOUR_OPENAI_KEY`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          // handle the response from the API
        })
        .catch((error) => {
          console.error("Error:", error);
          // handle the error
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Let's start with an overview of the business process.</h2>
      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter your business process description here..."
          rows="25"
          cols="150"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
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
