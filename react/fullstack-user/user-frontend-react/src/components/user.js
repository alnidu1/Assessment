import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
   <h1>This is user</h1>
  );
}

export default User;
