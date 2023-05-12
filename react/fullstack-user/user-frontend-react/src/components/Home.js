import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserDetail({ user }) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`${user.firstname} ${user.lastname}`}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
          <h6>id:{user.id}</h6>
        </div>
      </div>
    );
  }
function Home() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [updatedUser, setUpdatedUser] = useState({});

    useEffect(() => {
        fetch('http://localhost:8080/api/user')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`http://localhost:8080/api/user/${selectedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(response => response.json())
            .then(data => {
                setUsers(users.map(user => user.id === data.id ? data : user));
                setSelectedUser(null);
                setUpdatedUser({});
            })
            .catch(error => console.error(error));
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    const handleSelectUser = user => {
        setSelectedUser(user);
        setUpdatedUser(user);
    };

    const handleDeleteUser = id => {
        fetch(`http://localhost:8080/api/user/${id}`, {
            method: 'DELETE'
        })
            .then(() => setUsers(users.filter(user => user.id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
        <h1>UserList</h1>
        <table className="table">
          <thead>
            <tr>
            <th>Image</th>

              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td><img src={user.image_src} width="75" height="75"></img></td>
                <td><a href={`/users/${user.id}`}>{user.firstname}</a></td>
                <td><a href={`/users/${user.id}`}>{user.lastname}</a></td>
                <td>{user.email}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={() => handleSelectUser(user)}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            {selectedUser && (
                <div className="row mt-3">
                    <div className="col-md-4 offset-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Update User</h5>
                                <form onSubmit={handleUpdateUser}>
                                    <div className="form-group">
                                        <label htmlFor="firstname">First Name</label>
                                        <input type="text" className="form-control" id="firstname" name="firstname" value={updatedUser.firstname || ''} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Last Name</label>
                                        <input type="text" className="form-control" id="lastname" name="lastname" value={updatedUser.lastname || ''} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>

                                        <input type="email" className="form-control" id="email" name="email" value={updatedUser.email || ''} onChange={handleInputChange} />
                                    </div>

                                    <button type="submit" className="btn btn-primary mr-2">
                                        Update User
                                    </button>
                                    <button type="button" className="btn btn-secondary" onClick={() => setSelectedUser(null)}>
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