import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function User() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
      fetch(`http://localhost:8080/api/user/${id}`)
          .then(response => response.json())
          .then(data => setUser(data))
          .catch(error => console.error(error));
  }, [id]);

  if (!user) {
      return <div>Loading...</div>;
  }

  return (
      <div className="container">
          <h1>User Detail</h1>
          <div className="row">
              <div className="col-md-4 mb-3">
                  <div className="card">
                      <div className="card-body">
                          <h5 className="card-title">{user.firstname} {user.lastname}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">{user.email} </h6>
                          <h6>id:{user.id}</h6>
                          <img src={user.image_src} alt="My Image" width="200" height="300" />

                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
export default User;
