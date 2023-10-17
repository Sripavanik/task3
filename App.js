
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Offers from './components/Offers';
//import Slider from './components/Slider';
//import Carousel from './components/Carousel';
//import  Images from './components/Images';

function App() {
  return (
    
    <div className="App">
   {/* <Slider/>*/}
    <Navbar/>
    <Hero/>
    <About/>
   <Offers/>
    <Footer/>
    {/*<Carousel Images={Images} />*/}
  </div>
    
  );
}

export default App;
