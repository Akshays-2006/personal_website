import React from 'react'
import Window from './Window'

const projects = [
  {title:'Document Categorizer', stack:'Python, ML, LLMs', link:'https://github.com/Akshays-2006/feedback-doc-categorizer'},
  {title:'Retrieval Transformer', stack:'PyTorch, HF', link:'https://github.com/Akshays-2006/retrieval-transformer'},
  {title:'Supplychain Dashboard', stack:'React, Flask', link:'https://github.com/Akshays-2006/supplychain-dashboard'},
]

export default function ProjectsWindow(){
  return (
    <Window title="Projects">
      <div className="grid gap-4">
        {projects.map((p,i)=>(
          <div key={i} className="p-3 rounded-md bg-black/20">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">{p.title}</div>
                <div className="text-xs text-gray-400">{p.stack}</div>
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="text-sm text-blue-300">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </Window>
  )
}
