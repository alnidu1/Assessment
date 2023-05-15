import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';

function AddBook() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, price };

    fetch("http://localhost:8080/api/book/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((response) => response.json())
      .then(() => {
        window.location.href = "/";
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Card>
        <Card.Header>
          <h1>Add Book</h1>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddBook;
