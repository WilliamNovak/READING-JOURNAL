import React from "react";
import { AppBar, Toolbar, Button, IconButton, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from "react-router-dom";

// Componente de navegacao entre as paginas
// utilizando rotas
const NavBar = () => {
    const location = useLocation();

    const getButtonColor = (path) => {
        return location.pathname === path ? 'white' : 'gray';
    }

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: "center" }}>
                <Box sx={{ display: "flex", gap: 3, alignItems: 'center' }}>
                    <Link to="/">
                        <IconButton aria-label="Página Inicial"><HomeIcon  color={getButtonColor('/')}/></IconButton>
                    </Link>
                    <Link to="/about">
                        <Button color={getButtonColor('/about')} style={{fontWeight: '600'}}>Sobre</Button>
                    </Link>
                    <Link to="/booklist">
                        <Button color={getButtonColor('/booklist')} style={{fontWeight: '600'}}>Lista de Livros</Button>
                    </Link>
                    <Link to="/bookform">
                        <Button color={getButtonColor('/bookform')} style={{fontWeight: '600'}}>Cadastrar</Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;