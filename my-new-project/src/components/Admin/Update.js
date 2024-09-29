// src/components/Admin/Update.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Update() {
  const navigate = useNavigate();
  const [client, setClient] = useState({
    id: '',
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

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

  useEffect(() => {
    const storedClient = JSON.parse(localStorage.getItem('editClient'));
    if (storedClient) {
      setClient(storedClient);
    } else {
      navigate('/read'); // Redirect if no client data is found
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:9009/api/clients/${client.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(client),
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error updating client:', response.status, response.statusText, errorText);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('Client updated successfully');
      localStorage.removeItem('editClient');
      navigate('/read'); // Redirect after successful update
    } catch (error) {
      console.error('Error updating client:', error);
      setError('Failed to update client');
    }
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
        <div className="container mt-3 mb-3">
          <h3>Update Client</h3>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={client.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={client.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={client.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>    
  );
}
