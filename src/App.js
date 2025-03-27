import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
//import myBooks from "./assets/books";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

export default function App() {
  // Armazena o estado da lista de livros, inializando com os livros importados
  const [books, setBooks] = useState([]);
  // Armazena o estado que gerencia o id dos proximos livros
  const [bookId, setBookId] = useState(0);

  useEffect(() => {
    // Busca os livros da API quando o componente é montado
    axios.get("http://localhost:3000/books")
      .then((response) => {
        setBooks(response.data);
        // Define o próximo ID disponível com base nos dados da API
        if (response.data.length > 0) {
          const maxId = Math.max(...response.data.map(book => book.id));
          setBookId(maxId + 1);
        } else {
          setBookId(1); // Quando não há livros, comece com o ID 1
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar livros da API:", error);
      });
  }, []);

  // Funcao para adicionar um novo livro a lista
  const addBook = (newBook) => {
    // Envia o livro para adicionar na API
    axios.post("http://localhost:3000/books", newBook)
      .then((response) => {
        setBookId(bookId => bookId + 1); // Incrementa o id
        setBooks([...books, {id: bookId, ...response.data}]); // Adiciona o livro na lista local
      })
      .catch((error) => {
        console.error("Erro ao adicionar livro na API:", error);
      });
  };

  // Funcao para atualizar um livro na lista
  const updateBook = (updatedBook) => {
    // Atualiza o livro na API
    axios.put("http://localhost:3000/books/", updatedBook)
      .then(() => {
        // Atualiza o livro na lista local
        setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
      })
      .catch((error) => {
        console.error("Erro ao atualizar livro na API:", error);
      });
  };

  // Funcao para remover um livro da lista
  const removeBook = (id) => {
    // Remove o livro da API
    axios.delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        // Filtra a lista somente com os livros que possuem id diferente do livro que esta sendo removido
        setBooks(books.filter(book => book.id !== id));
        // Quando o livro removido for o ultimo da lista (maior id) usa o mesmo id no proximo livro cadastrado
        if (id === bookId - 1) { setBookId(bookId => bookId - 1); }
      })
      .catch((error) => {
        console.error("Erro ao remover livro da API:", error);
      });
  };

  // Componente principal com navegacao
  // Exibe as paginas com base nas rotas definidas no sistema
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </div>
  );
}