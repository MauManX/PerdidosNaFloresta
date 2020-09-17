class Opening {
  constructor() {
    this.time = 0;
    this.part = 0;
  }

  press() {
    if (this.part < 2) {
      this.time = 0;
      this.part = 2;
      sndGameMusic.loop();
    } else if (this.part === 2) {
      this.part = 3;
      this.time = 0;
    }
  }

  draw() {
    switch (this.part) {
      case 0:
        image(imgAlura, 0, 0, width, height);
        if (this.time === 5) {
          sndAlura.play();
        }
        if (this.time === 100) {
          this.time = 0;
          this.part = 1;
        } else {
          this.time++;
        }
        break;
      case 1:
        image(imgGameDev, (width - 285) / 2, (height - 119) / 2);
        if (this.time === 100) {
          this.time = 0;
          this.part = 2;
          sndGameMusic.loop();
        } else {
          this.time++;
        }
        break;
      case 2:
        image(imgTitle, 0, 0, width, height,
          200, 0, 100, 100);
        if (this.time === 100) {
          image(imgTitle, 0, 0, width, height,
            100, 0, 100, 100);
          textAlign(CENTER);
          textSize(9);
          text('DICA: veja os créditos no GameOver até o fim ;P', width / 2,394);
          textSize(30);
          text('[Click]/[ENTER] para iniciar', (width / 2)+1, 381);
          fill(255);
          text('[Click]/[ENTER] para iniciar', width / 2, 380);
          fill(0);
        } else {
          image(imgTitle,
            (this.time * 4) - 400, 0, width, height,
            0, 0, 100, 100);
          this.time++;
        }
        break;
      case 3:
        if (this.time === 50) {
          // story.time = 0;
          // story.part = 0;
          Scene = 1;
          textSize(40);
          textAlign(CENTER);
          fill(255);
        } else {
          this.time++;
          image(imgTitle, this.time * 10, 0, width, height,
            200, 0, 100, 100);
          image(imgTitle, this.time * 10, 0, width, height,
            100, 0, 100, 100);
        }
        break;
    }
  }
}