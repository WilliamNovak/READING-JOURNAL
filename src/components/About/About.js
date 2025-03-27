import React from "react";
import { Typography, Container, Box } from "@mui/material";

// Página ilustrativa com informacoes sobre o sistema
const About = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh"
        }}
      >
        <Typography variant="h2" fontFamily="Bungee Tint" gutterBottom>
          Sobre
        </Typography>
        <Typography variant="body1"
          sx={{
            maxWidth: "600px",
            marginTop: "0.5rem"
          }}
        >
          Esta é uma aplicação para um CRUD de um Reading Journal.
        </Typography>
        <Typography variant="body1"
          sx={{
            maxWidth: "600px",
            marginTop: "0.5rem"
          }}
        >
          Este projeto foi elaborado na disciplina Desenvolvimento de Sistemas
          Frontend do Curso de Graduação Online da PUCRS.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
