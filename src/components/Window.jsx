import React from 'react'

export default function Window({title, children}){
  return (
    <div>
      <div className="titlebar">
        <span className="dot" style={{background:'#ff5f57'}}></span>
        <span className="dot" style={{background:'#febc2e'}}></span>
        <span className="dot" style={{background:'#28c840'}}></span>
        <div style={{flex:1}} />
        <div style={{fontSize:13, color:'#9ca3af'}}>{title}</div>
      </div>
      <div style={{padding:20}}>
        {children}
      </div>
    </div>
  )
}
