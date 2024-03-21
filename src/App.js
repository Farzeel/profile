
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import TechStack from './pages/Technologies/TechStack';
import WorkExp from './pages/WorkExp/WorkExp';
import ScrollToTop from "react-scroll-to-top"
import { useTheme } from './Context/ThemeContext';
import MobileNavBar from './components/mobile/MobileNavBar';
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const [theme] = useTheme();
  const date = new Date()

  return (
    <>
    <div id={theme}>
      <ToastContainer autautoClose={300} />
      <MobileNavBar/>
    <Layout/>
    <div className='container'>
    <About/>
    <Projects/>
    <TechStack/>
    <Education/>
    <WorkExp/>
    <Contact/>
    </div>
    <div className='footer'>
      <p> Made with 💖 Farzeel Aftab &copy; {date.getFullYear()} </p>
    </div>
    </div>
   <ScrollToTop style={{right:"0px"}} className='smoothScroll bnn' smooth />
    
    </>
  );
}

export default App;
