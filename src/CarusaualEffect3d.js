import React from 'react'
const length = 8
const items = [...new Array(length).keys()]
const z = length * 50

const CarusaualEffect3d = () => {
    const [index, setIndex] = React.useState(0);
  
    const angle = index / length * -360;
    const transform = `translateZ(-${z}px) rotateY(${angle}deg)`
  return (
    <div style={{marginBottom:"18rem"}}>

<div>
 <div className="scene">
      <div className="carousel-scene" style={{ transform }}>
       <img src={`./images/my1.jpg`} alt=""  style={{ transform: getTransform(0) }} className={"item"}/>
        <img src={`./images/my2.jpg`} alt=""  style={{ transform: getTransform(1) }} className={"item"}/>
        <img src={`./images/my3.jpg`} alt=""  style={{ transform: getTransform(2) }} className={"item"}/>
        <img src={`./images/my4.jpg`} alt=""  style={{ transform: getTransform(3) }} className={"item"}/>
        <img src={`./images/my5.jpg`} alt=""  style={{ transform: getTransform(4) }} className={"item"}/>
        <img src={`./images/my6.jpg`} alt=""  style={{ transform: getTransform(5) }} className={"item"}/>
        <img src={`./images/my7.jpg`} alt=""  style={{ transform: getTransform(6) }} className={"item"}/>
        <img src={`./images/my8.jpg`} alt=""  style={{ transform: getTransform(7) }} className={"item"}/>
      </div>
      
      <div
        className="controls"
        style={{ transform: `translateZ(-${z}px) rotateY(0deg)` }}
      >
        <button
          style={{ transform: getTransform(length - 1) }}
          onClick={() => setIndex(index - 1)}
          className='btn-item-box-3d'
        />
        <button
          style={{ transform: getTransform(1) }}
          onClick={() => setIndex(index + 1)}
          className='btn-item-box-3d'
        />
      </div>
    </div>

    </div>
  
    </div>
  )
}
function getTransform(id) {
    const deg = id * (360 / length)
    return `rotateY(${deg}deg) translateZ(${z}px)`
  }

export default CarusaualEffect3d;