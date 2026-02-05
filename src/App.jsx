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

        {/* Score container */}
        <div className='score-container'>
          <p className='score'>20/55</p>
        </div>

        {/* Image container. Images should change */}
        <div className='image-container'>
          image
          <img className='image' src="" alt="" />
        </div>

        {/* Question Container */}
        <div className='question-container'>
          <p className='question'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolor quo fuga, quaerat eveniet obcaecati itaque modi, voluptas maiores, minima nemo perferendis dolorum quod! Sapiente officiis dolorem omnis accusamus aspernatur?</p>
        </div>

        {/* Option 1 */}
        <div className='option-container'>
          <p className='option' id='opt1'>
            Option 1
          </p>
        </div>

        {/* Option 2 */}
        <div className='option-container'>
          <p className='option' id='opt2'>
            Option 2
          </p>
        </div>

        {/* Option 2 */}
        <div className='option-container'>
          <p className='option' id='opt3'>
            Option 3
          </p>
        </div>

        {/* Skip or next */}
        <div className='control-container'>
          <button type="submit" className='continue'>
            CONTINUE ➡️
          </button>
        </div>




      </div>
    </>
  )
}

export default App
