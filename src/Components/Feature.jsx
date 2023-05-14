import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'


const Feature = () => {
  return (
    <div id='features'>
        <h1>Features</h1>
        <div className='a-container'>
            <Featurebox image={fimage1} title="Restuarent"/>
            <Featurebox image={fimage2} title="Restuarent"/>
            <Featurebox image={fimage3} title="Restuarent"/>
            <Featurebox image={fimage4} title="Restuarent"/>
        </div>
    </div>
  )
}

export default Feature