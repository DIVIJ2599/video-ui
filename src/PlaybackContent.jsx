import React, { useState,forwardRef } from 'react'

const PlaybackContent = ({onPlaybackValueChange,handleDismiss}) => {
  
  const [speed,setSpeed] = useState("1x");

  const onOptionChange = (e) =>{
    const newSpeed = e.target.value
    setSpeed(newSpeed);
    onPlaybackValueChange(newSpeed)
  }

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        handleDismiss();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <div className='bg-black text-white flex flex-col p-7 items-start w-[25%] absolute top-3/4 left-2/3'>
      <input
        type="radio"
        name="speed"
        value="0.5x"
        id="0.5x"
        checked={speed === "0.5x"}
        onChange={onOptionChange}
      />
      <label htmlFor="0.5x">0.5x</label>

      <input
        type="radio"
        name="speed"
        value="0.75x"
        id="0.75x"
        checked={speed === "0.75x"}
        onChange={onOptionChange}
      />
      <label htmlFor="0.75x">0.75x</label>

      <input
        type="radio"
        name="speed"
        value="1x"
        id="1x"
        checked={speed === "1x"}
        onChange={onOptionChange}
      />
      <label htmlFor="1x">1x(Normal)</label>
    </div>
    )
}
export default PlaybackContent