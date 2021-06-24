let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
let food;
let direcao = "right";
let jogo = setInterval(iniciarJogo, 100);


// Posicao da cobrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

// Posicao da comida
food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
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

function criarComida() {
    context.fillStyle = "orangered";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direcao != "right") direcao = "left";
    if (event.keyCode == 38 && direcao != "down") direcao = "up";
    if (event.keyCode == 39 && direcao != "left") direcao = "right";
    if (event.keyCode == 40 && direcao != "up") direcao = "down";
}

function iniciarJogo() {
    let snakeX;
    let snakeY;
    let newHead;

    
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert("Game Over");
        }
    }

    if (snake[0].x > 15 * box && direcao == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direcao == "left") snake[0].x = 15 * box;
    if (snake[0].y > 15 * box && direcao == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direcao == "up") snake[0].y = 16 * box;

    criarBackground();
    criarCobrinha();
    criarComida();

    snakeX = snake[0].x;
    snakeY = snake[0].y;

    if (direcao == 'right') snakeX += box;
    if (direcao == 'left') snakeX -= box;
    if (direcao == 'up') snakeY -= box;
    if (direcao == 'down') snakeY += box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x =  Math.floor(Math.random() * 15 + 1) * box;
        food.y =  Math.floor(Math.random() * 15 + 1) * box;
    }

    newHead = {
        x: snakeX,
        y: snakeY
    }
    
    snake.unshift(newHead);

}
