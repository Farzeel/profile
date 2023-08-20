import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import doc from "../../assets/Docs/FarzeelAftabCV.pdf"
import { useTheme } from '../../Context/ThemeContext';
import {BsFillMoonStarsFill,BsFillSunFill} from'react-icons/bs';
import Fade from 'react-reveal/Fade';
const Home = () => {
  const [theme,setTheme] = useTheme();
  
  const changeTheme = () => {
      
      
      
        if(localStorage.getItem('theme')==='light')
        {
          localStorage.setItem('theme','dark');
          setTheme(localStorage.getItem('theme'));
          console.log(theme);
        }
        else
        {
          localStorage.setItem('theme','light');
          setTheme(localStorage.getItem('theme'));
          console.log(theme);
        }
      }
   
    
  return (
    <>
      <div className='container-fluid homeContainer' id='home'>
        <button onClick={changeTheme} className='themeBtn'>{theme==="light"?<BsFillMoonStarsFill color='white'/>
        :<BsFillSunFill size={20} color='yellow'/>}
        </button>
        
        <div className='container homeContent'>
       
        <Fade right >
        
        <h3>Hi 👋 I'm a</h3>
        <h2>
        <Typewriter
  options={{
    strings: ["React JS DEVOLPER",'FULL STACK DEVOLPER', 'MERN STACK DEVOLPER'],
    autoStart: true,
    loop: true,
  }}
/>
        </h2>
  </Fade>
          <Fade left>
       
        <div className='homeBtn'>
          <button className='resumeBtn'><a className='linkbtn' href={doc} download="Farzeel Aftab.pdf">My Resume</a></button>
          <button className='hireBtn'><a className='linkbtn'
            href="https://wa.me/+923155925150" target={"_blank"}
          >Hire me</a></button>
        </div>
        </Fade>
        </div>
      </div>
    </>
  )
}

export default Home
