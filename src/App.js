import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import myBooks from "./assets/books";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState(myBooks);

  const [bookId, setBookId] = useState(4);

  const addBook = (newBook) => {
    setBooks([...books, {...newBook, id: bookId}]);
    setBookId(bookId => bookId + 1);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
  };

  const removeBook = (index) => {
    setBooks(books.filter(book => book.id !== index));
  };

  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/booklist" element={<BookList books={books} removeBook={removeBook}/>} />
          <Route path="/bookform" element={<BookForm addBook={addBook} updateBook={updateBook} books={books}/>} />
          <Route path="/bookform/:id" element={<BookForm addBook={addBook} updateBook={updateBook} books={books}/>} />
        </Routes>
      </div>
    </Router>
  );
}