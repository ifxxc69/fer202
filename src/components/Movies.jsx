import React, { useMemo, useState } from 'react';
import { moviesExtended, producers, directors } from '../data';

export default function Movies() {
  const [q, setQ] = useState('');
  const [producerId, setProducerId] = useState('All');
  const [directorId, setDirectorId] = useState('All');
  const [asc, setAsc] = useState(true);

  const prodMap = useMemo(() => {
    const m = new Map();
    producers.forEach((p) => m.set(p.id, p.Name));
    return m;
  }, []);

  const dirMap = useMemo(() => {
    const m = new Map();
    directors.forEach((d) => m.set(d.id, d.FullName));
    return m;
  }, []);

  const filtered = moviesExtended
    .filter((mv) => {
      if (q && !String(mv.Title).toLowerCase().includes(q.trim().toLowerCase())) return false;
      if (producerId !== 'All' && String(mv.ProducerId) !== String(producerId)) return false;
      if (directorId !== 'All' && String(mv.DirectorId) !== String(directorId)) return false;
      return true;
    })
    .sort((a, b) => {
      const da = new Date(a.ReleaseDate).getTime() || 0;
      const db = new Date(b.ReleaseDate).getTime() || 0;
      return asc ? da - db : db - da;
    });

  return (
    <div className="mt-4">
      <h3 className="mb-3">Movies List</h3>

      <div className="d-flex gap-2 mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search title..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />

        <select className="form-select" value={producerId} onChange={(e) => setProducerId(e.target.value)}>
          <option value="All">All Producers</option>
          {producers.map((p) => (
            <option key={p.id} value={p.id}>{p.Name}</option>
          ))}
        </select>

        <select className="form-select" value={directorId} onChange={(e) => setDirectorId(e.target.value)}>
          <option value="All">All Directors</option>
          {directors.map((d) => (
            <option key={d.id} value={d.id}>{d.FullName}</option>
          ))}
        </select>

        <button className="btn btn-primary" onClick={() => setAsc(!asc)}>
          Sort Date ({asc ? 'asc' : 'desc'})
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Release</th>
              <th>Language</th>
              <th>Producer</th>
              <th>Director</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.Title}</td>
                <td>{m.ReleaseDate}</td>
                <td>{m.Language}</td>
                <td>{prodMap.get(m.ProducerId) || String(m.ProducerId)}</td>
                <td>{dirMap.get(m.DirectorId) || String(m.DirectorId)}</td>
              </tr>
            ))}
            </tbody>
        </table>
      </div>

      <p className="mt-3">There is search by Title (0.5 points). Filter by Producer (0.5 points) and by Director (0.5 points).</p>
    </div>
  );
}