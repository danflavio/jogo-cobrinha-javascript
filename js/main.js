let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let direcao = "right";
let jogo = setInterval(iniciarJogo, 200);

// Posicao da cobrinha
snake[0] = {
    x: 7 * box,
    y: 7 * box
}


function criarBackground() {
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    let snakeX;
    let snakeY;
    let newHead;

    criarBackground();
    criarCobrinha();

    snakeX = snake[0].x;
    snakeY = snake[0].y;

    if (direcao == 'right') snakeX += box;
    if (direcao == 'left') snakeX -= box;
    if (direcao == 'up') snakeY -= box;
    if (direcao == 'down') snakeY += box;

    snake.pop();

    newHead = {
        x: snakeX,
        y: snakeY
    }
    
    snake.unshift(newHead);

}
