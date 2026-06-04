import { Container  } from 'react-bootstrap';
import Header from './components/Header'; 
import Bai4 from './components/Bai4';
import Bai5 from './components/Bai5';
import Ex1 from './components/Ex1';
import Box from './components/Box';
import Hello from './components/Hello';
import Ex2 from './components/Ex2';
import {items} from './data';
import Ex3 from './components/Ex3';
import Hook1 from './components/Hook1';
import {students} from './data'
import StudentForm from './components/StudentForm';
import { directors } from './data';
import Director from './components/Director';
import Star from './components/Star';
import Movies from './components/Movies';
import Hook2 from './components/Hook2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
           <Route path="/bai4" element={<Bai4 />} />
           <Route path="/bai5" element={<Bai5 />} />
           <Route path="/director" element={<Director />} />
          </Routes>
  
      </Container>
    </BrowserRouter>
  );
}

export default App;