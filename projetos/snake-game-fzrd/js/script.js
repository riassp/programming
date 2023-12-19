//getContext é pegar um contexto, no caso o 2d
//x, y, w, h
//fillRect é um retângulo preenchido.
//size no 30 significa que tanto a cobrinha ou a comida vão ter o mesmo tamanho que é 30.
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const size = 30

const snake = [ { x: 200, y: 200 } ]

const drawSnake = () =>{
    ctx.fillStyle = "#ddd"
    ctx.fillRect(snake[0].x, snake[0].y, size, size)
}

drawSnake()