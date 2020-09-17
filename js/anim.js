class Anim {
  constructor(image, type, x,
    width, height,
    scale) {
    this.imagem = image;
    this.type = type;
    this.largura = width;
    this.altura = height;
    this.x = x;
    this.y = 290;
    this.escalaLargura = width * scale;
    this.escalaAltura = height * scale;

    this.run = 1;
    this.frameAtual = 0;
    this.frameTime = 0;
  }

  draw() {
    image(this.imagem, this.x, this.y,
      this.escalaLargura, this.escalaAltura,
      this.frameAtual * this.largura,
      this.type * this.altura,
      this.largura, this.altura);
    this.anim();
  }

  anim() {
    if (this.run === 1) {
      if (this.frameTime === 10) {
        if (this.frameAtual === 0 || this.frameAtual === 3) {
          this.frameAtual += 1;
        } else {
          this.frameAtual -= 1;
        }
        this.frameTime = 0;
      } else {
        this.frameTime++;
      }
    }
  }
}