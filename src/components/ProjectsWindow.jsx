import React from 'react'
import Window from './Window'

const projects = [
  {title:'Parameter-Efficient Fine-Tuning of Vision Transformers with LoRA Adapters', stack:'Python, Pytorch, ML, LLMs', link:'https://github.com/Akshays-2006/Vit_LoRA_Ablation_Study'},
  {title:'Comprehensive Study on RNN, LSTM, Transformers', stack:'PyTorch, HF, Python', link:'https://colab.research.google.com/drive/1ysguSgUBsTVUVqvMB5cEgHwUw8wbRXZc?usp=sharing'},
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
