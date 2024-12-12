import React from 'react'
import images from '../assets/homeAsset.webp'
import '../Style/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="pic">
   <img src={images} alt="" />
   </div>
   <h1>WE PROVIDE SOURCING SOLUTIONS</h1>
   <h2>We make sure that We deliver the right candidate, At the  </h2>
   <h2>right place, At the right time.</h2>
    </div>
  )
}

export default Home