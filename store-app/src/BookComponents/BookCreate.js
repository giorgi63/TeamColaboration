import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [bookTitle, setBookTitle] = useState("");

  function handleChange(eventDetails) {
    setBookTitle(eventDetails.target.value);
  }

  function handleSubmit(eve) {
    eve.preventDefault();
    onCreate(bookTitle);
    setBookTitle("");
  }

  return (
    <div className="book-create-container">
      <h3 style={{ color: "white", marginBottom: "100px" }}>  </h3>
      <h1 className="book-create-title"> Add Book Title</h1>


      <form onSubmit={handleSubmit}>
        <input
          className="book-create-input"
          value={bookTitle}
          onChange={handleChange}
        ></input>
        <button className="book-create-button">Submit</button>
      </form>

    </div>
    
  );
}

export default BookCreate;
