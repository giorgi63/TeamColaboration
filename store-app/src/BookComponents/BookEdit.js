import React, { useState, useContext } from "react";
import BooksContext from "../BookContext";

function BookEdit({ book, setIsEdit }) {
  const value = useContext(BooksContext);

  const [newValue, setNewValue] = useState("");
  const handleEdit = () => {
    setIsEdit(false);
    value.updateBook(book.id, newValue);
  };

  function handleChange(eventDetails) {
    setNewValue(eventDetails.target.value);
  }
  
  return (
    <div className="book-edit-container">
      <div className="book-edit-title">{book.title}</div>
      <input className="book-edit-input" value={newValue} onChange={handleChange} />
      <button className="book-edit-button" onClick={handleEdit}>Save</button>
      <button
        className="book-edit-cancel"
        onClick={() => {
          setIsEdit(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
}

export default BookEdit;
