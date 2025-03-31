import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookList from './BookList';

describe('BookList', () => {
  // cria um array de livros ficticio
  const books = [
    { id: 1, title: 'Livro 1', author: 'Autor 1', genre: 'Gênero 1', readAt: '2024-06-11' },
    { id: 2, title: 'Livro 2', author: 'Autor 2', genre: 'Gênero 2', readAt: '2021-02-10' },
  ];
  // mocka a funcao removeBook
  const removeBook = jest.fn();

  it('should render booklist correctly', () => {
    // renderiza o componente BookList
    render(
      <Router>
        <BookList books={books} removeBook={removeBook} />
      </Router>
    );

    // verifica que os livros foram listados no document como esperado
    expect(screen.getByText('Lista de Livros')).toBeInTheDocument();
    expect(screen.getByText('Livro 1')).toBeInTheDocument();
    expect(screen.getByText('Autor(a): Autor 1')).toBeInTheDocument();
    expect(screen.getByText('Gênero: Gênero 1')).toBeInTheDocument();
    expect(screen.getByText('Lido em: 11/06/2024')).toBeInTheDocument();
    expect(screen.getByText('Livro 2')).toBeInTheDocument();
    expect(screen.getByText('Autor(a): Autor 2')).toBeInTheDocument();
    expect(screen.getByText('Gênero: Gênero 2')).toBeInTheDocument();
    expect(screen.getByText('Lido em: 10/02/2021')).toBeInTheDocument();
  });
});