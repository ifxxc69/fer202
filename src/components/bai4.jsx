import { Card, Button, Row, Col } from 'react-bootstrap';
import { movies } from '../data';

function Bai4() {
  return (
    <>
      <Row>
        <h2 className="mt-3 text-center">Movies</h2>
      </Row>
      <Row>
        {movies.map((m) => (
          <Col key={m.id} md={4} className="mb-3">
            <Card>
              <Card.Body> {/* Nên bọc nội dung Card vào Card.Body để giao diện đẹp hơn */}
                <Card.Title>
                  <h4>{m.title}</h4>
                </Card.Title>
                <p>Duration: {m.duration}</p>
                <p>Director: {m.director}</p> {/* Đã sửa "Diractor" -> "Director" */}
                <p>Rating: {m.rating}</p>
                <Button variant='primary'>View Showtimes</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Bai4;