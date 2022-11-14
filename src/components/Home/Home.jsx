import React from 'react'
import Footer from '../Footer/Footer'
import { Testimonials }from '../index'
import './styles-home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-bg'>

      </div>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home