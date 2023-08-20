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
    <VerticalTimeline>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color:theme==="dark"? 'white':'black'  }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - Present"
    iconStyle={{ background:theme==="dark"? 'black':"rgb(33, 150, 243)" , color: 'aqua' }}
    icon={<SiReact />}

  >
   <h3 className="vertical-timeline-element-title">FreeLancer </h3>
    <p>As a freelance professional since 2022, I've crafted tailored digital solutions, seamlessly blending creativity and innovation. With a commitment to quality and a global perspective, I've collaborated with diverse clients to bring their visions to life.</p>
  
  </VerticalTimelineElement>

    </VerticalTimeline>
      </div>
    </>
  )
}

export default WorkExp
