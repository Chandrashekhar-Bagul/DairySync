// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import HomePage from './components/Home/HomePage';
import SignUp from './components/LoginSignIn/SignUp';
import Feedback from './components/Customer/Feedback';
import History from './components/Customer/History';
import Transaction from './components/Customer/Transaction';
import AdminHome from './components/Admin/Admin Home';
import Read from './components/Admin/Read';
import Create from './components/Admin/Create';
import LoginPage from './components/LoginSignIn/LoginPage';
import Client from './components/Customer/Client';
import Update from './components/Admin/Update';
import MilkEntryForm from './components/Admin/MilkEntryForm';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} /> {/* Set HomePage as the default route */}
          <Route path="home" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="client" element={<Client />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="history" element={<History />} />
          <Route path="transaction" element={<Transaction />} />
          
        </Route>
      </Routes>
      {/* Admin Panel */}
      <Routes>
          <Route path="admin" element={<AdminHome />} />
          <Route path="read" element={<Read />} />
          <Route path="create" element={<Create />} />
          <Route path="update" element={<Update />} />
          <Route path="entry" element={<MilkEntryForm />} />
      </Routes>
    </Router>
  );
}

export default Routing;
