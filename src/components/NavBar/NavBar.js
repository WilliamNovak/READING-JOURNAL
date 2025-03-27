import React from "react";
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './NavBar.css';
import { Link } from "react-router-dom";

// Componente de navegacao entre as paginas
// utilizando rotas
const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: "center" }}>
                <Box sx={{ display: "flex", gap: 3, alignItems: 'center' }}>
                    <Link to="/">
                        <IconButton aria-label="Página Inicial"><HomeIcon color="action"/></IconButton>
                    </Link>
                    <Link to="/about">
                        <Button color="inherit" className="navButton">Sobre</Button>
                    </Link>
                    <Link to="/booklist">
                        <Button color="inherit" className="navButton">Lista de Livros</Button>
                    </Link>
                    <Link to="/bookform">
                        <Button color="inherit" className="navButton">Cadastrar</Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;