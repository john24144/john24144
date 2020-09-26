import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Portfolio from './Portfolio.js';
import FadeInSection from './FadeInSection.js';

import circle from './imgs/circle.png';
import headshot from './imgs/headshot.jpg';

import linkedin from './imgs/linkedin.png';
import github from './imgs/github.png';
import email from './imgs/email.png';

import './css/App.css';

function App() {
  return (
    <Container fluid className="App">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </Container>  
  );
}

function Header() {
  return (
    <Row id="Header" className="bg-dark">
      <Col xs={12} md={8} lg={6}>
        <Navbar className="rounded bg-light">
          <Nav className="w-100">
            <Nav.Link href="#Start" className="text-secondary w-25">HOME</Nav.Link>
            <Nav.Link href="#About" className="text-secondary w-25">ABOUT</Nav.Link>
            <Nav.Link href="#Portfolio" className="text-secondary w-25">PORTFOLIO</Nav.Link>
            <Nav.Link href="#Contact" className="text-secondary w-25">CONTACT</Nav.Link>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  )
}

function Home() {
  return (
    <div id="Start">
      <Row className="navbar-offset" />
      <Row className="Home justify-content-center">
      <img src={circle} alt="" width="100%" height="100%" />
      <Col className="text-center my-auto">
        <h1>Keith Johnson</h1>
        <h2>Software Developer</h2>
      </Col>
    </Row>
    </div>
  );
}

function About() {
  return (
    <Row id="About">
      <FadeInSection>
        <Col className="text-center my-auto">
          <img src={headshot} alt="" />
          <h2>Hello.</h2>
          <h5>
            My name is Keith, and I've just graduated from The Ohio State University.
            So, now I'm looking for an entry level position that will test my abilities as a software developer.
            Here's what you can count on me for:
          </h5>
          <h5>I have plenty of programming languages under my belt, plus I can learn fast.</h5>
          <h5>I have previous experience interning as a web developer.</h5>
          <h5>I know how to be a team player and/or team leader.</h5>
          <h5>I'm excited to enter the field to grow even more as a software engineer.</h5>
        </Col>
      </FadeInSection>
    </Row>
  );
}

function Contact() {
  return (
    <Row id="Contact" className="bg-dark">
      <Col className="text-center my-auto">
        <h2>Contact Me:</h2>
        <a href="https://www.linkedin.com/in/keith-johnson-397270140/"><img src={linkedin} alt=""></img></a>
        <a href="https://github.com/john24144"><img src={github} alt=""></img></a>
        <a href="mailto: john24144@gmail.com"><img src={email} alt=""></img></a>
      </Col>
    </Row>
  );
}

export default App;
