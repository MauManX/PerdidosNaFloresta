class LifeMeter {
  constructor(image, total, start, w, h, scale) {
    this.image = image;
    this.total = total;
    this.start = start;
    this.lives = start;
    this.w = w;
    this.h = h;
    this.wScale = w * scale;
    this.hScale = h * scale;
  }

  draw() {
    for (let j = 0; j < this.lives; j++) {
      image(this.image, j * this.wScale, 40,
        this.wScale, this.hScale,
        0, 0, this.w, this.h);
    }
  }

  change(raise) {
    if (raise) {
      if (this.lives < 10) {
        this.lives++;
      }
    } else {
      if (hero[0].imortal <= 0) {
        this.lives--;
        if (this.lives === 0) {
          GameOver = 1;
          sndGameOver.play();
          hero[0].frameAtual = 3;
          hero[1].frameAtual = 3;
          hero[0].run = 1;
          hero[1].run = 1;
        } else {
          sndHit.play();
          hero[0].imortal = 100;
        }
      }
    }
  }
}