import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import doc from "../../assets/Docs/Resume.pdf"
import { useTheme } from '../../Context/ThemeContext';
import {BsFillMoonStarsFill,BsFillSunFill} from'react-icons/bs';
import { Fade } from "react-awesome-reveal";
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
        <button title='Switch Theme' onClick={changeTheme} className='themeBtn'>{theme==="light"?<BsFillMoonStarsFill color='white'/>
        :<BsFillSunFill size={20} color='yellow'/>}
        </button>
        
        <div   className='container homeContent'>
       
        <Fade  >
        
        <h3>Hi 👋 I'm a</h3>
        <h2>
        <Typewriter
  options={{
    strings: ["JavaScript DEVOLPER", 'MERN STACK DEVOLPER'],
    autoStart: true,
    loop: true,
  }}
/>
        </h2>
  </Fade>
          <Fade left>
       
        <div className='homeBtn'>
          <button className='resumeBtn'><a className='linkbtn' href={doc} download="Farzeel Aftab.pdf">My Resume</a></button>
          <button className='githubBtn'><a className='linkbtn clr'
            href="https://github.com/Farzeel" target={"_blank"}
          >GitHub</a></button>
          <button className='xingBtn'><a className='linkbtn clr'
            href="https://www.xing.com/profile/Farzeel_Aftab/web_profiles" target={"_blank"}
          >Xing</a></button>
          <button className='hireBtn'><a className='linkbtn'
            href="https://wa.me/+4915510279848" target={"_blank"}
          >WhatsApp</a></button>
         
        </div>
        </Fade>
        </div>
      </div>
    </>
  )
}

export default Home
