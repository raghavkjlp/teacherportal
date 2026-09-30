import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function Register() {
  const [searchParams] = useSearchParams();
  const initialRole = searchParams.get('role') || 'parent';
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: initialRole,
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    city: '',
    state: '',
    tuitionMode: 'both',
    nearArea: '',
    educationLevel: '',
    specializationSubjects: '',
    requiredSubjects: '',
    cgpa: '',
    photo: '',
    title: 'Mr.'
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData };
    if (data.role === 'teacher') {
      data.specializationSubjects = data.specializationSubjects.split(',').map(s => s.trim());
    } else if (data.role === 'parent') {
      data.requiredSubjects = data.requiredSubjects.split(',').map(s => s.trim());
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert('Registration successful! Please check your email.');
        navigate('/login');
      } else {
        const err = await res.json();
        alert(err.message);
      }
    } catch (error) {
      alert('Error registering');
    }
  };

  return (
    <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
      <h2>Register as a {formData.role === 'teacher' ? 'Teacher' : 'Parent'}</h2>
      <div style={{marginBottom: '1rem', marginTop: '1rem'}}>
        <button className={`btn ${formData.role === 'parent' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setFormData({...formData, role: 'parent'})} style={{marginRight: '0.5rem'}}>Parent</button>
        <button className={`btn ${formData.role === 'teacher' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setFormData({...formData, role: 'teacher'})}>Teacher</button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" name="state" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Preferred Tuition Mode</label>
          <select name="tuitionMode" value={formData.tuitionMode} onChange={handleChange}>
            <option value="both">Both (Online & Home)</option>
            <option value="home">Home Tuition Only</option>
            <option value="online">Online Tuition Only</option>
          </select>
        </div>

        {formData.role === 'teacher' && (
          <>
            <div className="form-group">
              <label>Title (Mr/Mrs/Ms/Dr)</label>
              <select name="title" value={formData.title} onChange={handleChange}>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
              </select>
            </div>
            <div className="form-group">
              <label>Near Area / Locality</label>
              <input type="text" name="nearArea" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Education Level (e.g. M.Sc Math)</label>
              <input type="text" name="educationLevel" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Specialization Subjects (comma separated)</label>
              <input type="text" name="specializationSubjects" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Passport Size Photograph</label>
              <input type="file" accept="image/*" required onChange={handlePhotoChange} />
            </div>
          </>
        )}

        {formData.role === 'parent' && (
          <>
            <div className="form-group">
              <label>Required Subjects / Class (comma separated)</label>
              <input type="text" name="requiredSubjects" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Student's Last Year % or CGPA</label>
              <input type="text" name="cgpa" required onChange={handleChange} />
            </div>
          </>
        )}

        <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Register</button>
      </form>
    </div>
  );
}
