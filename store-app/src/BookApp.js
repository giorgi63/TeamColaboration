import React, {useState} from 'react'
import BookCreate from "./BookComponents/BookCreate"
import BookList from "./BookComponents/BookList"
import BooksContext from "./BookContext"

const BookApp = () => {
  const [books, setBooks] = useState([]);

  // The child component <BookCreate/> is creating a new book
  // And my BookApp component should know the name of this new book after creation
  // So to get the value from Child component
  // We will pass a callBack function as prop

  function createBook(title) {
    if (!title) {
      alert("Title is empty");
      return;
    }
    // As soon as we crate a new book, we should re-render everything.
    // Because we want to see the new book in our book list
    // So to trigger this re-render, we should update the state.
    setBooks([...books, { id: books.length + 1, title }]);
  }

  // Here we will now have a DeleteBook Callback function
  const deleteBook = (bookId) => {
    // This function will delete a book from our books list.
    // which ever I'll pass, it needs  to be passed-> bookTitleToDelete, this will create new array
    const updatedBooks = books.filter((book) => {
      return book.id !== bookId;
    });
    setBooks(updatedBooks);
  };

  const updateBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  var contextObjToShare = {
    deleteBookUsingContext: deleteBook,
    updateBook: updateBook,
  };

  //Context provides a way to share values like these between components
  //without having to explicitly pass a prop through every level of the tree.

  return (
    <div>
      <header>
        <BookCreate onCreate={createBook} />
      </header>
      <BooksContext.Provider value={contextObjToShare}>
        <BookList
          bookList={books}

          // updateBook={updateBook}
        />
      </BooksContext.Provider>
    </div>
  );
}

export default BookApp