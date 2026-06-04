import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import {movies} from '../data'
import { Link, NavLink } from 'react-router-dom'
import Director from './Director';
function Header() {
  return (
<Navbar bg='primary'>
  <Navbar.Brand href='/home'>SE2015</Navbar.Brand>
  <Nav className='me-auto d-flex align-items-center'> {/* Thêm class để căn giữa theo chiều dọc */}
    
    <NavLink className='p-3' style={({isActive})=>({
      color: isActive ? 'chocolate' : '#fff',
      textDecoration: 'none',
      fontSize: isActive ? '26px' : '22px'
    })} to='/bai4'>
      Bai 4
    </NavLink>

    <NavLink className='p-3' style={({isActive})=>({
      color: isActive ? 'chocolate' : '#fff',
      textDecoration: 'none',
      fontSize: isActive ? '26px' : '22px' // Thêm dòng này
    })} to='/bai5'>
      Bai 5
    </NavLink>

    <NavLink className='p-3' style={({isActive})=>({
      color: isActive ? 'chocolate' : '#fff',
      textDecoration: 'none',
      fontSize: isActive ? '26px' : '22px' // Thêm dòng này
    })} to='/director'>
      Director
    </NavLink>

  </Nav>
</Navbar>
  );
}

export default Header