import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileDashboard from './components/ProfileDashboard';
import About from './components/About';
import ExperienceTimeline from './components/ExperienceTimeline';
import Education from './components/Education';
import CertificationSection from './components/CertificationSection';
import ResearchTimeline from './components/ResearchTimeline';
import Projects from './components/Projects';
import ResearchInterests from './components/ResearchInterests';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <ProfileDashboard />
        <About />
        <ExperienceTimeline />
        <Education />
        <CertificationSection />
        <ResearchTimeline />
        <Projects />
        <ResearchInterests />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
