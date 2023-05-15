import React, { useState, useEffect } from 'react';

function Home() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [updatedBook, setUpdatedBook] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/api/book')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  const handleUpdateBook = event => {
    event.preventDefault();
    fetch(`http://localhost:8080/api/book/${selectedBook.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedBook)
    })
      .then(response => response.json())
      .then(data => {
        setBooks(books.map(book => book.id === data.id ? data : book));
        setSelectedBook(null);
        setUpdatedBook({});
      })
      .catch(error => console.error(error));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  const handleSelectBook = book => {
    setSelectedBook(book);
    setUpdatedBook(book);
  };

  const handleDeleteBook = id => {
    fetch(`http://localhost:8080/api/book/${id}`, {
      method: 'DELETE'
    })
      .then(() => setBooks(books.filter(book => book.id !== id)))
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h1>Book List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary mr-2"
                  onClick={() => handleSelectBook(book)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteBook(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedBook && (
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Update Book</h5>
                <form onSubmit={handleUpdateBook}>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={updatedBook.title || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      name="price"
                      value={updatedBook.price || ''}
                      onChange={handleInputChange}
                    />
                  </div>
                 
                  <button type="submit" className="btn btn-primary mr-2">
                                        Update Book
                                    </button>
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedBook(null)}>
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;