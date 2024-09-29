//src/components/Admin/Create.js
import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  // const [name, setName] = useState('');
  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:9595/user/add', {
  //     name,
  //     userName,
  //     password
  //   })
  //   .then(response => {
  //     console.log(response.data);
  //     navigate('/');
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // };

  return (
    <div className="container">
      <h2>Register Admin</h2>
      <form >
      {/* <form onSubmit={handleSubmit}> */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">Register</button>
      </form>
    </div>
  );
}
