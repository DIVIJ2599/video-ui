import React, { useEffect, useRef, useState } from 'react'
import ElementPopper from 'react-element-popper'
import { ArrowLeft, Clock, Minimize, Play, Settings, Volume2 } from 'react-feather'
import ReactPlayer from 'react-player'
import PlaybackContent from './PlaybackContent'
import Slider from './Slider'
import VolumeSlider from './VolumeSlider'

/*
<ElementPopper 
              ref={ref}
              element={playbackButton} 
              popper={active && <PlaybackContent/>}
              position="bottom"
              onPlaybackValueChange={onPlaybackValueChange}
              />
*/

const VideoPlayer = () => {
  const [currSpeed,setCurrSpeed] = useState('1x');

  const [active, setActive] = useState(false)

  const toggleDropDown = () => setActive(!active)

  const playbackButton = (
  <span onClick={toggleDropDown}><Clock color='white' /></span>
  )

  const onPlaybackValueChange = (newSpeed) =>{
    setCurrSpeed(newSpeed);
  }

  const handleClose = () =>{
    setActive(prev=>!prev);
  }

  return (
    <div className='relative object-cover'>
        <ReactPlayer 
        width="100%" 
        height="100%" 
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
        muted={true} 
        playing={true} 
        style={{objectFit:'cover'}} 
        light={<img src='/poster.jpg' alt='Thumbnail' />} />

      <div className='absolute inset-0 flex flex-col justify-between z-[1]'>

        {active && <PlaybackContent handleDismiss={handleClose} onPlaybackValueChange={onPlaybackValueChange}/>}
      
      <div className='flex items-center justify-between p-5'><ArrowLeft color='#FFF'/></div>
        <div>
          <div className='flex justify-between items-center p-5'>
            <div className='flex flex-col w-full'>
              <Slider/>
              <div className='flex justify-between'>
              <div className='flex flex-row pt-2 gap-3 items-end'>
                <img src='/play-button.png' alt='play-button' width='20px' height="20px"/>
              <div className='outer'>
                <img src='/rewind-circle.png' width='20px' height="20px" />
                <div className='inner'>
                <img src='/10.png' alt='10seconds'/>
                </div>
              </div>
              <div className='outer'>
                <img src='/forward-circle.png' width='20px' height="20px"/>
                <div className='inner'>
                <img src='/10.png' alt='10seconds' />
                </div>
              </div>
                <Volume2 color='#FFF'/>
                <VolumeSlider  />
            </div>
            <div className='flex flex-row pt-2 gap-3 justify-end'>
              <div className='flex'>
             
              <span onClick={()=>setActive(true)}><Clock color='white' /></span>
              <p className='text-white'>{currSpeed}</p>
              </div>
              
              <span><Settings color='white' /></span>
              <Minimize color='white'/>
            </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer