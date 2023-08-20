import {useEffect} from 'react';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";  
import Navbar from './components/Navbar';
import ParticlesContent from './components/ParticlesContent';
import ProfilePhoto from './components/ProfilePhoto';
import AboutMe from './components/AboutMe';
import GlobalStyle from './Global/style';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

  useEffect(() => {
    document.body.classList.add('bg-gray');
    AOS.init();
  }, []);

  return (
    <div className="App">
      <GlobalStyle/>
        <Navbar />
        <ParticlesContent style={{height: '300px'}} />
        <ProfilePhoto />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>

  );

}

export default App;
