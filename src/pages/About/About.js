import React from "react";
import "./About.css";
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <div className=" aboutSection" id="about">
        <div className="row">
  
          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12   aboutImg">
            <img src="./images/123.jpg" alt="profile Photo" />
          </div>
      
         
          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 aboutMe">
          
              <h2>About me</h2>
              <p>
              A passionate Full Stack Web Developer Currently pursuing a Master's degree in Media Engineering at TU Ilmenau. Eager to contribute to innovative projects, troubleshoot real-time challenges, and further develop skills in  C#  , Python , PHP, JavaScript, TypeScript, React,  MySQL and other technologies 

                 <b>Let's create something amazing together!</b>
              </p>
           
          </div>
        
        </div>
      </div>
    </>
  );
};

export default About;
