import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Research } from './components/Research';
import { Experience } from './components/Experience';
import { Publications } from './components/Publications';
import { Awards } from './components/Awards';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-scientific-bg selection:bg-scientific-secondary selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Experience />
        <Publications />
        <Awards />
        <Skills />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;