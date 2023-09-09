import React from 'react'
import './Content.css'
import displayImage from '../assets/images/coverimage.png'
import googlePlay from '../assets/images/googlePlay.png'

function Content() {
  return (
    <div className='main-div'>
      <div className="left-section">
          <img src={displayImage} alt="" style={{width:'80%', height:'20%'}}/>
      </div>
      <div className="right-section">
       <h1>Design My House</h1>
       <p>Design My House is the planning wing of SIPL(Sawna Infrabuild Private Limited).SIPL is a registered construction company that provides
        complete housing solutions starting from Planning to Finishing (Naksha se Nirman tak).SIPL has been repudetly in the 
        market since 1999.Designmyhouse.app has been an innovative & expert team of Professional Architects/Engineers whoa are providing customer
        satisfaction-oriented services with the undermentioned specifications:
       </p>
       <img src={googlePlay} alt="" style={{width:'25%', height:'auto'}}/>
      </div>
    </div>
  )
}

export default Content