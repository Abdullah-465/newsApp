import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navs() {
  return (
    <>
      <Navbar bg="dark" className='sticky-top' variant="dark">
        <Container>
          <Navbar.Brand href="#home">
           <strong> <strong className='fs-3'> 🔥 FireNews App </strong> </strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navs;