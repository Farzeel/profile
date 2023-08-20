import React from "react";
import "./Menue.css";
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
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

const Menue = ({ toggle }) => {
  const openimage = () => {
    window.open("./images/Farzeel.jpeg", "_blank");
  };

  return (
    <>
      {toggle ? (
        <>
          <div className="menueSection">
            <Zoom >
            <div className="profilePic">
              <img onClick={openimage} src="./images/Farzeel.jpeg" alt="Farzeel" />
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
                    offset={-150}
                    duration={100}
                  >
                    <FcHome title="Home" />
                    Home
                  </Link>
                </div>
              </div>
              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                  >
                    <FcAbout title="About" />
                    About
                  </Link>
                </div>
              </div>
              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                  >
                    <FcReadingEbook title="Education" />
                    Education
                  </Link>
                </div>
              </div>

              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="techStack"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                  >
                    <FcBiotech title="Tech Stack" />
                    Tech Stack
                  </Link>
                </div>
              </div>

              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                  >
                    <FcVideoProjector title="Projects" />
                    Projects
                  </Link>
                </div>
              </div>

              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                  >
                    <FcWorkflow title="EXperience" />
                    Work Exp
                  </Link>
                </div>
              </div>
              <div className="menueItem">
                <div className="menueLink">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={100}
                  >
                    <FcBusinessContact title="contact" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Slide>
          </div>
        </>
      ) : (
        <>
        <Fade down>
          <div className="menueItems">
            <div className="menueItem">
              <div className="menueLink">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={100}
                >
                  <FcHome className="bigger" title="Home" />
                </Link>
              </div>
            </div>
            <div className="menueItem">
              <div className="menueLink">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={100}
                >
                  <FcAbout className="bigger" title="About" />
                </Link>
              </div>
            </div>

            <div className="menueItem">
              <div className="menueLink">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={100}
                >
                   <FcReadingEbook className="bigger" title="Education" />
                </Link>
              </div>
            </div>
            <div className="menueItem">
              <div className="menueLink">
                <Link
                  to="techStack"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={100}
                >
                <FcBiotech className="bigger" title="Tech Stack" />
                </Link>
              </div>
            </div>
            <div className="menueItem">
              <div className="menueLink">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={100}
                >
                  <FcVideoProjector className="bigger" title="Projects" />
                </Link>
              </div>
            </div>
            <div className="menueItem">
              <div className="menueLink">
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={100}
                >
                  <FcWorkflow className="bigger" title="EXperience" />
                </Link>
              </div>
            </div>
            <div className="menueItem">
              <div className="menueLink">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={100}
                >
                  <FcBusinessContact className="bigger" title="contact" />
                </Link>
              </div>
            </div>
          </div>
          </Fade>
        </>
      )}
    </>
  );
};

export default Menue;
