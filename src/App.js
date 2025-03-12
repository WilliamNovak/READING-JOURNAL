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
    {id: 1, title: 'Livro 1', author: 'Autor 1', genre: 'Terror', date: '10/01/2020'},
    {id: 2, title: 'Livro 2', author: 'Autor 2', genre: 'Ficção', date: '09/06/2018'},
    {id: 3, title: 'Livro 3', author: 'Autor 3', genre: 'Romance', date: '27/11/2021'}
  ]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const removeBook = (index) => {
    setBooks(books.filter((_, b) => b !== index));
  };

  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/booklist" element={<BookList books={books} removeBook={removeBook}/>} />
          <Route path="/bookform" element={<BookForm/>} />
        </Routes>
      </div>
    </Router>
  );
}