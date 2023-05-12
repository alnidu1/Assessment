import React, { useState } from 'react';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/api/user/search/${searchTerm}`)
      .then(response => response.json())
      .then(data => setSearchResults(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
        <button type="submit">Search</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(user => (
            <tr key={user.id}>
              <td><a href={`/users/${user.id}`}>{user.firstname}</a></td>
              <td><a href={`/users/${user.id}`}>{user.lastname}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
