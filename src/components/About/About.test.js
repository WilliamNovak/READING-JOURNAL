import React from "react";
import { render, screen } from '@testing-library/react';
import About from "./About";

describe('About', () =>  {
  it('should render about messages', () => {
    // renderiza o componente About
    render(<About />);
    // busca pelo titulo e paragrafos na pagina
    const titleElement = screen.getByText('Sobre');
    const firstParagraph = screen.getByText('Esta é uma aplicação para um CRUD de um Reading Journal.');
    const secondParagraph = screen.getByText('Este projeto foi elaborado na disciplina Desenvolvimento de Sistemas Frontend do Curso de Graduação Online da PUCRS.');
    // verifica que estao no document
    expect(titleElement).toBeInTheDocument();
    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
  })
})