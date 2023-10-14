
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Projects from "./Projects/Projects"

function App() {
    return (
      <div className="App">
        <div>
          <div className="white-gradient"/>
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
        </div>
        
      </div>
    );
  }
  
  export default App;
