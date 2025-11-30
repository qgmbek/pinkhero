export default class Enemy {
  constructor(gameWidth, gameHeight, score) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 48;
    this.height = 65;
    this.image = document.getElementById("enemyImage");
    this.x = this.gameWidth;
    this.y = this.gameHeight - this.height;
    this.frameX = 0;
    this.speed = 4;
    this.markedForDeletion = false;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(scoreCallback) {
    this.x -= this.speed;
    if (this.x < 0 - this.width) {
      this.markedForDeletion = true;
      scoreCallback();
    }
  }
}
