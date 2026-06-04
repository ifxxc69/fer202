import React, { useMemo, useState } from 'react';
import { stars } from '../data';

export default function Start() {
  const [q, setQ] = useState('');
  const [gender, setGender] = useState('All');
  const [year, setYear] = useState('All');

  const extractYear = (dob) => {
    if (!dob) return null;
    // Try native parse first
    const n = new Date(dob);
    if (!Number.isNaN(n.getFullYear()) && n.getFullYear() > 1000) return n.getFullYear();
    // Fallback: find 4-digit year in string
    const m = String(dob).match(/(19|20)\d{2}/);
    return m ? parseInt(m[0], 10) : null;
  };

  const years = useMemo(() => {
    const s = new Set();
    stars.forEach((d) => {
      const y = extractYear(d.Dob);
      if (y) s.add(y);
    });
    return Array.from(s).sort((a, b) => b - a);
  }, []);

  const filtered = stars.filter((d) => {
    if (q && !d.FullName.toLowerCase().includes(q.trim().toLowerCase())) return false;
    if (gender !== 'All') {
      const isMale = !!d.Male;
      if (gender === 'Male' && !isMale) return false;
      if (gender === 'Female' && isMale) return false;
    }
    if (year !== 'All') {
      const y = extractYear(d.Dob);
      if (!y || String(y) !== year) return false;
    }
    return true;
  });

  return (
    <div>
      <h3 className="my-3">Stars List</h3>

      <div className="d-flex gap-2 mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search by full name..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select className="form-select" value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="All">All Years</option>
          {years.map((y) => (
            <option key={y} value={String(y)}>{y}</option>
          ))}
        </select>
      </div>

      <div className="row">
        {filtered.map((d) => (
          <div className="col-md-4 mb-3" key={d.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{d.FullName}</h5>
                <p className="mb-1"><strong>ID:</strong> {d.id}</p>
                <p className="mb-1"><strong>Gender:</strong> {d.Male ? 'Male' : 'Female'}</p>
                <p className="mb-1"><strong>DOB:</strong> {d.Dob || 'N/A'}</p>
                <p className="mb-1"><strong>Year:</strong> {extractYear(d.Dob) || 'N/A'}</p>
                <p className="mb-1"><strong>Nationality:</strong> {d.Nationality}</p>
                <p className="mb-1"><strong>Description:</strong> {d.Description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
}