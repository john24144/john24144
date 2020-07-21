import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
      </header>
    </div>
  );
}

function Header() {
  return(
    <div className="Header">
      <header className="Header-header">
        there
      </header>
    </div>
  )
}

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        Obi
      </header>
    </div>
  );
}

function About() {
  return (
    <div className="About">
      <header className="About-header">
        Wan
      </header>
    </div>
  );
}

function Projects() {
  return (
    <div className="Projects">
      <header className="Projects-header">
        
      </header>
    </div>
  );
}

function Contact() {
  return (
    <div className="Contact">
      <header className="Contact-header">
        
      </header>
    </div>
  );
}

export default App;
