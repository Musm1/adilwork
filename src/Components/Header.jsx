import {motion} from 'framer-motion';
import images from './images';
import { useEffect, useRef, useState } from 'react';

import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'

function Header() {

  const [width,setWidth]= useState(0);
  const carousel= useRef();

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])



  return (
    <div className='main'>
     
      <motion.div className='carousel'>
        
        <motion.div 
        ref={carousel}
        drag="x" 
        dragConstraints={{ right:0, left:-width}}
        whileTap={{cursor:"grabbing"}}
        className='inner-carousel'>
        <div className='testingNew'>
          NOVURANIA
          <div className='testingold'>
              A PASSION FOR  DETAIL
          </div>
          <div className='smallfont'>
              Discover
          </div>
          <div>
            <FaArrowRight/>
          </div>
      </div>
          {images.map(image=>{
            return(
              <motion.div className='item'>
                <img src={image} alt={image} />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
      <div className='logos'>
        <div className='logo1'>
        <FaArrowLeft/>
        </div>
        <div className='logo2'>
        <FaArrowRight/>
        </div>
      </div>
    </div>
  );
}

export default Header;
