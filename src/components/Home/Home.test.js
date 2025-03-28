import React from "react";
import { render, screen } from '@testing-library/react';
import Home from "./Home";

describe('Home', () =>  {
  it('should render homepage title', () => {
    // renderiza o componente Home
    render(<Home />);
    // busca pelo titulo na pagina
    const titleElement = screen.getByText('Diário de Leitura');
    // verifica que está no document
    expect(titleElement).toBeInTheDocument();
  })
})