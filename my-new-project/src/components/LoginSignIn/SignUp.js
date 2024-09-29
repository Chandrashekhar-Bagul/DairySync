import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateEmail, validatePassword } from './validation';

const styles = {
  body: {
    backgroundColor: '#f8f9fa',
    overflowX: 'hidden',
  },
  container: {
    background: '#fff',
    width: '450px',
    padding: '1.5rem',
    margin: '50px auto',
    borderRadius: '10px',
    boxShadow: '0 20px 35px rgba(0, 0, 1, 0.9)',
  },
  form: {
    margin: '0 2rem',
  },
  formTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '1.3rem',
    marginBottom: '0.4rem',
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
  inputGroup: {
    padding: '1% 0',
    position: 'relative',
    marginBottom: '30px',
  },
  inputIcon: {
    position: 'absolute',
    color: 'black',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  inputFocus: {
    backgroundColor: 'transparent',
    outline: 'transparent',
    borderBottom: '2px solid hsl(327, 90%, 28%)',
  },
  label: {
    color: '#757575',
    position: 'absolute',
    left: '1.5rem',
    top: '-1.3rem',
    cursor: 'auto',
    transition: '0.3s ease all',
    fontSize: '14px',
  },
  labelFocus: {
    top: '-2.5rem',
    color: 'hsl(327, 90%, 28%)',
    fontSize: '12px',
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
    transition: 'background-color 0.3s ease',
  },
  btnHover: {
    backgroundColor: '#07001f',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0 4rem',
    marginTop: '0.9rem',
    fontWeight: 'bold',
  },
  button: {
    color: 'rgb(125, 125, 235)',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  buttonHover: {
    textDecoration: 'underline',
    color: 'blue',
  },
  errorMessage: {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '0.25rem',
  },
  successMessage: {
    color: 'green',
    fontSize: '1rem',
    textAlign: 'center',
    marginTop: '1rem',
  },
};

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNo: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and include uppercase, number, and special character.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:9009/api/signUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const text = await response.text();
          console.error('Signup failed:', text);
          return;
        }

        console.log('Signup successful');

        // Reset form fields after successful signup
        setFormData({
          name: '',
          email: '',
          password: '',
          mobileNo: '',
          address: '',
        });

        // Redirect to the login page immediately
        navigate('/login');

      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.formTitle}>Sign Up</h1>
      <form method="post" onSubmit={handleSubmit} style={styles.form}>
        {/* Input fields */}
        <div style={styles.inputGroup}>
          <i className="fas fa-user" style={styles.inputIcon}></i>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <label htmlFor="name" style={styles.label}></label>
        </div>
        <div style={styles.inputGroup}>
          <i className="fas fa-envelope" style={styles.inputIcon}></i>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
            aria-describedby="emailError"
          />
          <label htmlFor="email" style={styles.label}></label>
          {errors.email && <p id="emailError" style={styles.errorMessage} role="alert">{errors.email}</p>}
        </div>
        <div style={styles.inputGroup}>
          <i className="fas fa-lock" style={styles.inputIcon}></i>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
            aria-describedby="passwordError"
          />
          <label htmlFor="password" style={styles.label}></label>
          {errors.password && <p id="passwordError" style={styles.errorMessage} role="alert">{errors.password}</p>}
        </div>
        <div style={styles.inputGroup}>
          <i className="fas fa-phone" style={styles.inputIcon}></i>
          <input
            type="text"
            name="mobileNo"
            id="mobileNo"
            placeholder="Mobile Number"
            value={formData.mobileNo}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <label htmlFor="mobileNo" style={styles.label}></label>
        </div>
        <div style={styles.inputGroup}>
          <i className="fas fa-home" style={styles.inputIcon}></i>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <label htmlFor="address" style={styles.label}></label>
        </div>
        
        <button
          type="submit"
          style={styles.btn}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.btnHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.btn.backgroundColor)}
        >
          Sign Up
        </button>
      </form>
      <div style={styles.links}>
        <p>Already Have an Account?</p>
        <a href="/login">
          <button
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.color = styles.buttonHover.color)}
            onMouseOut={(e) => (e.currentTarget.style.color = styles.button.color)}
          >
            Sign In
          </button>
        </a>
      </div>
    </div>
  );
}

export default SignUp;
