import React from 'react'
import Window from './Window'

export default function ContactWindow(){
  return (
    <Window title="Contact">
      <div className="flex flex-col gap-3">
        <a href="mailto:akshays.nitt@gmail.com" className="text-blue-300">akshays.nitt@gmail.com</a>
        <a href="https://github.com/Akshays-2006" target="_blank" rel="noreferrer" className="text-blue-300">GitHub</a>
        <a href="https://www.linkedin.com/in/akshay-s-96b037378/" target="_blank" rel="noreferrer" className="text-blue-300">LinkedIn</a>
      </div>
    </Window>
  )
}
