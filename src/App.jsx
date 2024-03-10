import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas ,CertificationCard} from './components';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

  const App=()=>{

  return (
    <BrowserRouter>
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar/>
      <Hero/>
  </div>
  <br></br>
  <br></br>
  <About/>
  <Experience/>
  <Tech/>
  <Works/>
  <CertificationCard/>
  
  <h1>Swipe</h1>
  {/* <Feedbacks/> */}
  <div className='relative z-0'>
    <Contact/>
    <StarsCanvas/>
  </div>
  </div>
  </BrowserRouter>
  )
}


export default App
