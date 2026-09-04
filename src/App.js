import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Highlights from './components/Highlights/Highlights';
import Testimonial from './components/Testimonial/Testimonial';
import Header from './components/Header/Header';

function App() {
  return (
    <>
        <Header />
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
