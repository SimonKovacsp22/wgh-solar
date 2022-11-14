import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './index.css'
import { Navbar, Home, Services, Realizations, AboutUs, Contact, Loader } from '.';

const App = () => {
      const [navVis, setNavVis] = useState(true)
  return (
    <div className='root'>
        {navVis ? <Navbar/> : null}
        <main className='main'>
            <Routes>
                <Route exact path='/' element={<Loader setNavVis={setNavVis}/>} />
                <Route exact path='/domov' element={<Home/>}/>
                <Route exact path='/sluzby' element={<Services/>}/>
                <Route exact path='/realizacie' element={<Realizations/>}/>
                <Route exact path='/onas' element={<AboutUs/>}/>
                <Route exact path='/kontakt' element={<Contact/>}/>
            </Routes>
        </main>
    </div>
  )
}

export default App