class Enemy extends Anim {
  constructor(image, type, x,
    width, height,
    scale) {
    super(image, type, x,
      width, height,
      scale);

    this.visible = true;
    this.speed= 0;
  }

  move(velocidade) {
    switch (this.type) {
      case 0: //poop
        this.x -= velocidade*1.2;
        if (this.x <= -this.escalaLargura && this.visible) {
          this.visible = false;
          Score += 1;
          NextLevel += 1;
          shark.spawn += 1;
        }
        break;
      case 1: //bear
        this.x -= velocidade * this.speed;
        if (this.x <= -this.escalaLargura) {
          this.x = width;
          this.speed=random(1.5,2.5);
          Score += 5;
          NextLevel += 5;
          shark.spawn += 5;
        }
        break;
      case 2: //bat
        this.x -= velocidade * this.speed;
        if (this.x <= -this.escalaLargura) {
          this.x = width * 6;
          this.y = random(50, 150);
          this.speed=random(2.5,3.5);
          Score += 5;
          NextLevel += 5;
          shark.spawn += 5;
        }
        break;
    }
  }
}