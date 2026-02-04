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

        <div className='score-container'>
          <p className='score'>20/55</p>
        </div>

        <div className='question-container'>
          <p className='question'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolor quo fuga, quaerat eveniet obcaecati itaque modi, voluptas maiores, minima nemo perferendis dolorum quod! Sapiente officiis dolorem omnis accusamus aspernatur?</p>
        </div>

        {/* Image container. Images should change */}
        <div className='image-container'>
          <img className='image' src="" alt="" />
        </div>

        <div className='option-container'>
          <p className='option'>
            Option 1
          </p>
        </div>

        <div className='option-container'>
          <p className='option'>
            Option 2
          </p>
        </div>

        <div className='option-container'>
          <p className='option'>
            Option 3
          </p>
        </div>

        <div className='control-container'>
          <button type="submit">SKIP</button>
          <button type="submit">
            ➡️
          </button>
        </div>




      </div>
    </>
  )
}

export default App
