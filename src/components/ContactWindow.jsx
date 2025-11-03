import React from 'react'
import Window from './Window'

export default function ContactWindow(){
  return (
    <Window title="Contact">
      <div className="flex flex-col gap-3">
        <a href="mailto:akshay@example.com" className="text-blue-300">akshay@example.com</a>
        <a href="https://github.com/Akshays-2006" target="_blank" rel="noreferrer" className="text-blue-300">GitHub</a>
        <a href="https://linkedin.com/in/akshay" target="_blank" rel="noreferrer" className="text-blue-300">LinkedIn</a>
      </div>
    </Window>
  )
}
