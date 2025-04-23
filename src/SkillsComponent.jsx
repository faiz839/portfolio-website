import React from 'react'
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'
import img4 from './img4.jpeg'
import img5 from './img5.jpeg'
import img6 from './img6.jpeg'
import img7 from './img7.jpeg'
import img8 from './img8.jpeg'
import img9 from './img9.jpeg'
import img10 from './img10.jpeg'
import img11 from './img11.jpeg'
import img12 from './img12.jpeg'

export default function  SkillsComponent() {
  return (
    <>
    <div>
    <h1 style={{ textAlign: "center" }}>Skills</h1>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <img src={img1}  style={{ width: '180px', height: '180px' }} />
      <img src={img2}  style={{ width: '180px', height: '180px' }} />
      <img src={img3}  style={{ width: '180px', height: '180px' }} />
      <img src={img4}  style={{ width: '180px', height: '180px' }} />
    </div><br></br><br></br><br></br>

    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <img src={img5}  style={{ width: '180px', height: '180px' }} />
      <img src={img6}  style={{ width: '180px', height: '180px' }} />
      <img src={img7}  style={{ width: '180px', height: '180px' }} />
      <img src={img8}  style={{ width: '180px', height: '180px' }} />
    </div> <br></br><br></br>

    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <img src={img9}  style={{ width: '180px', height: '180px' }} />
      <img src={img10}  style={{ width: '180px', height: '180px' }} />
      <img src={img11}  style={{ width: '180px', height: '180px' }} />
      <img src={img12}  style={{ width: '180px', height: '180px' }} />
    </div><br></br><br></br>
  </>
  );
}