import React from 'react'
import Footer from '../Footer/Footer'
import { Testimonials,AboutUs }from '../index'
import './styles-home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-bg'>

      </div>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Home