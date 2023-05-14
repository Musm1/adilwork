import React from 'react'
import aboutimage from '../images/about.png'

const About = () => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>Learn More About Us</h1>
            <p> lorem ipsum totem hazem kanem lorem ipsum totem hazem kanem
            lorem ipsum totem hazem kanem lorem ipsum totem hazem kanem
                  lorem ipsum totem hazem kanem lorem ipsum totem hazem kanem</p>
                  <button> Read More </button>
        </div>
    </div>
  )
}

export default About