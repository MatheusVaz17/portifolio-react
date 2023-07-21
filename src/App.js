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
const App = () => {

  useEffect(() => {
    document.body.classList.add('bg-gray');
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
    </div>

  );

}

export default App;
