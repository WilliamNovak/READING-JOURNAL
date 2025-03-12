import { useState } from "react";

const BookForm = ({ addBook }) => {
    const newBook = {
        title: '',
        author: '',
        genre: '',
        date: ''
    }
    const [book, setBook] = useState(newBook);

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(book);
        setBook(newBook);
    }

    return (
        <div>
            <h1>Cadastrar</h1>
            <form onSubmit={handleSubmit}>
                <label>Título: <input type="text" name="title" value={book.title} onChange={handleChange}/></label><br></br>
                <label>Autor(a): <input type="text" name="author" value={book.author} onChange={handleChange}/></label><br></br>
                <label>Gênero: <input type="text" name="genre" value={book.genre} onChange={handleChange}/></label><br></br>
                <label>Data: <input type="date" name="date" value={book.date} onChange={handleChange}/></label><br></br>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}
  
export default BookForm;