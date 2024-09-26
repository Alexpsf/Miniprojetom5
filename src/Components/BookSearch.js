import React, { useState } from 'react';
import { searchBooks } from '../services/api';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const results = await searchBooks(query);
      setBooks(results);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  return (
    <div className="book-search">
      <h2>Buscar Livros</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Busque por título ou autor"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="book-results">
        {books.length === 0 && <p>Nenhum resultado encontrado</p>}
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
