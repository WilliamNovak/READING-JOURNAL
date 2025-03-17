import React from "react";
import { Link } from "react-router-dom";

// Componente de navegacao entre as paginas
// utilizando rotas
const NavBar = () => {
    return (
        <nav>
           <ul className="nav-links">
              <li><Link to="/">Página Inicial</Link></li>
              <li><Link to="/about">Sobre</Link></li>
              <li><Link to="/booklist">Lista de Livros</Link></li>
              <li><Link to="/bookform">Cadastrar</Link></li>
           </ul>
        </nav>
    )
}

export default NavBar;