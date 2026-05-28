import { Container  } from 'react-bootstrap';
import Header from './components/Header'; 
import Bai4 from './components/Bai4';
import Bai5 from './components/Bai5';
import Ex1 from './components/Ex1';
import Box from './components/Box';
import Hello from './components/Hello';
function App() {
  return (
    
      <Container>
       <Header />
          
       
        <Box width={300} height={400} color='pink' title='Cow' />
        <Box width={200} height={100} color='blue' title='Dog' />
        <Box title='Cat' />
        <Hello who='Cham' age={21} />


      </Container>
    
  );
}

export default App;