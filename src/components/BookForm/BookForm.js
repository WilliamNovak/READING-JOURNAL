import { useState } from "react";

const BookForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        gender: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((data) => ({
            ...data,
            [name]: value
        }))
    }

    return (
        <div>
            <h1>Cadastrar</h1>
            <form>
                <label>Título: <input type="text" name="title" value={formData.title} onChange={handleChange}/></label><br></br>
                <label>Autor(a): <input type="text" name="author" value={formData.author} onChange={handleChange}/></label><br></br>
                <label>Gênero: <input type="text" name="gender" value={formData.gender} onChange={handleChange}/></label><br></br>
                <label>Data: <input type="date" name="date" value={formData.date} onChange={handleChange}/></label><br></br>
                <button>Adicionar</button>
            </form>
        </div>
    );
}
  
export default BookForm;