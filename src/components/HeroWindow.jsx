import React from 'react'
import Window from './Window'
import PixelMorph from './PixelMorph'

export default function HeroWindow(){
  return (
    <Window title="Akshay — Home">
      <div className="flex items-center gap-6">
        <div style={{width:160}}>
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="profile"
            className="w-28 h-28 rounded-full object-cover border-2 border-neutral-700 shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">Hi, I'm Akshay 👋</h1>
          <p className="mt-2 text-gray-300">Sophomore at NIT Trichy exploring research in Machine Learning and Artificial Intelligence</p>
          <div className="mt-4 space-x-3">
            <a href="https://github.com/Akshays-2006" target="_blank" rel="noreferrer" className="text-sm text-blue-300">GitHub</a>
            <a
              href={`${import.meta.env.BASE_URL}Akshay_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Resume
            </a>

          </div>
        </div>
      </div>
    </Window>
  )
}
