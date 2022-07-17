const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const WIDTH = 250
const HEIGHT = 250

canvas.width = WIDTH
canvas.height = WIDTH


// Керування анімацією
let animate = false
let lineY = 0
const FPS = 120
const LINEWIDTH = 7
const LINECOLOR = 'darkblue'
const BGCOLOR = 'dodgerblue'
const SPEED = 250  // пікселів/секунду  

// Квадрат
ctx.fillStyle = BGCOLOR
ctx.fillRect(0, 0, WIDTH, HEIGHT)

// Лінія
ctx.lineWidth = LINEWIDTH
ctx.lineCap = "round"
ctx.strokeStyle = LINECOLOR

// Анімація інтервалами
let intervalID

function startAnimation() {
  ctx.save()
  if (!intervalID) {
    intervalID = setInterval(drawing, 1000 / FPS)
  }
}

function stopAnimation() {
  clearInterval(intervalID)
  intervalID = null
}

// Кнопка керування
const btn = document.getElementById('start-anim')
btn.addEventListener('click', () => { 
  animate = !animate
  
  if (animate) {
    startAnimation()
  } else {
    ctx.restore()
    stopAnimation()
  }
})

function drawing() {
  if (lineY > HEIGHT) {
    lineY = 0
  } else {
    lineY += SPEED / FPS
  }
  
  // Замальовує попередню лінію
  ctx.lineWidth = LINEWIDTH * 2
  ctx.strokeStyle = BGCOLOR
  ctx.beginPath()
  ctx.moveTo(0, lineY - 1)
  ctx.lineTo(WIDTH, lineY - 1)
  ctx.stroke()

  // Малює нову лінію
  ctx.lineWidth = LINEWIDTH
  ctx.strokeStyle = LINECOLOR
  ctx.beginPath()
  ctx.moveTo(0, lineY)
  ctx.lineTo(WIDTH, lineY)
  ctx.stroke()
}