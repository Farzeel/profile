import React from 'react'
import TechStackList from '../../utils/TechStackList'
import "./TechStack.css"





const TechStack = () => {

  return (
    <>
    <div className='container techStackHandle' id='techStack'>
      <h1>Technology Stack</h1>
    <hr />
      <p>👉 Including Programming Languages , FrameWorks , Database , FrontEnds , BackEnds Tools and APIs</p>
  
    <div className='carts'>
      <div className='row cardrow'>
        {  TechStackList.map(tech =>
      
        <div key={tech._id} className='col-md-4 singlecard'>
           <tech.icon color={tech.color} className='icons'/>
           <h2>{tech.name}</h2>
        </div>
       
      )}
      </div>
    </div>
    </div>
    </>
  )
}

export default TechStack
