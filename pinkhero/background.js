export default class Background {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.image = document.getElementById("backgroundImage");
    this.x = 0;
    this.y = 0;
    this.width = this.gameWidth * 1.5;
    this.height = this.gameHeight;
    this.speed = 2;
    this.scrollEnabled = false;
  }

  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    if (this.scrollEnabled) {
      this.x -= this.speed;
      if (this.x < -this.width) this.x = 0;
    }
    }
    setScroll(enabled) {
        this.scrollEnabled = enabled;
      }
}
