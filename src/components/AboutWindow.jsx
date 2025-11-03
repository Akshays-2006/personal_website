import React from 'react'
import Window from './Window'

export default function AboutWindow(){
  return (
    <Window title="About">
      <div className="flex gap-6 items-center">
        <img src="/profile.png" alt="profile" style={{width:120,height:120,objectFit:'cover'}} className="rounded-md" />
        <div>
          <div className="text-lg font-medium">Akshay S</div>
          <div className="text-sm text-gray-400 mt-2">1st-year B.Tech Production Engineering @ NIT Trichy. Interested in ML, Quant Finance, and Math.</div>
        </div>
      </div>
    </Window>
  )
}
