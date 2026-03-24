import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Difference from './components/Difference';
import Stages from './components/Stages';
import BrochureBanner from './components/BrochureBanner';
import CampusLife from './components/CampusLife';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickMenu from './components/QuickMenu';
import ThankYou from './components/ThankYou';

function LandingPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Difference />
        <Stages />
        <BrochureBanner />
        <CampusLife />
        <Achievements />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>
      <Footer />
      <QuickMenu />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
