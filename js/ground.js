class Ground{
  constructor(imagem){
    this.imagem=imagem;
    this.x1=0;
    this.x2=120;
    this.x3=240;
    this.x4=360;
    this.x5=480;
  }
  
  draw(){
    image(this.imagem,this.x1,340,120,60);
    image(this.imagem,this.x2,340,120,60);
    image(this.imagem,this.x3,340,120,60);
    image(this.imagem,this.x4,340,120,60);
    image(this.imagem,this.x5,340,120,60);
  }
  
  move(velocidade){    
    this.x1-=velocidade*1.2;
    this.x2-=velocidade*1.2;
    this.x3-=velocidade*1.2;
    this.x4-=velocidade*1.2;
    this.x5-=velocidade*1.2;
    
    if(this.x1<=-120){this.x1+=width+140;}
    if(this.x2<=-120){this.x2+=width+140;}
    if(this.x3<=-120){this.x3+=width+140;}
    if(this.x4<=-120){this.x4+=width+140;}
    if(this.x5<=-120){this.x5+=width+140;}
  }
}