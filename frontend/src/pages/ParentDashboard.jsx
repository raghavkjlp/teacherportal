import { useState, useEffect } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function ParentDashboard() {
  const [teachers, setTeachers] = useState([]);
  const [filters, setFilters] = useState({ city: '', state: '', nearArea: '', subject: '', tuitionMode: '' });

  const fetchTeachers = async () => {
    const query = new URLSearchParams(filters).toString();
    try {
      const res = await fetch(`${API}/api/users/teachers?${query}`);
      const data = await res.json();
      setTeachers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleFilterChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });
  
  const applyFilters = (e) => {
    e.preventDefault();
    fetchTeachers();
  };

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <h2>Find a Tutor</h2>
      <div className="card" style={{marginTop: '1rem'}}>
        <form onSubmit={applyFilters} style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
          <input className="form-control" type="text" name="city" placeholder="City" onChange={handleFilterChange} style={{flex: '1 1 140px'}} />
          <input className="form-control" type="text" name="state" placeholder="State" onChange={handleFilterChange} style={{flex: '1 1 140px'}} />
          <input className="form-control" type="text" name="nearArea" placeholder="Near Area" onChange={handleFilterChange} style={{flex: '1 1 140px'}} />
          <input className="form-control" type="text" name="subject" placeholder="Subject" onChange={handleFilterChange} style={{flex: '1 1 140px'}} />
          <select className="form-control" name="tuitionMode" onChange={handleFilterChange} style={{flex: '1 1 160px'}}>
            <option value="">Any Tuition Mode</option>
            <option value="home">Home Tuition Only</option>
            <option value="online">Online Tuition Only</option>
          </select>
          <button type="submit" className="btn btn-primary" style={{flex: '0 0 auto'}}>Search</button>
        </form>
      </div>

      <div className="grid-3" style={{ marginTop: '1.5rem' }}>
        {teachers.map(teacher => (
          <div key={teacher._id} className="card card-hover">
            {teacher.photo && (
              <img src={teacher.photo} alt={teacher.name} style={{width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '2px solid var(--primary)'}} />
            )}
            <h3 style={{color: 'var(--primary)', marginBottom: '0.5rem'}}>{teacher.name}</h3>
            <p className="text-sm"><strong>Education:</strong> {teacher.educationLevel}</p>
            <p className="text-sm"><strong>Subjects:</strong> {teacher.specializationSubjects.join(', ')}</p>
            <p className="text-sm"><strong>Location:</strong> {teacher.city}, {teacher.state} ({teacher.nearArea})</p>
            <p className="text-sm"><strong>Mode:</strong> <span style={{textTransform: 'capitalize'}}>{teacher.tuitionMode || 'Not specified'}</span></p>
            <p className="text-sm"><strong>Phone:</strong> {teacher.phoneNumber}</p>
            <button className="btn btn-primary" style={{marginTop: '1rem', width: '100%'}} onClick={() => alert(`Contacting ${teacher.name}... (Feature to be implemented)`)}>Contact Tutor</button>
          </div>
        ))}
        {teachers.length === 0 && <p className="text-muted">No tutors found matching your criteria.</p>}
      </div>
    </div>
  );
}

