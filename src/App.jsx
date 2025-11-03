import React, {useState} from 'react'
import HeroWindow from './components/HeroWindow'
import ProjectsWindow from './components/ProjectsWindow'
import AboutWindow from './components/AboutWindow'
import ContactWindow from './components/ContactWindow'

export default function App(){
  const [open, setOpen] = useState('hero')
  return (
    <div className="min-h-screen text-gray-100">
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-3xl">
          <div className="mb-6 flex justify-between items-center">
            <div className="text-sm text-gray-400">Portfolio -- Akshay S</div>
            <div className="space-x-3">
              <button onClick={()=>setOpen('hero')} className="text-gray-400 hover:text-white">Home</button>
              <button onClick={()=>setOpen('projects')} className="text-gray-400 hover:text-white">Projects</button>
              <button onClick={()=>setOpen('about')} className="text-gray-400 hover:text-white">About</button>
              <button onClick={()=>setOpen('contact')} className="text-gray-400 hover:text-white">Contact</button>
            </div>
          </div>

          <div className="window p-6">
            {open==='hero' && <HeroWindow />}
            {open==='projects' && <ProjectsWindow />}
            {open==='about' && <AboutWindow />}
            {open==='contact' && <ContactWindow />}
          </div>

        </div>
      </div>

      <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
        © {new Date().getFullYear()} Akshay S -- Akshays-2006
      </footer>
    </div>
  )
}
