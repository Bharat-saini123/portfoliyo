import React from 'react'

const About = () => {
  return (
    <div  className='about'>
 <h1 style={{fontSize:"5rem",textTransform:"capitalize",margin:"5rem 0rem",textAlign:'center'}}>About </h1>

<video loop autoplay="" muted style={{width:"100%",height:"100%"}}>
    <source src="./vidoes/pexel.mp4" type="video/mp4" />
</video>

 
<div className="education" style={{marginTop:"10rem"}}>
 <h1 style={{fontWeight:"bold",fontSize:'5rem'}}>Education</h1>
 <div style={{fontSize:"2rem"}}>Btech Electrical Engineering from J.C BOSE UNIVERSITY SCIENCE AND TECHNOLOGY YMCA(2019-2023)</div>
 <h1 style={{fontWeight:"bold",fontSize:'5rem',marginTop:"5rem"}}>Expertise</h1>
 <div style={{fontSize:"2rem",textTransform:'capitalize'}}>Java,Sql,Mysql,Sql plus,Html,css,git,github</div>

</div>

    </div>
  )
}

export default About