const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gorillaWidth = 30;
const gorillaHeight = 30;
const gravity = 0.2;

const gorilla1 = {
    x: 100,
    y: canvas.height - gorillaHeight - 10
};

const gorilla2 = {
    x: canvas.width - 100 - gorillaWidth,
    y: canvas.height - gorillaHeight - 10
};

const banana = {
    x: gorilla1.x + gorillaWidth / 2,
    y: gorilla1.y,
    width: 10,
    height: 5,
    velocityX: 0,
    velocityY: 0,
    isThrown: false
};

function drawGorilla(gorilla) {
    ctx.fillStyle = 'brown';
    ctx.fillRect(gorilla.x, gorilla.y, gorillaWidth, gorillaHeight);
}

function drawBanana() {
    if (banana.isThrown) {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.ellipse(banana.x, banana.y, banana.width, banana.height, 0, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawBackground() {
    ctx.fillStyle = 'skyblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function updateBananaPosition() {
    if (banana.isThrown) {
        banana.x += banana.velocityX;
        banana.y += banana.velocityY;
        banana.velocityY += gravity;
    }
}

function throwBanana(angle, velocity) {
    if (!banana.isThrown) {
        angle = angle * (Math.PI / 180); // Convert angle to radians
        banana.velocityX = Math.cos(angle) * velocity;
        banana.velocityY = -Math.sin(angle) * velocity;
        banana.isThrown = true;
    }
}

function gameLoop() {
    drawBackground();
    drawGorilla(gorilla1);
    drawGorilla(gorilla2);
    drawBanana();
    updateBananaPosition();
    checkCollision();
    requestAnimationFrame(gameLoop);
}

function checkCollision() {
    if (banana.x < 0 || banana.x > canvas.width || banana.y > canvas.height) {
        resetBanana();
    } else if (
        banana.x >= gorilla2.x && banana.x <= gorilla2.x + gorillaWidth &&
        banana.y >= gorilla2.y && banana.y <= gorilla2.y + gorillaHeight
    ) {
        alert('Gorilla 1 wins!');
        resetBanana();
    }
}

function resetBanana() {
    banana.x = gorilla1.x + gorillaWidth / 2;
    banana.y = gorilla1.y;
    banana.velocityX = 0;
    banana.velocityY = 0;
    banana.isThrown = false;
}

// Example throw - adjust angle and velocity for different throws
setTimeout(() => {
    throwBanana(45, 8);
}, 1000);

gameLoop();
