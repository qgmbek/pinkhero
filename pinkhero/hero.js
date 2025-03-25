import {
  Standing,
  Idle,
  Walk,
  Walk_Attack,
  Run,
  Jump,
  Attack,
  Double_Attack,
  Hurt,
  Dead,
} from "./state.js";

export default class Hero {
  constructor(gameWidth, gameHeight, background) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.background = background;

    this.states = [
      new Standing(this),
      new Idle(this),
      new Walk(this),
      new Walk_Attack(this),
      new Run(this),
      new Jump(this),
      new Attack(this),
      new Double_Attack(this),
      new Hurt(this),
      new Dead(this),
    ];
    this.currentState = this.states[0];
    this.image = document.getElementById("pinkhero");
    this.width = 264 / 8;
    this.height = 382 / 10;
    this.x = this.gameWidth / 2 - this.width / 2;
    this.y = this.gameHeight - this.height * 2;
    this.vy = 0;
    this.weight = 1;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 0;
    this.speed = 0;
    this.maxSpeed = 3;
    this.fps = 3;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;
  }

  draw(context, deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      this.framerTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }
    context.drawImage(
      this.image,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width * 2,
      this.height * 2
    );
  }

  update(input, enemies, gameState) {
    this.currentState.handleInput(input);

    // collision detection
    enemies.forEach((enemy) => {
      const dx = (enemy.x + enemy.width / 2) - (this.x + this.width / 2);
      const dy = (enemy.y + enemy.height / 2) - (this.y + this.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < enemy.width / 2 + this.width / 2) {
        gameState.gameOver = true;
      }
    });

    // horizontal movement
    // this.x += this.speed;
    // if (this.x <= 0) this.x = 0;
    // else if (this.x >= this.gameWidth - this.width * 8)
    //   this.x = this.gameWidth - this.width * 8;
    // vertical movement
    this.y += this.vy;
    if (!this.onGround()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
    }
  }

  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();

    const movingStates = [2, 3, 4, 5, 6, 7];
    this.background.setScroll(movingStates.includes(state));
  }

  onGround() {
    return this.y > this.gameHeight - this.height * 2;
  }
}
