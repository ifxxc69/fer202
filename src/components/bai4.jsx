import { Card, Button, Row, Col } from 'react-bootstrap';
import { movies } from '../data';

function Bai4() {
  return (
    <>
      <Row>
        <h2 className="mt-3 text-center">Movies</h2>
      </Row>
      <Row>
        {movies?.map((m) => (
          <Col key={m.id} md={4} sm={6}>
            <Card className="p-3 mb-3">
              <Card.Title>
                <h4>{m.title}</h4>
              </Card.Title>
              <p><strong>Duration:</strong> {m.duration}</p>
              <p><strong>Director:</strong> {m.director}</p> {/* Đã sửa "Direactor" -> "Director" */}
              <p><strong>Rating:</strong> {m.rating}</p>
              <Button style={{ width: 150 }} variant="primary">View Showtimes</Button> {/* Đã sửa "B_tton" -> "Button" */}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Bai4;