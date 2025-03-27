import { Link } from "react-router-dom";
import { Card, CardContent, Grid, IconButton, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const BookList = ({ books, removeBook }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // Componente que recebe o array de livro e exibe em listagem na pagina
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="2rem"
    >
      <Typography variant="h4" fontFamily="Bungee Tint" margin={3} gutterBottom>
        Lista de Livros
      </Typography>
      <Box
        sx={{
          overflowY: "auto", // Adiciona rolagem vertical
          maxHeight: "70vh", // Altura máxima da lista de livros
          width: "75%",
        }}
      >
        <Grid container spacing={isMobile ? 1 : 2}>
          {books.map((book) => (
            <Grid item size={isMobile ? 12 : 6} key={book.id}>
              <Card
                sx={{
                  position: "relative",
                  borderRadius: "0.5rem",
                  margin: "0.2rem",
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Autor(a): {book.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Gênero: {book.genre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lido em:{" "}
                    {new Date(book.date).toLocaleDateString("pt-BR", {
                      timeZone: "UTC",
                    })}
                  </Typography>
                  <IconButton
                    component={Link}
                    to={`/bookform/${book.id}`}
                    sx={{ position: "absolute", top: 8, right: 48 }}
                  >
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton
                    onClick={() => removeBook(book.id)}
                    sx={{ position: "absolute", top: 8, right: 8 }}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BookList;