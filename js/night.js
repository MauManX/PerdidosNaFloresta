class Night {
  constructor() {
    this.alpha = 0;
    this.mode = 0; //0=day 1=night
    this.timeChange = 0;
  }

  draw() {
    fill('rgba(0,0,64,' + this.alpha + ')');
    rect(0, 0, width, height);
  }

  change() {
    if (this.timeChange >= 300) {
      if (this.mode === 0) {
        if (this.alpha < 0.5) {
          this.alpha += 0.01;
        } else {
          this.alpha = 0.5;
          this.mode = 1;
          this.timeChange = 0;
        }
      } else {
        if (this.alpha > 0) {
          this.alpha -= 0.01;
        } else {
          this.alpha = 0;
          this.mode = 0;
          this.timeChange = 0;
        }
      }
    } else {
      this.timeChange += 0.05;
    }
  }
}