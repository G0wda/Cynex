import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Faculty from './components/Faculty.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <Faculty />
        <Achievements />
        <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
