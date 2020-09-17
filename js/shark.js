class Shark {
  constructor(image, x, y, w, h, scale) {
    this.image = image;
    this.w = w;
    this.h = h;
    this.wScale = w * scale;
    this.hScale = h * scale;
    this.x = x;
    this.y = y;
    this.floatStatus = 0;
    this.floatSpeed = 0.5;
    this.visible = false;
    this.spawn = 0;
  }

  draw() {
    image(this.image, this.x, this.y,
      this.wScale, this.hScale,
      0, 0, this.w, this.h);
  }

  move(speed) {
    this.x -= speed * 0.7;

    if (this.x + this.wScale <= 0) {
      this.visible = false;
    }

    if (this.floatStatus === 0) {
      this.floatSpeed -= 0.01;
      if (this.floatSpeed <= -0.5) {
        this.floatSpeed = -0.5;
        this.floatStatus = 1;
      }
    } else {
      this.floatSpeed += 0.01;
      if (this.floatSpeed >= 0.5) {
        this.floatSpeed = 0.5;
        this.floatStatus = 0;
      }
    }
    this.y += this.floatSpeed;
  }

  update() {
    if (this.visible) {
      this.draw();

      if (hero[0].getItem(this)) {
        this.visible = false;
        life.change(true);
        sndShark.play();
      }
    } else {
      if (this.spawn >= 250) {
        this.spawn -= 250;
        this.visible = true;
        this.x = width;
        this.y = random(50, 150);
      } else {
        this.spawn += 0.05;
      }
    }
  }
}