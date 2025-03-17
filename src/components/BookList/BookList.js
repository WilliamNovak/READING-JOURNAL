import { Link } from "react-router-dom";

const BookList = ({ books, removeBook }) => {

    return (
        <div>
            <h1>Lista de Livros</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <Link to={`/bookform/${book.id}`}>{book.title} - {book.author} - {book.genre} - {new Date(book.date).toLocaleDateString("pt-BR")}</Link>
                        <button onClick={() => removeBook(book.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;