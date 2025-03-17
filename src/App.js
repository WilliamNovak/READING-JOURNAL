import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import BookList from "./components/BookList/BookList"
import BookForm from "./components/BookForm/BookForm"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([
    {id: 1, title: 'Livro 1', author: 'Autor 1', genre: 'Terror', date: '2020-01-10'},
    {id: 2, title: 'Livro 2', author: 'Autor 2', genre: 'Ficção', date: '2018-06-09'},
    {id: 3, title: 'Livro 3', author: 'Autor 3', genre: 'Romance', date: '2021-11-27'}
  ]);

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