import React, { useState } from 'react';

function FormComponent() {
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send data to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;