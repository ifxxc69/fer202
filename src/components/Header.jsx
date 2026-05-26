import {Navbar, Nav, Form, Button} from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="primary">
        <Navbar.Brand href="#home">SE2015</Navbar.Brand>
        <Nav className='me-auto'>
            <Nav.Link className='text-white' href="#home">HOME</Nav.Link>
            <Nav.Link className='text-white' href="#home">PRODUCTS</Nav.Link>
            <Nav.Link className='text-white' href="#home">CONTACT US</Nav.Link>

        </Nav>
        <Form.Control className='me-4' type="search" placeholder="Search..." />
        <Button variant='outline-light'>Search</Button>
    </Navbar>

  )
}

export default Header