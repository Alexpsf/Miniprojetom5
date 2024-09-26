import React, { useEffect, useState } from 'react';
import { getSuggestions } from '../services/api';

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const data = await getSuggestions();
        setSuggestions(data);
      } catch (error) {
        console.error('Erro ao carregar as sugestões:', error);
      }
    };

    fetchSuggestions();
  }, []);

  return (
    <div className="suggestions">
      <h2>Sugestões de Livros LGBT</h2>
      <div className="suggestion-list">
        {suggestions.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p><strong>Autor:</strong> {book.author}</p>
            <p><strong>Gênero:</strong> {book.genre}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
