const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const WIDTH = 250
const HEIGHT = 250

canvas.width = WIDTH
canvas.height = WIDTH

// Квадрат
const gradient = ctx.createLinearGradient(50, 50, WIDTH - 50, HEIGHT - 50)
gradient.addColorStop(0, '#87bfff')
gradient.addColorStop(1, '#cdf0ff')

ctx.fillStyle = gradient
ctx.fillRect(0, 0, WIDTH, HEIGHT)

// Керування анімацією
let animate = false
let lineY = 0
const FPS = 60
const LINECOLOR = 'orange'
// ЗМІНИТИ: щоб за секунду змінювалось рівно на Х пікселлів
// const SPEED = 10  // пікселів/секунду  

// Лінія
ctx.lineWidth = 3
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
  if (lineY >= HEIGHT) {
    lineY = 0
  } else {
    lineY += 1
  }
  
  // removing previous line
  ctx.strokeStyle = 'blue'
  ctx.beginPath()
  ctx.moveTo(0, lineY - 1)
  ctx.lineTo(WIDTH, lineY - 1)
  ctx.stroke()

  ctx.strokeStyle = LINECOLOR
  ctx.beginPath()
  ctx.moveTo(0, lineY)
  ctx.lineTo(WIDTH, lineY)
  ctx.stroke()
  
  console.log('DRAWING')  
}

