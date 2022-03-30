
import './Homepage.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage Header">
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">AIMEE</Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="#hi">Hello, User!</Nav.Link>
      <Nav.Link href="#profile">Profile</Nav.Link>
      <Nav.Link href="#logout">Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>


<div class="container">
  <div class="row">
    <div class="col">
    <Card style={{ width: '18rem' }}>
  <Card.Img src="/assets/Appointments.png"/>
  <Card.Body>
    <Card.Title>Appointments</Card.Title>
    <Button variant="primary">Book an Appointment</Button>
  </Card.Body>
</Card>
    </div>
    <div class="col">
    <Card style={{ width: '18rem' }}>
  <Card.Img src="/assets/diagnosis.png"/>
  <Card.Body>
    <Card.Title>Diagnose</Card.Title>
    <Button variant="primary">Get a Diagnosis with AIMEE</Button>
  </Card.Body>
</Card>
    </div>
</div>
</div>

      </header>
    </div>

  );
}

export default Homepage;
