import React from "react";
import { Container, Box, Typography } from "@mui/material";

// Pagina Inicial do Sistema
const Home = () => {
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
            <Typography variant="h2">
              Diário de Leitura
            </Typography>
          </Box>
        </Container>
    );
}
  
export default Home;