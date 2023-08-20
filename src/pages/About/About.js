import React from "react";
import "./About.css";
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <>
      <div className=" aboutSection" id="about">
        <div className="row">
          <Zoom>
          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12   aboutImg">
            <img src="./images/Farzeel.jpeg" alt="profile Photo" />
          </div>
          </Zoom>
          <Fade right>
          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 aboutMe">
          
              <h2>About me</h2>
              <p>
                Hi there! I'm <strong>Farzeel Aftab</strong>, a passionate
                <b> Full Stack Developer </b>with a love for crafting creative
                and efficient digital solutions. I thrive in the dynamic world
                of web development, where I get to merge my technical skills
                with my creative thinking to build interactive and user-friendly
                applications.With a strong foundation in both frontend and
                backend technologies, I enjoy the challenge of finding the
                perfect balance between functionality and aesthetics. Whether
                it's creating a sleek and<b> responsive user interface using HTML,
                CSS, and JavaScript, or optimizing database queries and
                designing RESTful APIs,</b> I take pride in every aspect of the
                development process.
                <b>
                  My toolkit includes a variety of technologies such as React,
                  Node.js, Express, MongoDB, and more.
                </b>
                .If you're looking for a dedicated Full Stack Developer who's
                not only technically skilled but also committed to delivering
                exceptional user experiences, let's connect! I'm always eager to
                embark on new challenges and contribute my expertise to
                innovative projects.
                <br /> <b>Let's create something amazing together!</b>
              </p>
           
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default About;
