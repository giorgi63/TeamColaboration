import React from "react";
import BookShow from "./BookShow";

function BookList({ bookList, updateBook }) {
  return (
    <>
    <div className="book-list-container">
      {bookList.map((book, index) => {
        return (
          <div className="book-list-item" key={index}>
            <BookShow book={book} updateBook={updateBook} />
            
          </div>

        );
      })}
    </div>
    <h3 style={{ color: "white", marginBottom: "160px" }}>  </h3>

     </>
  );
}

export default BookList;
