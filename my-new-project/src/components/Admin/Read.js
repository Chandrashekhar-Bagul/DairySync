import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Read() {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:9009/api/all');
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching clients:', response.status, response.statusText, errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // Filter out clients where role is 'Admin'
      const filteredClients = data.filter(client => client.role !== 'Admin');
      setClients(filteredClients);
    } catch (error) {
      console.error('Error fetching clients:', error);
      setError('Failed to load clients');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:9009/api/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error deleting client:', response.status, response.statusText, errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('Client deleted successfully');
      getClients(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting client:', error);
      setError('Failed to delete client');
    }
  };

  const handleEdit = (client) => {
    localStorage.setItem('editClient', JSON.stringify(client));
    navigate('/update');
  };

  const handleEntry = (client) => {
    localStorage.setItem('selectedClient', JSON.stringify(client));
    navigate('/entry');
  };

  const handleSearch = async () => {
    const trimmedSearchTerm = searchTerm.trim();
    if (!trimmedSearchTerm) {
      setError('Please enter a client name to search');
      return;
    }
  
    setLoading(true);
    setError('');
    try {
      const encodedSearchTerm = encodeURIComponent(trimmedSearchTerm);
      const response = await fetch(`http://localhost:9009/api/search/${encodedSearchTerm}`);
      if (!response.ok) {
        throw new Error('Client not found');
      }
      const client = await response.json();
      if (client.role === 'Admin') {
        setError('Admin user found, not displayed in client list');
        setClients([]);
      } else {
        setClients([client]); // Display only the searched client
      }
    } catch (error) {
      console.error('Error searching client:', error);
      setClients([]); // Clear the clients list if not found
      setError('Client not found');
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    fontFamily: "sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#f4f4f4",
    height: "100vh",
    display: "flex",
    width: "100%",
    flexDirection: "row",
  };

  const sidebarStyle = {
    backgroundColor: "#fff",
    width: "200px",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
  };

  const contentStyle = {
    flex: 1,
    padding: "20px",
  };

  const h3Style = {
    marginBottom: "20px",
    fontSize: "1.2rem",
    color: "#333",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
  };

  const liStyle = {
    marginBottom: "10px",
  };

  const aStyle = {
    display: "block",
    padding: "10px",
    textDecoration: "none",
    color: "#333",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  };

  const searchBarStyle = {
    marginBottom: '20px',
    padding: '10px',
    width: '100%',
    maxWidth: '400px',
    fontSize: '1rem',
  };

  const searchButtonStyle = {
    padding: '10px 20px',
    marginLeft: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <h3 style={h3Style}>Admin Panel</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <a href="/admin" style={aStyle}>Dashboard</a>
          </li>
          <li style={liStyle}>
            <a href="/read" style={aStyle}>Clients List</a>
          </li>
          <li style={liStyle}>
            <a href="#" style={aStyle}>Milk Collection</a>
          </li>
          <li style={liStyle}>
            <a href="/create" style={aStyle}>Register Admin</a>
          </li>
          <li style={liStyle}>
            <a href="#" style={aStyle}>Report</a>
          </li>
          <li style={liStyle}>
            <a href="#" style={aStyle}>Logout</a>
          </li>
        </ul>
      </div>
      <div style={contentStyle}>
        <h3>Clients List</h3>
        <div>
          <input
            type="text"
            placeholder="Search by client name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchBarStyle}
          />
          <button onClick={handleSearch} style={searchButtonStyle}>Search</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading ? (
          <p>Loading clients...</p>
        ) : (
          <div className="row mt-3 mb-3">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Milk Entry</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.password}</td>
                    <td>
                      <button className="btn btn-success" onClick={() => handleEntry(client)}>
                        Enter
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-success" onClick={() => handleEdit(client)}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(client.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
