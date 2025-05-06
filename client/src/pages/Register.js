// src/pages/Register.js
import { useState } from 'react';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confirm) {
      alert('Passwords do not match!');
      return;
    }

    // Placeholder logic — will connect to API later
    console.log('Registering user:', { name, email, password });
    alert('Registration submitted (functionality to be added)');
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <label>Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={e => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirm}
          required
          onChange={e => setConfirm(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
