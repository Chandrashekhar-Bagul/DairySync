import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const styles = {
  container: {
    background: '#fff',
    width: '450px',
    padding: '1.5rem',
    margin: '50px auto',
    borderRadius: '10px',
    boxShadow: '0 20px 35px rgba(0, 0, 1, 0.9)',
  },
  formTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1.3rem',
    marginBottom: '0.4rem',
  },
  inputGroup: {
    padding: '1% 0',
    position: 'relative',
    marginBottom: '30px',
  },
  input: {
    color: 'inherit',
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid #757575',
    paddingLeft: '1.5rem',
    fontSize: '15px',
  },
  errorMessage: {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
  },
  btn: {
    fontSize: '1.1rem',
    padding: '8px 0',
    borderRadius: '5px',
    outline: 'none',
    border: 'none',
    width: '100%',
    background: 'rgb(125, 125, 235)',
    color: 'white',
    cursor: 'pointer',
    transition: '0.3s', // Adjust transition for better feedback
  },
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9009/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Store client email in localStorage
        localStorage.setItem('clientEmail', data.email);

        // Navigate based on the role
        if (data.role === 'CLIENT') {
          navigate('/client'); // Redirect to client page
        } else if (data.role === 'ADMIN') {
          navigate('/admin'); // Redirect to admin page
        } else {
          setError('Unrecognized role. Login failed.');
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.formTitle}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        {error && <p style={styles.errorMessage}>{error}</p>}
        <button type="submit" style={styles.btn}>Login</button>
      </form>
    </div>
  );
}

export default Login;
