## Pink Hero

Pink Hero is a small, side‑scrolling pixel game built with plain JavaScript and an HTML5 `<canvas>`.  
You control a pink warrior who runs through a looping background, jumping over and slashing enemies to earn points.  
If an enemy reaches you while you are not attacking, the game is over.

Play here: https://qgmbek.github.io/pinkhero/

---

## How to Play

- **Move right**: `ArrowRight`
- **Jump**: `ArrowUp`
- **Idle / relax**: `Alt`
- **Walk + attack**: `Shift`
- **Run**: `Insert`
- **Attack**: `Enter`
- **Double attack**: `#`

Each defeated enemy increases your score.  
Colliding with an enemy while not attacking ends the run and shows **GAME OVER** with a restart button.

---

## Features

- **Canvas‑based rendering** with a parallax‑style scrolling background
- **Finite‑state hero** (standing, idle, walk, walk‑attack, run, jump, attack, double‑attack, hurt, dead)
- **Enemy spawning loop** with randomized intervals
- **Keyboard input system** mapping key presses/releases to hero states
- **Basic collision detection** between the hero and enemies
- **Simple audio engine** for jump, run loop, hit, and death sounds

---

## Project Structure

- `index.html` – Game entry point, canvas and UI elements
- `script.js` – Main game loop (animation, spawning enemies, score, restart logic)
- `hero.js` – Hero sprite, physics, collision handling, and state switching
- `state.js` – Individual hero state classes (walk, run, jump, attack, etc.)
- `input.js` – Keyboard listener that emits `PRESS ...` / `RELEASE ...` commands
- `background.js` – Scrolling background logic
- `enemy.js` – Enemy sprite logic and movement
- `sound.js` – Sound manager for effects and looping run sound
- `style.css` – Basic layout and styling (canvas, buttons, controls overlay)

Images and audio files live under `images/` and `sounds/` respectively.

---

## Running the Game Locally

1. **Clone or download** this repository.
2. Because the game loads images and sounds, it’s best to serve it from a local web server instead of opening `index.html` directly.

   - **Using VS Code + Live Server** (recommended):
     - Open the folder in VS Code.
     - Install the “Live Server” extension.
     - Right‑click `index.html` → **Open with Live Server**.

   - **Using a simple Node server**:

     ```bash
     npx serve .
     ```

     Then open the printed `http://localhost:...` URL in your browser.

3. Once the page is open and assets load, press any of the control keys and start playing.

---

## Browser Support

Pink Hero uses standard ES modules (`type="module"`) and the HTML5 Audio API.  
Run it in a modern browser (recent Chrome, Edge, or Firefox). Some browsers may require a user interaction (e.g. key press or click) before sounds can play.

---

## License

This project is licensed under the terms described in `LICENSE`.

# pinkhero
Side scrolling pixel game
