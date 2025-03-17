import { Link } from "react-router-dom";

const BookList = ({ books, removeBook }) => {

    return (
        <div className="centerDiv">
            <h1>Lista de Livros</h1>
            <ul className="bookList">
                {books.map((book, index) => (
                    <li className="bookItem" key={index}>
                        <Link to={`/bookform/${book.id}`}>{book.title} - {book.author} - {book.genre} - {new Date(book.date).toLocaleDateString("pt-BR")}</Link>
                        <button style={{marginLeft: '10px'}} onClick={() => removeBook(book.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;