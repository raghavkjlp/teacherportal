import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        if (data.user.role === 'admin') navigate('/admin');
        else if (data.user.role === 'parent') navigate('/parent');
        else navigate('/');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <div className="card" style={{maxWidth: '400px', margin: '0 auto'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{marginTop: '1.5rem'}}>
        <div className="form-group">
          <label>Email</label>
          <input type="text" name="email" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" required onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Login</button>
      </form>
    </div>
  );
}
