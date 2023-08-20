import React from 'react'
import ProjectList from '../../utils/Projectlist'
import "./Projects.css"


const Projects = () => {
  return (
    <>
      <div className="container projectinfo" id='projects'>
      <h1 >TOP RECENT PROJECTS</h1>
    <hr />
      <p>👉 Explore My Top Recent Projects: Showcasing a Diverse Range of Web Development Expertise</p>
        <div className="row my-2 projectcarts">
           {ProjectList.map(project=>
           
           <div key={project.id} className="col-md-3 mx-1 my-2 projectColm">
                <div className='cartBadge'><span className='badge'>{project.badge}</span></div>
                <div className="cartImg">
            <img className='projectImg' src={project.img} alt="iimage" />
            </div>
            <div className="projectTitle mt-2">
                    <h3 className='text-center'>{project.title}</h3>
                </div>
                <span className='techuse'>Technology Uesd</span>
                <div className="techCollection">
                    
                   {  project.technologies.map(tech =>{return <span className="tech">{tech}</span>})}
                </div>
              
                <div className="linkButton">
                <button className='sourceCodeBtn'><a className='projectLink' target={"_blank"} href={project.SourceCode}>Source Code</a></button>
                <button className='liveLinkBtn'><a className='projectLink' target={"_blank"} href={project.liveLink}>Live</a></button>
                </div>
            </div>)}
            
        </div>
      </div>
    </>
  )
}

export default Projects
