import React from 'react'
import {realizations} from './index'
import Masonry from '@mui/lab/Masonry';
import './styles-preview.css'
import { useMediaQuery } from '@mui/material';
import {Link} from 'react-router-dom'

const RealizationsPrew = () => {

    const isMd = useMediaQuery('(max-width:900px)')
    const isSm = useMediaQuery('(max-width:700px)')

  return (
    <div className='realPrew_container'>
        <h3>
            Naše Projekty
        </h3>
        <Link to={'/realizacie'} className='arrow_container'><span>viac</span><p className='arrow'>&#10137;</p></Link>
           <Masonry columns={isMd ? `${isSm ? 1 : 2}` : 3} spacing={2} sx={{margin:0}}>
        {realizations.map((real, index) => (
          <div key={index} >
           <div className='realPrew_content'>
                <h1>{real.location}</h1>
                <img src={real.image} alt={real.location} height={isSm ? 500 : real.height}/>
           </div>
                
           
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default RealizationsPrew