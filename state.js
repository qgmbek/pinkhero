export const states = {
  STANDING: 0,
  IDLE: 1,
  WALK: 2,
  WALK_ATTACK: 3,
  RUN: 4,
  JUMP: 5,
  ATTACK: 6,
  DOUBLE_ATTACK: 7,
  HURT: 8,
  DEAD: 9,
};

class State {
  constructor(state) {
    this.state = state;
  }
}

export class Standing extends State {
  constructor(hero) {
    super("STANDING");
    this.hero = hero;
  }
  enter() {
    this.hero.frameY = 0;
    this.hero.speed = 0;
    this.hero.maxFrame = 0;
  }
  handleInput(input) {
    if (input === "PRESS right") this.hero.setState(states.WALK);
    else if (input === "PRESS up") this.hero.setState(states.JUMP);
    else if (input === "PRESS alt") this.hero.setState(states.IDLE);
    else if (input === "PRESS shift") this.hero.setState(states.WALK_ATTACK);
    else if (input === "PRESS insert") this.hero.setState(states.RUN);
    else if (input === "PRESS enter") this.hero.setState(states.ATTACK);
    else if (input === "PRESS #") this.hero.setState(states.DOUBLE_ATTACK);
  }
}

export class Idle extends State {
  constructor(hero) {
    super("IDLE");
    this.hero = hero;
  }
  enter() {
    this.hero.frameY = 1;
    this.hero.speed = 0;
    this.hero.maxFrame = 3;
  }
  handleInput(input) {
    if (input === "RELEASE alt") this.hero.setState(states.STANDING);
    else if (input === "PRESS alt") this.hero.setState(states.IDLE);
    else if (input === "PRESS up") this.hero.setState(states.JUMP);
    else if (input === "PRESS shift") this.hero.setState(states.WALK_ATTACK);
    else if (input === "PRESS insert") this.hero.setState(states.RUN);
    else if (input === "PRESS enter") this.hero.setState(states.ATTACK);
    else if (input === "PRESS #") this.hero.setState(states.DOUBLE_ATTACK);
  }
}

export class Walk extends State {
  constructor(hero) {
    super("WALK");
    this.hero = hero;
  }
  enter() {
    this.hero.frameY = 2;
    this.hero.speed = this.hero.maxSpeed / 0.5;
    this.hero.maxFrame = 5;
  }
  handleInput(input) {
    if (input === "RELEASE right") this.hero.setState(states.STANDING);
    else if (input === "PRESS up") this.hero.setState(states.JUMP);
    else if (input === "PRESS alt") this.hero.setState(states.IDLE);
    else if (input === "PRESS shift") this.hero.setState(states.WALK_ATTACK);
    else if (input === "PRESS insert") this.hero.setState(states.RUN);
    else if (input === "PRESS enter") this.hero.setState(states.ATTACK);
    else if (input === "PRESS #") this.hero.setState(states.DOUBLE_ATTACK);
  }
}

export class Walk_Attack extends State {
  constructor(hero) {
    super("WALK ATTACK");
    this.hero = hero;
  }
  enter() {
    this.hero.frameY = 3;
    this.hero.speed = this.hero.maxSpeed / 0.3;
    this.hero.maxFrame = 5;
  }
  handleInput(input) {
    if (input === "RELEASE shift") this.hero.setState(states.STANDING);
    else if (input === "PRESS up") this.hero.setState(states.JUMP);
    else if (input === "PRESS alt") this.hero.setState(states.IDLE);
    else if (input === "PRESS insert") this.hero.setState(states.RUN);
    else if (input === "PRESS enter") this.hero.setState(states.ATTACK);
    else if (input === "PRESS #") this.hero.setState(states.DOUBLE_ATTACK);
    else if (input === "PRESS right") this.hero.setState(states.WALK);
  }
}

export class Run extends State {
  constructor(hero) {
    super("RUN");
    this.hero = hero;
  }
  enter() {
    this.hero.frameY = 4;
    this.hero.speed = this.hero.maxSpeed;
    this.hero.maxFrame = 5;
  }
  handleInput(input) {
    if (input === "RELEASE insert") this.hero.setState(states.STANDING);
    else if (input === "PRESS up") this.hero.setState(states.JUMP);
    else if (input === "PRESS alt") this.hero.setState(states.IDLE);
    else if (input === "PRESS shift") this.hero.setState(states.WALK_ATTACK);
    else if (input === "PRESS enter") this.hero.setState(states.ATTACK);
    else if (input === "PRESS #") this.hero.setState(states.DOUBLE_ATTACK);
    else if (input === "PRESS right") this.hero.setState(states.WALK);
  }
}

export class Jump extends State {
  constructor(hero) {
    super("JUMP");
    this.hero = hero;
  }
  enter() {
    this.hero.frameY = 5;
    if (this.hero.onGround()) this.hero.vy -= 20;
    this.hero.speed = this.hero.maxSpeed *= 0.5;
    this.hero.maxFrame = 7;
  }
  handleInput(input) {
    if (this.hero.onGround()) this.hero.setState(states.WALK);
  }
}

export class Attack extends State {
  constructor(hero) {
    super("Attack");
    this.hero = hero;
  }
  enter() {
    this.hero.frameY = 6;
    this.hero.speed = this.hero.maxSpeed / 0.9;
    this.hero.maxFrame = 3;
  }
  handleInput(input) {
    if (input === "RELEASE enter") this.hero.setState(states.STANDING);
    else if (input === "PRESS up") this.hero.setState(states.JUMP);
    else if (input === "PRESS alt") this.hero.setState(states.IDLE);
    else if (input === "PRESS shift") this.hero.setState(states.WALK_ATTACK);
    else if (input === "PRESS insert") this.hero.setState(states.RUN);
    else if (input === "PRESS #") this.hero.setState(states.DOUBLE_ATTACK);
    else if (input === "PRESS right") this.hero.setState(states.WALK);
  }
}

export class Double_Attack extends State {
  constructor(hero) {
    super("DOUBLE ATTACK");
    this.hero = hero;
  }
  enter() {
    this.hero.frameY = 7;
    this.hero.speed = this.hero.maxSpeed / 0.7;
    this.hero.maxFrame = 5;
  }
  handleInput(input) {
    if (input === "RELEASE #") this.hero.setState(states.STANDING);
    else if (input === "PRESS up") this.hero.setState(states.JUMP);
    else if (input === "PRESS alt") this.hero.setState(states.IDLE);
    else if (input === "PRESS shift") this.hero.setState(states.WALK_ATTACK);
    else if (input === "PRESS insert") this.hero.setState(states.RUN);
    else if (input === "PRESS enter") this.hero.setState(states.ATTACK);
    else if (input === "PRESS right") this.hero.setState(states.WALK);
  }
}

export class Hurt extends State {
  constructor(hero) {
    super("HURT");
    this.hero = hero;
  }
  enter() {
    this.hero.frameY = 8;
    this.hero.maxFrame = 3;
  }
  handleInput(input) {}
}

export class Dead extends State {
  constructor(hero) {
    super("DEAD");
    this.hero = hero;
  }
  enter() {
    this.hero.frameY = 9;
    this.hero.maxFrame = 5;
  }
  handleInput(input) {}
}
