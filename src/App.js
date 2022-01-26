import './App.scss';
import Header from "./components/header/Header";
import About from './components/About/About';
import Products from './components/Products/Products';
import Services from './components/Servicess/Services';
import Contact  from './conteiners/Contact/Contact';
import Carousel from "./components/Carousel/Carousel.js"
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header /> 
      
      <Carousel />
      <About />
      <Products />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
