import React, { useState } from 'react'
import "./MobileNavBar.css"
import { GiHamburgerMenu } from'react-icons/gi';
import Lottie from "lottie-react";
import navbarAnimation from "../../assets/pencil.json";
import {
    FcAbout,
    FcBiotech,
    FcBusinessContact,
    FcHome,
    FcReadingEbook,
    FcVideoProjector,
    FcWorkflow,
  } from "react-icons/fc";
  import { Link } from "react-scroll";
 
  import Slide from 'react-reveal/Slide';
  import Zoom from 'react-reveal/Zoom';
import { AiOutlineMenuFold } from 'react-icons/ai';
const MobileNavBar = () => {
    const openimage = () => {
        window.open("./images/Farzeel.jpeg", "_blank");
      };
      const handleOpen = () => {
        setOpen(!open);
      }
      const handlemenubar=() => {
        setOpen(false);
      }
    
    const [open, setOpen] = useState(false);
  return (
    <>
  
      <div className="mobileNavWrapper">
        <div className="mobileNav">
            {open?<AiOutlineMenuFold onClick={handleOpen}  className='mobileHamburgur'/>:<GiHamburgerMenu onClick={handleOpen} className='mobileHamburgur'/>}
            <span className='mobileSpan'>My Portfolio App</span>
            <Lottie animationData={navbarAnimation} color="white" className="mobileAnimation" loop={true} />
        </div>
        {open &&
        <div className= "mobileMenueSection">
        <Zoom >
            <div className="profilePic">
              <img onClick={openimage} src="./images/img2.jpeg" alt="Farzeel" />
            </div>
            </Zoom>
        <Slide top>
            <div className="menueItems">
              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-400}
                    duration={100}
                  >
                   
                    <span onClick={handlemenubar} className='mobilemenuspan'> <FcHome title="Home" /> Home</span>
                  </Link>
                </div>
              </div>
              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-400}
                    duration={100}
                  >
                     <span onClick={handlemenubar} className='mobilemenuspan'> <FcAbout title="About" /> About</span>
                   
                  </Link>
                </div>
              </div>
              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-400}
                    duration={100}
                  >
                   <span onClick={handlemenubar} className='mobilemenuspan'> <FcReadingEbook title="Education" /> Education</span>
                 
                  </Link>
                </div>
              </div>

              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="techStack"
                    spy={true}
                    smooth={true}
                    offset={-400}
                    duration={100}
                  >
                     <span onClick={handlemenubar} className='mobilemenuspan'> <FcBiotech title="Tech Stack" /> Tech Stack</span>
                   
                  </Link>
                </div>
              </div>

              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-400}
                    duration={100}
                  >
                    <span onClick={handlemenubar} className='mobilemenuspan'>   <FcVideoProjector title="Projects" /> Projects</span>
                  
                  </Link>
                </div>
              </div>

              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-400}
                    duration={100}
                  >
                     <span onClick={handlemenubar} className='mobilemenuspan'>    <FcWorkflow title="EXperience" /> Work Exp</span>
                   
                  </Link>
                </div>
              </div>
              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-400}
                    duration={100}
                  >
                      <span onClick={handlemenubar} className='mobilemenuspan'><FcBusinessContact title="contact" /> Contact </span>
                    
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
        </div>}
      </div>

    </>
  )
}

export default MobileNavBar
