import React, { useState, useEffect } from 'react';
import Book from '../Model/Book';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/book')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      Hi
    </div>
  );
}

export default BookList;
