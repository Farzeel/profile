import React from "react";
import "./About.css";
import { Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <>
      <div className=" aboutSection" id="about">
        <div className="row">
  
          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12   aboutImg">
            <img src="./images/Farzeel.jpeg" alt="profile Photo" />
          </div>
      
         
          <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 aboutMe">
          
              <h2>About me</h2>
              <p>
              Enthusiastic and dedicated student majoring in Media Technology, with a passion for Software development.
Eager to contribute to innovative projects, troubleshoot real-time challenges, and further develop skills in <b>C# ,JavaScript, TypeScript, React, Angular, MySQL</b>  and other technologies.
Strong Foundation in <b>Object-Oriented-Programming Principles</b>
 Proficient understanding of <b>Data Structures and Algorithms</b>

                <br /> <b>Let's create something amazing together!</b>
              </p>
           
          </div>
        
        </div>
      </div>
    </>
  );
};

export default About;
