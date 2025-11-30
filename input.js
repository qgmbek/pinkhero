export default class InputHandler {
  constructor() {
    this.lastKey = "";
    window.addEventListener("keydown", (e) => {
      // console.log(e.key);
      switch (e.key) {
        case "ArrowRight":
          this.lastKey = "PRESS right";
          break;
        case "ArrowUp":
          this.lastKey = "PRESS up";
          break;
        case "Enter":
          this.lastKey = "PRESS enter";
          break;
        case "Alt":
          this.lastKey = "PRESS alt";
          break;
        case "Shift":
          this.lastKey = "PRESS shift";
          break;
        case "#":
          this.lastKey = "PRESS #";
          break;
        case "Insert":
          this.lastKey = "PRESS insert";
          break;
      }
    });
    window.addEventListener("keyup", (e) => {
      switch (e.key) {
        case "ArrowRight":
          this.lastKey = "RELEASE right";
          break;
        case "ArrowUp":
          this.lastKey = "RELEASE up";
          break;
        case "Enter":
          this.lastKey = "RELEASE enter";
          break;
        case "Alt":
          this.lastKey = "RELEASE alt";
          break;
        case "Shift":
          this.lastKey = "RELEASE shift";
          break;
        case "#":
          this.lastKey = "RELEASE #";
          break;
        case "Insert":
          this.lastKey = "RELEASE insert";
          break;
      }
    });
  }
}
