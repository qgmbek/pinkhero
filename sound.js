class SoundManager {
  constructor() {
    this.sounds = {
      jump: this.createAudio("./sounds/jump.ogg", 0.7),
      run: this.createAudio("./sounds/run.ogg", 0.4),
      kill: this.createAudio("./sounds/sword.4.ogg", 0.8),
      hurt: this.createAudio("./sounds/die.wav", 0.8),
    };
  }

  createAudio(src, volume = 1) {
    const audio = new Audio(src);
    audio.volume = volume;
    return audio;
  }

  play(name) {
    const sound = this.sounds[name];
    if (!sound) return;
    try {
      sound.currentTime = 0;
      sound.play();
    } catch (e) {}
  }

  startLoop(name) {
    const sound = this.sounds[name];
    if (!sound) return;
    sound.loop = true;
    try {
      sound.play();
    } catch (e) {}
  }

  stop(name) {
    const sound = this.sounds[name];
    if (!sound) return;
    sound.pause();
    sound.currentTime = 0;
    sound.loop = false;
  }
}

export const soundManager = new SoundManager();

