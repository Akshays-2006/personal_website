import React from 'react'
import Window from './Window'

export default function AboutWindow(){
  return (
    <Window title="About">
      <div className="flex gap-6 items-center">
        <img src="/public/akshay_Suit_pic.png" alt="profile" style={{width:120,height:120,objectFit:'cover'}} className="rounded-md" />
        <div>
          <div className="text-lg font-medium">Akshay S</div>
          <div className="text-sm text-gray-400 mt-2">Hey! I’m Akshay, a sophomore at NIT Trichy exploring Machine Learning and AI. I’m really curious about how things work under the hood and enjoy diving into research—especially in NLP right now. I’m always open to research internships or collaborations where I can learn, experiment, and build something meaningful.</div>
        </div>
      </div>
    </Window>
  )
}
