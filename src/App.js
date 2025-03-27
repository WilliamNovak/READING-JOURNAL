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
  // Armazena o estado da lista de livros, inializando com os livros importados
  const [books, setBooks] = useState(myBooks);
  // Armazena o estado que gerencia o id dos proximos livros
  const [bookId, setBookId] = useState(4);

  // Funcao para adicionar um novo livro a lista
  const addBook = (newBook) => {
    setBooks([...books, {...newBook, id: bookId}]); // Adiciona o livro na lista
    setBookId(bookId => bookId + 1); // Incremente o id
  };

  // Funcao para atualizar um livro na lista
  const updateBook = (updatedBook) => {
    // Quando o id corresponde ao id do livro sendo atualizado, atualiza o livro na lista
    setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
  };

  // Funcao para remover um livro da lista
  const removeBook = (id) => {
    // Filtra a lista somente com os livros que possuem id diferente do livro que esta sendo removido
    setBooks(books.filter(book => book.id !== id));
  };

  // Componente principal com navegacao
  // Exibe as paginas com base nas rotas definidas no sistema
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="textCenter">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/booklist" element={<BookList books={books} removeBook={removeBook}/>} />
            <Route path="/bookform" element={<BookForm addBook={addBook} updateBook={updateBook} books={books}/>} />
            <Route path="/bookform/:id" element={<BookForm addBook={addBook} updateBook={updateBook} books={books}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}