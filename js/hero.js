class Hero extends Anim {
  constructor(image, type, x,
    width, height,
    scale) {
    super(image, type, x,
      width, height,
      scale);

    this.realY = this.y;
    this.velocidadePulo = 0;
    this.contaPulo = 0;
    this.imortal = 0;
  }

  pula(poder) {
    if (this.contaPulo < 2) {
      this.velocidadePulo = poder;
      this.y -= this.velocidadePulo;

      this.contaPulo++;
      this.run = 0;
      this.frameAtual = 2;

      if (this.type === 0) {
        sndJump.stop();
        sndJump.play();
      }
    }
  }

  gravity() {
    if (this.ContaPulo != 0) {
      if (this.y - this.velocidadePulo < this.realY) {
        this.velocidadePulo--;
        this.y -= this.velocidadePulo;
      } else {
        this.velocidadePulo = 0;
        this.y = this.realY;
        this.contaPulo = 0;
        if (this.run === 0) {
          this.run = 1;
          this.frameTime = 10;
        }
      }
    }
  }

  hitEnemy(enemy) {
    if (enemy.visible) {
      let precision = 40;//this.type === 0 ? 40 : 35;
      
      // rect(this.x + precision,this.y + precision,
      //   this.escalaLargura - (precision * 2),
      //   this.escalaAltura - (precision * 2));
      // rect(enemy.x + precision,enemy.y + precision,
      //   enemy.escalaLargura - (precision * 2),
      //   enemy.escalaAltura - (precision * 2));
      
      const hit = collideRectRect(this.x + precision,
        this.y + precision,
        this.escalaLargura - (precision * 2),
        this.escalaAltura - (precision * 2),
        enemy.x + precision, enemy.y + precision,
        enemy.escalaLargura - (precision * 2),
        enemy.escalaAltura - (precision * 2));
      return hit;
    }
  }

  getItem(item) {
    const hit = collideRectRect(this.x + 35, this.y + 35,
      this.escalaLargura - 70, this.escalaAltura - 70,
      item.x + 35, item.y + 35,
      item.wScale - 80, item.hScale - 80);
    return hit;
  }
}