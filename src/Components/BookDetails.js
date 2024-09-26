import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../services/api';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const data = await getBookById(id);
        setBook(data);
      } catch (error) {
        console.error('Erro ao buscar o livro:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Gênero:</strong> {book.genre}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
