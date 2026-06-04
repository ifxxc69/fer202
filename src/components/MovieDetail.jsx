import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { movies } from '../data';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => String(m.id) === String(id));

  if (!movie) return <div className="mt-3">Movie not found</div>;

  return (
    <Card className="mt-3 p-3">
      <Card.Body>
        <Card.Title><h3>{movie.title}</h3></Card.Title>
        <p><strong>Duration:</strong> {movie.duration} minutes</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <div className="d-flex gap-2">
          <Button variant="secondary" onClick={() => navigate(-1)}>Back</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
