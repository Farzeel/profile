import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdCastForEducation } from'react-icons/md';
import './Education.css'
import { useTheme } from '../../Context/ThemeContext';
import { Bounce } from "react-awesome-reveal";

const Education = () => {
  const [theme] = useTheme();
  return (
    <>
      <div className="container education" id='education'>
        <Bounce left>
      <h1 >EDUCATION</h1></Bounce>
    <hr />
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background:theme==="dark"? 'purple':"#29bf23", color: theme==="dark"? 'white':"black" }}
    contentArrowStyle={{ borderRight:theme==="dark"? '7px solid  purple':'7px solid  #29bf23' }}
    date="April(2023) - Present"
    iconStyle={{ background:theme==="dark"? 'black':"#29bf23", color: '#fff' }}
    icon={<MdCastForEducation  />}

  >
   <h3 className="vertical-timeline-element-title">Ms Media Engineering </h3>
    <h4 className="vertical-timeline-element-subtitle">Technical University of Ilmenau(TUI), Germany</h4>
  
  </VerticalTimelineElement>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background:theme==="dark"? 'purple':"#29bf23", color: theme==="dark"? 'white':"black" }}
    contentArrowStyle={{ borderRight:theme==="dark"? '7px solid  purple':'7px solid  #29bf23' }}
    date="August(2017) - September(2021)"
    iconStyle={{ background:theme==="dark"? 'black':"#29bf23", color: 'white' }}
    icon={<MdCastForEducation  />}

  >
   <h3 className="vertical-timeline-element-title">Bs Computer Science</h3>
    <h4 className="vertical-timeline-element-subtitle"> Federal Urdu University of Arts Science and Technology(FUUAST), Pakistan</h4>
  
  </VerticalTimelineElement>
    </VerticalTimeline>
      </div>
    </>
  )
}

export default Education
