import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookForm from './BookForm';

// mocka as funcoes originais
const mockAddBook = jest.fn();
const mockUpdateBook = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: () => ({ id: null })
}));

describe('BookForm', () => {
  // cria um array de livros ficticio
  const books = [
    { id: 1, title: 'Livro 1', author: 'Autor 1', genre: 'Gênero 1', readAt: '2024-06-11' },
    { id: 2, title: 'Livro 2', author: 'Autor 2', genre: 'Gênero 2', readAt: '2021-02-10' },
  ];

  it('should render book form correctly', () => {
    // renderiza o componente BookForm
    render(
      <Router>
        <BookForm addBook={mockAddBook} updateBook={mockUpdateBook} books={books} />
      </Router>
    );
    // verifica que o titulo e inputs estao no document
    expect(screen.getByText('Cadastrar')).toBeInTheDocument();
    expect(screen.getByLabelText('Título')).toBeInTheDocument();
    expect(screen.getByLabelText('Autor(a)')).toBeInTheDocument();
    expect(screen.getByLabelText('Gênero')).toBeInTheDocument();
    expect(screen.getByLabelText('Lido em')).toBeInTheDocument();
  });

  it('should add a new book on form submit', () => {
    // renderiza o componente BookForm
    render(
      <Router>
        <BookForm addBook={mockAddBook} updateBook={mockUpdateBook} books={books} />
      </Router>
    );
    // simula o cadastro de um livro
    fireEvent.change(screen.getByLabelText('Título'), { target: { value: 'Novo Livro' } });
    fireEvent.change(screen.getByLabelText('Autor(a)'), { target: { value: 'Novo Autor' } });
    fireEvent.change(screen.getByLabelText('Gênero'), { target: { value: 'Novo Gênero' } });
    fireEvent.change(screen.getByLabelText('Lido em'), { target: { value: '2023-03-01' } });
    fireEvent.click(screen.getByText('Adicionar'));
    // verifica que o metodo que adiciona o livro foi chamado da forma esperada
    expect(mockAddBook).toHaveBeenCalledWith({
      title: 'Novo Livro',
      author: 'Novo Autor',
      genre: 'Novo Gênero',
      readAt: '2023-03-01',
    });
    // verifica que o metodo de navegacao foi chamado como esperado
    expect(mockNavigate).toHaveBeenCalledWith('/booklist');
  });

  it('should show an alert if any input is empty', () => {
    // mocka o alerta na pagina
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    // renderiza o componente BookForm
    render(
      <Router>
        <BookForm addBook={mockAddBook} updateBook={mockUpdateBook} books={books} />
      </Router>
    );

    // simula uma tentativa de adicionar um livro sem preencher os campos
    fireEvent.click(screen.getByText('Adicionar'));
    // verifica que o alerta foi chamado como esperado
    expect(alertMock).toHaveBeenCalledWith('Todos os campos devem ser informados!');
    // restaura o alerta mockado
    alertMock.mockRestore();
  });
});