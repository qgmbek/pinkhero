import Hero from "./hero.js";
import InputHandler from "./input.js";
import Background from "./background.js";
import Enemy from "./enemy.js";

window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  loading.style.display = "none";
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let enemies = [];
  let enemyTimer = 0;
  let enemyInterval = 2000;
  let randomEnemyInterval = Math.random() * 400 + 800;

  function handleEnemies(deltaTime) {
    if (enemyTimer > enemyInterval + randomEnemyInterval) {
      enemies.push(new Enemy(canvas.width, canvas.height));
      randomEnemyInterval = Math.random() * 100 + 500;
      enemyTimer = 0;
    } else {
      enemyTimer += deltaTime;
    }

    enemies.forEach((enemy) => {
      enemy.draw(ctx);
      enemy.update(() => score++);
    });
    enemies = enemies.filter((enemy) => !enemy.markedForDeletion);
  }

  let score = 0;
  let gameState = { gameOver: false };

  function displayStatusText(context) {
    context.fillStyle = "yellow";
    context.font = "40px Helvetica";
    context.fillText("Score: " + score, 20, 50);

    if (gameState.gameOver) {
      context.textAlign = "center";
      context.fillStyle = "red";
      context.fillText("GAME OVER, try again!", canvas.width / 2, 200);
      document.getElementById("restartBtn").style.display = "block";
    }
  }
  const restartButton = document.getElementById("restartBtn");

  restartButton.addEventListener('click', () => {
    // Resize canvas again (fixes score going off-screen)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Reset game values
    enemies = [];
    enemyTimer = 0;
    score = 0;
    gameState.gameOver = false;

    // Reset hero
    hero.x = canvas.width / 2 - hero.width / 2;
    hero.y = canvas.height - hero.height * 2;
    hero.vy = 0;
    hero.setState(0);

    // Hide button
    restartButton.style.display = "none";

    // Restart
    lastTime = 0;
    requestAnimationFrame(animate);
});


  const input = new InputHandler();
  const background = new Background(canvas.width, canvas.height);
  const hero = new Hero(canvas.width, canvas.height, background);

  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw(ctx);
    background.update();
    hero.update(input.lastKey, enemies, gameState);
    hero.draw(ctx, deltaTime);
    handleEnemies(deltaTime);
    displayStatusText(ctx);
    if (!gameState.gameOver) requestAnimationFrame(animate);
  }
  animate(0);
});
