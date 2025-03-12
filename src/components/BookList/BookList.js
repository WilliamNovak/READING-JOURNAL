const BookList = ({ books, removeBook }) => {

    return (
        <div>
            <h1>Lista de Livros</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        {book.title} - {book.author} - {book.genre} - {book.date}
                        <button onClick={() => removeBook(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
  
export default BookList;