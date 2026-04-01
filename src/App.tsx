import { LanguageProvider } from './context/LanguageContext';
import { DottedSurface } from './components/ui/dotted-surface';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="grain" aria-hidden="true" />
      <DottedSurface className="opacity-50" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Instagram />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
