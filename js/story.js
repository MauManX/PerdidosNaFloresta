class Story {
  constructor(image, x, y) {
    this.image = image;
    this.time = 0;
    this.part = 0;
    this.x = x;
    this.y = y;
    this.midX = width / 2;
  }

  press() {
    if (this.part <= 9) {
      this.time = 0;
      this.part++;
    } else {
      Scene = 2;
      this.part = 0;
      this.time = 0;
      fill(0);
      sndStart.play();
    }
  }

  draw() {
    switch (this.part) {
      case 0:
        image(this.image, this.x, this.y, 200, 200, 0, 0, 40, 40);
        text('Em um belo dia,', this.midX, 270);
        text('Nilce e Leon resolvem passear', this.midX, 310);
        text('na floresta canadense.', this.midX, 350);
        break;
      case 1:
        image(this.image, this.x, this.y, 200, 200, 0, 0, 40, 40);
        text('Tudo estava tranquilo,', this.midX, 270);
        text('até Nilce olhar seu celular...', this.midX, 310);
        break;
      case 2:
        image(this.image, this.x, this.y, 200, 200, 40, 0, 40, 40);
        text('Nilce: A bateria do meu celular acabou!!!', this.midX, 270);
        break;
      case 3:
        image(this.image, this.x, this.y, 200, 200, 40, 0, 40, 40);
        text('Nilce: A bateria do meu celular acabou!!!', this.midX, 270);
        text('Leon: Nossa, a minha bateria também!!!', this.midX, 310);
        break;
      case 4:
        image(this.image, this.x, this.y, 200, 200, 80, 0, 40, 40);
        text('Nilce: Como vamos voltar para casa', this.midX, 270);
        text('sem GPS?', this.midX, 310);
        break;
      case 5:
        image(this.image, this.x, this.y, 200, 200, 120, 0, 40, 40);
        text('Nilce: Como vamos voltar para casa', this.midX, 270);
        text('sem GPS?', this.midX, 310);
        text('Leon: Fique calma Nilce!', this.midX, 350);
        text('Eu sei exatamente como voltar.', this.midX, 390);
        break;
      case 6:
        image(this.image, this.x, this.y, 200, 200, 120, 0, 40, 40);
        text('Nilce: Como, se não temos GPS???', this.midX, 270);
        break;
      case 7:
        image(this.image, this.x, this.y, 200, 200, 120, 0, 40, 40);
        text('Nilce: Como, se não temos GPS???', this.midX, 270);
        text('Leon: Mulher de pouca fé!', this.midX, 310);
        text('Confie na minha habilidade!', this.midX, 350);
        break;
      case 8:
        image(this.image, this.x, this.y, 200, 200, 160, 0, 40, 40);
        text('Leon: Siga-me!', this.midX, 270);
        break;
      case 9:
        image(this.image, this.x, this.y, 200, 200, 160, 0, 40, 40);
        text('Leon: Siga-me!', this.midX, 270);
        text('Nilce: ...', this.midX, 310);
        break;
      default:
        text('~~Jogo Infinite Run~~', this.midX, this.y + 30);
        text('Ande o máximo que puder,', this.midX, this.y + 70);
        text('evitando de colidir', this.midX, this.y + 110);
        text('com morcegos, ursos e...', this.midX, this.y + 150);
        text('os "presentes" dos ursos.', this.midX, this.y + 190);
        text('Ah! E pegue o "easter egg"', this.midX, this.y + 230);
        text('para ganhar vidas.', this.midX, this.y + 270);
        text('Pressione a seta para cima ou dê click', this.midX, this.y + 320);
        text('para pular (pode dar salto duplo)', this.midX, this.y + 360);
        if (this.time === 2000) {
          Scene = 2;
          fill(0);
          sndStart.play();
        } else {
          this.time++;
        }
    }
    if (this.part <= 9 && this.time === 300) {
      this.time = 0;
      this.part++;
    } else {
      this.time++;
    }
  }
}