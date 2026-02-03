import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <h1 className='heading'>Mzantsi Quizi</h1>

      {/* Contains the quiz */}
      <div className='app-container'>

        {/* Image container. Images should change */}
        <div className='image'>

        </div>

        <div className='option'>Option 1</div>
        <div className='option'>Option 2</div>
        <div className='option'>Option3</div>



      </div>
    </>
  )
}

export default App
