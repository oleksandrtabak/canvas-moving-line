const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const WIDTH = 250
const HEIGHT = 250

canvas.width = WIDTH
canvas.height = WIDTH

ctx.fillStyle = 'rgb(180, 230, 250, 0)'
ctx.fillRect(0, 0, WIDTH / 2, HEIGHT / 2)


ctx.fillStyle = 'rgb(150, 200, 250)'
ctx.beginPath()
ctx.moveTo(125, 125)
ctx.lineTo(125, 50)
ctx.lineTo(200, 50)
ctx.fill()