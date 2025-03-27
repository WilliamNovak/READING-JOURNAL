import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";

const BookForm = ({ addBook, updateBook, books }) => {
  // Verifica se o id foi passado na URL por parametro e obtem seu valor
  const { id } = useParams();
  // Utiliza useNavigate para navegar entre as paginas
  const navigate = useNavigate();

  // Inicializa objeto de um novo livro
  const newBook = {
    title: "",
    author: "",
    genre: "",
    date: "",
  };

  // Busca o livro pelo id, quando informado, para edicao
  const existingBook = books.find((book) => book.id === Number(id));
  // Define o estado do formulario utilizando o livro existente para edicao ou um novo livro
  const [book, setBook] = useState(existingBook || newBook);

  // Utiliza useEffect para atualizar o estado do formulario quando estiver atualizando um livro
  useEffect(() => {
    if (existingBook) {
      setBook(existingBook);
    }
  }, [existingBook]);

  // Funcao para atualizar o estado do livro ao atualizar campos do formulario
  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  // Funcao que executa ao submitar o formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // previne o comportamento padrao

    // Verifica se todos campos foram informados
    if (!book.title || !book.author || !book.genre || !book.date) {
      alert("Todos os campos devem ser informados!");
      return;
    }

    // Verifica se a data é valida
    const selectedDate = new Date(book.date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (selectedDate > currentDate) {
      alert("A data do livro não pode ser maior que a atual!");
      return;
    }

    if (id) {
      // Atualiza o livro quando está editando
      updateBook(book);
    } else {
      // Adiciona o novo livro quando está cadastrando
      addBook(book);
    }
    // Retorna para listagem de livros
    navigate("/booklist");
  };

  // Componente que retorna o formulario na pagina
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
    >
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          maxWidth: "400px",
          width: "100%",
          bgcolor: "white",
          borderRadius: "1.5rem"
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          {id ? "Editar Livro" : "Cadastrar"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Título"
            name="title"
            value={book.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Autor(a)"
            name="author"
            value={book.author}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Gênero"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Lido em"
            name="date"
            type="date"
            value={book.date}
            onChange={handleChange}
            fullWidth
            margin="normal"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
          <Box display="flex" justifyContent="center" marginTop="1rem" gap={4}>
            <Button
              variant="contained"
              color="error"
              sx={{
                borderRadius: "1.5rem",
                width: "150px"
              }}
              onClick={() => navigate(-1)}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{
                borderRadius: "1.5rem",
                width: "150px"
              }}
              type="submit"
            >
              {id ? "Salvar" : "Adicionar"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default BookForm;