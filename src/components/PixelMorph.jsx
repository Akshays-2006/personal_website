import React, {useEffect, useRef} from 'react'

export default function PixelMorph({src}) {
  const canvasRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(()=>{
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = '/profile.png'  // from public
    img.onload = ()=>{
      const W = 160, H = 160
      canvas.width = W; canvas.height = H
      // draw blurred small image then upscale (CSS handles smoothing)
      ctx.imageSmoothingEnabled = false
      // draw scrambled pixels first
      const grid = 8
      const tmp = document.createElement('canvas')
      tmp.width = W; tmp.height = H
      const tctx = tmp.getContext('2d')
      tctx.drawImage(img,0,0,W,H)
      const imgd = tctx.getImageData(0,0,W,H)
      const data = imgd.data
      // create particles array
      const particles = []
      for(let y=0;y<H;y+=grid){
        for(let x=0;x<W;x+=grid){
          const i = (y*W + x)*4
          const color = `rgba(${data[i]},${data[i+1]},${data[i+2]},${data[i+3]/255})`
          particles.push({x: Math.random()*W, y: Math.random()*H, tx:x, ty:y, color})
        }
      }
      let t = 0
      function draw(){
        ctx.clearRect(0,0,W,H)
        t += 0.02
        particles.forEach(p=>{
          p.x += (p.tx - p.x)*0.08
          p.y += (p.ty - p.y)*0.08
          ctx.fillStyle = p.color
          ctx.fillRect(p.x, p.y, grid, grid)
        })
        if(t<1) requestAnimationFrame(draw)
      }
      draw()
    }
  },[src])

  return <canvas ref={canvasRef} className="rounded-md" style={{width:160,height:160}} />
}
