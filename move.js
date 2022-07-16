const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const WIDTH = 250
const HEIGHT = 250

canvas.width = WIDTH
canvas.height = WIDTH


const gradient = ctx.createLinearGradient(50, 50, WIDTH - 50, HEIGHT - 50)
gradient.addColorStop(0, '#87bfff')
gradient.addColorStop(1, '#cdf0ff')

ctx.fillStyle = gradient
ctx.fillRect(0, 0, WIDTH, HEIGHT)

ctx.lineWidth = 1
ctx.lineCap = "round"

for (let i = 0; i < 7; i++) {
  ctx.lineWidth += 1
  ctx.beginPath()
  ctx.moveTo(50 + i * 20 + ctx.lineWidth, 50)
  ctx.lineTo(50 + i * 20 + ctx.lineWidth, 200)
  ctx.stroke()
}