import { Row, Col, Card, Button, Form } from 'react-bootstrap'; 
import { books } from '../data';
import { useState } from 'react'; 

function Bai5() {
    
    const categories = ['All categories', ...new Set(books.map((b) => b.category))]; 
    const authors = ['All Authors', ...new Set(books.map((b) => b.author).filter(Boolean))];

   
    const [selectedCategory, setSelectedCategory] = useState('All categories');
    const [selectedAuthor, setSelectedAuthor] = useState('All Authors');
    const [searchTerm, setSearchTerm] = useState(''); 

   
    const filteredBooks = books.filter((b) => {
        const matchCategory = selectedCategory === 'All categories' || b.category === selectedCategory;
        const matchAuthor = selectedAuthor === 'All Authors' || b.author === selectedAuthor;
        const matchSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()); // Added search logic
        
        return matchCategory && matchAuthor && matchSearch;
    });

    return (
        <div> 
            <Row>
                <h2 className='text-center mt-3'>LIST BOOKS:</h2>
            </Row>
            
            <Row className='mt-3 mb-3'>
                
                <Col md={3}>
                    <Form.Select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                        {categories?.map((c, index) => (
                            <option key={index} value={c}>
                                {c}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
                
               
                <Col md={3}>
                    <Form.Select value={selectedAuthor} onChange={e => setSelectedAuthor(e.target.value)}>
                        {authors?.map((a, index) => (
                            <option key={index} value={a}>
                                {a}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
                
               
                <Col md={6}>
                    <Form.Control 
                        placeholder='Enter title to search...' 
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </Col>
            </Row>
            
            <Row className='mb-3'>
                <Button className='ms-auto' style={{ width: '200px' }} variant='success'>
                    Borrow
                </Button>
            </Row> 
            
           
            <Row className='mt-2'>
                {filteredBooks?.map((b) => (
                    <Col md={3} key={b.id} className="mb-4">
                        <Card className="h-100"> 
                            <Card.Img src={b.image} height={160} style={{ objectFit: 'cover' }} />
                            
                            <Card.Body>
                                <Card.Title className="text-truncate" title={b.title}>
                                    {b.title}
                                </Card.Title>
                                <hr /> 
                                <p className="mb-1"><b>Author: </b>{b.author}</p>
                                <hr />
                                <p className="mb-1"><b>Category: </b>{b.category}</p>
                                <hr />
                                <p className="mb-1"><b>Available: </b>{b.availableCopies}</p>
                                <hr />
                                <p className="mb-0"><b>Rating: </b>{b.rating}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                
                {filteredBooks.length === 0 && (
                    <p className="text-center mt-4 text-muted">No books found matching your criteria.</p>
                )}
            </Row>
        </div>
    );
}

export default Bai5;