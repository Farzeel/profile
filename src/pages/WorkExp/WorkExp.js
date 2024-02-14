import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdCastForEducation } from'react-icons/md';
import {SiReact} from'react-icons/si';
import "./WorkExp.css"
import { useTheme } from '../../Context/ThemeContext';
const WorkExp = () => {
  const [theme] = useTheme();
  return (
    <>
       <div className="container workExp" id='experience'>
      <h1 >WORK EXPERIENCE</h1>
    <hr />
    <p>While I haven't worked in a job yet, I have gained experience by working on my own projects. I am pretty good at using the MERN stack, which is a set of tools for building websites and apps. These projects have taught me a lot and I am ready to use what I've learned in a real job.</p>
      </div>
    </>
  )
}

export default WorkExp
