import React from 'react';
import { genreList } from '../data';

export default function Genre() {
  return (
    <div className="mt-4">
      <h3>Genres</h3>
      <div className="d-flex flex-wrap gap-2">
        {genreList.map((genre) => (
          <span key={genre} className="badge bg-secondary p-2">{genre}</span>
        ))}
      </div>
    </div>
  );
}
