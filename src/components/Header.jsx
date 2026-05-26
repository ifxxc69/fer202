import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import {movies} from '../data'

function Header() {
  return (
    <Navbar bg="primary">
        <Navbar.Brand href="#home">SE2015</Navbar.Brand>
        <Nav className='me-auto'>
            <Nav.Link className='text-white' href="#home">HOME</Nav.Link>
            <Nav.Link className='text-white' href="#home">PRODUCTS</Nav.Link>
            <Nav.Link className='text-white' href="#home">CONTACT US</Nav.Link>

        </Nav>
        <Form className ='d-flex'>
          <Form.Control className='me-4 mr-sm-2' type="search" placeholder="Search..." />
        <Button className='me-4' variant='outline-light'>SEARCH</Button>
        </Form>
        
    </Navbar>

  )
}

export default Header