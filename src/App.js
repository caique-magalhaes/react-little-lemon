import './App.css';
import logo from './assets/Logo.svg'
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Highlights from './components/Highlights/Highlights';
import Nav from './components/Nav/Nav';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <header>
        <img src={logo} alt='logo' />
      </header>
      <Nav />
        <main>
            <Banner />
            <Highlights />
            <Testimonial />
            <About />
        </main>
        <Footer />
    </>
  );
}

export default App;
