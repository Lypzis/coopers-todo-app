import React, { useState } from "react";

const AddToDo = ({ addToDo }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Add a new to-do...'
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default AddToDo;
