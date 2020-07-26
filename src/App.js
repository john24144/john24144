import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

import circle from './imgs/circle.png';
import headshot from './imgs/headshot.jpg';
import CFG from './papers/CFG.pdf';
import CFG_capture from './imgs/CFG_capture.png';

import './App.css';

function App() {
  return (
    <Container fluid className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Container>  
  );
}

function Header() {
  return (
    <Row className="Header bg-dark">
      <Col xs={12} md={8} lg={6}>
        <Navbar className="rounded bg-light">
          <Nav className="w-100">
            <Nav.Link className="text-secondary w-25">HOME</Nav.Link>
            <Nav.Link className="text-secondary w-25">ABOUT</Nav.Link>
            <Nav.Link className="text-secondary w-25">PROJECTS</Nav.Link>
            <Nav.Link className="text-secondary w-25">CONTACT</Nav.Link>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  )
}

function Home() {
  return (
    <>
    <Row className="Spacer"></Row>
    <Row className="Home justify-content-center">
      <img src={circle} alt="" width="100%" height="100%" />
      <Col className="text-center my-auto">
        <h1>Keith Johnson</h1>
        <h2>Software Developer</h2>
      </Col>
    </Row>
    </>
  );
}

function About() {
  return (
    <Row className="About">
      <Col className="text-center my-auto">
        <img src={headshot} alt="" />
        <h2>Hello.</h2>
        <h5>
          My name is Keith, and I'm about to finish my last year as a student at The Ohio State University.
          So, now I'm looking for an entry level position that will test my abilities as a software developer.
          Here's what you can count on me for:
        </h5>
        <h5>I have plenty of programming languages under my belt, plus I can learn fast.</h5>
        <h5>I have previous experience interning as a web developer.</h5>
        <h5>I know how to be a team player and/or team leader.</h5>
        <h5>I'm excited to enter the field to grow even more as a software engineer.</h5>
      </Col>
    </Row>
  );
}

function Projects() {
  return (
    <Row className="Projects">
      <Col  xs={12} md={6} lg={4} className="text-center my-auto">
        <h5>Capstone</h5>
      </Col>
      <Col xs={12} md={6} lg={4} className="text-center my-auto">
        <h5>Lyfe App</h5>
      </Col>
      <Col xs={12} md={6} lg={4} className="text-center my-auto">
        <h5><a href={CFG}>Exploring Graph-based Methods in Malware Detection</a></h5>
        <a href={CFG}><img src={CFG_capture} alt="" /></a>
      </Col>
    </Row>
  );
}

function Contact() {
  return (
    <Row className="Contact bg-dark">
      <Col className="text-center my-auto">
        <h2>Contact:</h2>
        <p>email: john24144@gmail.com</p>
      </Col>
    </Row>
  );
}

export default App;
