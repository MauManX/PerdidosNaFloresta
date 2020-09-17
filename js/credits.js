class Credits{
  constructor(x,y){
    this.x=x;
    this.y=y;
    this.crdTime=0;
    this.seq=0;
    this.txt1='';
    this.txt2='';
    this.txt3='';
  }
  
  draw(){
    textSize(30);
    text(this.txt1,this.x+1,this.y+1);
    text(this.txt2,this.x+1,this.y+31);
    text(this.txt3,this.x+1,this.y+61);
    fill(255);
    text(this.txt1,this.x,this.y);
    text(this.txt2,this.x,this.y+30);
    text(this.txt3,this.x,this.y+60);
    fill(0);
  }
  
  play(){
    switch(this.seq){
      case 0:
        this.txt1='~~CRÉDITOS~~';
        this.txt2='Criado por';
        this.txt3='Maurício "MMX" Horiuchi';
        break;
      case 1:
        this.txt1='~~CRÉDITOS~~';
        this.txt2='Programação/Audio/Imagem';
        this.txt3='Maurício "MMX" Horiuchi';
        break;
      case 2:
        this.txt1='~~AGRADECIMENTOS~~';
        this.txt2='ALURA';
        this.txt3='Paulo Silveira';
        break;
      case 3:
        this.txt1='~~AGRADECIMENTOS~~';
        this.txt2='ALURA';
        this.txt3='Juliana Negreiros, Guilherme Lima';
        break;
      case 4:
        this.txt1='~~AGRADECIMENTOS~~';
        this.txt2='Galera do Discord';
        this.txt3='que ajudaram e apoiaram';
        break;
      case 5:
        this.txt1='~~AGRADECIMENTOS~~';
        this.txt2='REPÚBLICA COISA DE NERD';
        this.txt3='Leon Oliveira Martins e Nilce Moretto';
        break;
      case 6:
        this.txt1='~~MÚSICA DO FEIJÃO~~';
        this.txt2='AUTORES';
        this.txt3='Leon Oliveira Martins e Nilce Moretto';
        break;
      case 7:
        this.txt1='~~SEGREDO~~';
        this.txt2='Faça o KonamiCode na tela de início';
        this.txt3='para ter uma "SURPRESA"!';
        break;
      default:
        this.txt1='';
        this.txt2='';
        this.txt3='';
    }
    if(this.crdTime>=200){
      this.crdTime=0;
      if(this.seq<8){
        this.seq++;
      }else{
        this.seq=0;
      }
    }else{
      this.crdTime++;
    }
  }
}