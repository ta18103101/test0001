// 貪食蛇遊戲的 JavaScript 代碼

const gameArea = document.getElementById('gameArea');
const snake = document.getElementById('snake');
const food = document.getElementById('food');
const scoreDisplay = document.getElementById('score');

let snakeX = 10;
let snakeY = 10;
let foodX = 0;
let foodY = 0;
let dx = 10;
let dy = 0;
let score = 0;

// 初始化遊戲
function init() {
    snake.style.left = '10px';
    snake.style.top = '10px';
    placeFood();
    setInterval(moveSnake, 100);
}

// 移動貪食蛇
function moveSnake() {
    snakeX += dx;
    snakeY += dy;
    checkCollision();
    checkFood();
    updateSnake();
}

// 更新貪食蛇的位置
function updateSnake() {
    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';
}

// 放置食物
function placeFood() {
    foodX = Math.floor(Math.random() * 40) * 10;
    foodY = Math.floor(Math.random() * 40) * 10;
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

// 檢查碰撞
function checkCollision() {
    if (snakeX < 0 || snakeX >= 400 || snakeY < 0 || snakeY >= 400) {
        gameOver();
    }
}

// 檢查是否吃到食物
function checkFood() {
    if (snakeX === foodX && snakeY === foodY) {
        score += 10;
        scoreDisplay.textContent = 'Score: ' + score;
        placeFood();
    }
}

// 遊戲結束
function gameOver() {
    alert('Game Over! Your score: ' + score);
    snakeX = 10;
    snakeY = 10;
    dx = 10;
    dy = 0;
    score = 0;
    scoreDisplay.textContent = 'Score: 0';
}

// 監聽鍵盤事件
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowUp' && dy !== 10) {
        dx = 0;
        dy = -10;
    }
    if (event.key === 'ArrowDown' && dy !== -10) {
        dx = 0;
        dy = 10;
    }
    if (event.key === 'ArrowLeft' && dx !== 10) {
        dx = -10;
        dy = 0;
    }
    if (event.key === 'ArrowRight' && dx !== -10) {
        dx = 10;
        dy = 0;
    }
});

// 啟動遊戲
init();
