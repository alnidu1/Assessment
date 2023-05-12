import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";

function AddUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const[image_src, setImage]= useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, image_src };

    fetch("http://localhost:8080/api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
          <h1>Add User</h1>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                className="form-control"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                id="lastname"
                className="form-control"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image_src">Image</label>
              <input
                type="url"
                id="image_src"
                className="form-control"
                value={image_src}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddUser;
