import { useState } from "react";

const BookList = () => {
    const [books, setBooks] = useState([]);

    return (
        <div>
            <h1>Lista de Livros</h1>
            <ul>
                {books.map((book, index) => (
                    <li>{book.title} - {book.author} - {book.genre} - {book.date} <button>Excluir</button></li>
                ))}
            </ul>
        </div>
    );
}
  
export default BookList;