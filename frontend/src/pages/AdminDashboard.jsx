import { useState, useEffect } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || user.role !== 'admin') {
      navigate('/');
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API}/api/users/all`);
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [navigate]);

  const verifyUser = async (id) => {
    try {
      const res = await fetch(`${API}/api/users/${id}/verify`, { method: 'PUT' });
      if (res.ok) {
        setUsers(users.map(u => u._id === id ? { ...u, isVerified: true } : u));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div className="card" style={{marginTop: '1rem', overflowX: 'auto'}}>
        <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
          <thead>
            <tr style={{borderBottom: '2px solid var(--border)'}}>
              <th style={{padding: '1rem'}}>Name</th>
              <th style={{padding: '1rem'}}>Email</th>
              <th style={{padding: '1rem'}}>Phone</th>
              <th style={{padding: '1rem'}}>Role</th>
              <th style={{padding: '1rem'}}>City/State</th>
              <th style={{padding: '1rem'}}>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u._id} style={{borderBottom: '1px solid var(--border)'}}>
                <td style={{padding: '1rem'}}>{u.name}</td>
                <td style={{padding: '1rem'}}>{u.email}</td>
                <td style={{padding: '1rem'}}>{u.phoneNumber}</td>
                <td style={{padding: '1rem'}}>
                  <span style={{
                    padding: '0.25rem 0.5rem', 
                    borderRadius: '4px', 
                    backgroundColor: u.role === 'teacher' ? '#e0e7ff' : u.role === 'parent' ? '#d1fae5' : '#fee2e2',
                    color: u.role === 'teacher' ? '#3730a3' : u.role === 'parent' ? '#065f46' : '#991b1b',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase'
                  }}>
                    {u.role}
                  </span>
                </td>
                <td style={{padding: '1rem'}}>{u.city}, {u.state}</td>
                <td style={{padding: '1rem'}}>
                  {u.isVerified ? (
                    <span style={{ color: 'green', fontWeight: 'bold' }}>Verified</span>
                  ) : (
                    <button className="btn btn-primary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }} onClick={() => verifyUser(u._id)}>Verify</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
