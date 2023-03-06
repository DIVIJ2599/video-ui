import React from 'react'

const VolumeSlider = () => {
  return (
    <div>
        <label htmlFor="volume-range"/>
        <input name='volume-range' type="range" className='w-full accent-white bg-[rgba(217, 217, 217, 0.7)] h-1'/>
    </div>
  )
}

export default VolumeSlider