import React from 'react';
import './index.css';
import { siteData } from './content/site';
import Header from './components/layout/Header';
import Section from './components/layout/Section';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <Section id="home"><Hero data={siteData.hero} /></Section>
          <Section id="about" title="About Me"><About data={siteData.about} /></Section>
          <Section id="projects" title="Featured Projects"><Projects data={siteData.projects} /></Section>
          <Section id="contact" title="Contact Me"><Contact data={siteData.contact} /></Section>
        </main>
        <footer style={{ textAlign: 'center', padding: '3rem 0', background: '#fff', borderTop: '1px solid #eee' }}>
          <p>© 2026 {siteData.hero.name}. Portfolio</p>
        </footer>
      </div>
  );
}

export default App;