class Splash {
    constructor() {
        this.time = 0;
        this.part = 0;
    }

    press() {
        Scene = 0;
    }

    draw() {
        textAlign(CENTER);
        textSize(30);
        text('Criado por Maurício "MMX" Horiuchi', width / 2, (height / 2) - 60);
        textSize(50);
        text('Perdidos na Floresta', width / 2, height / 2);
        textSize(30);
        text('[Click]/[ENTER] para iniciar', width / 2, (height / 2) + 50);
        fill(255);
    }
}