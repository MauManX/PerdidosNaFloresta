class BG{
  constructor(imagem){
    this.imagem=imagem;
    this.x1=0;
    this.x2=width;
    
    this.x3=0;
    this.x4=width;
    
    this.x5=0;
    this.x6=width;
    
    this.h=400;
  }
  
  draw(){
    image(this.imagem,0,20,width,this.h,
          600,0,200,200);
    
    image(this.imagem,this.x5,0,width,this.h,
          400,0,200,200);
    image(this.imagem,this.x6,0,width,this.h,
          400,0,200,200);

    image(this.imagem,this.x3,0,width,this.h,
          200,0,200,200);
    image(this.imagem,this.x4,0,width,this.h,
          200,0,200,200);
    
    image(this.imagem,this.x1,0,width,this.h,
          0,0,200,200);
    image(this.imagem,this.x2,0,width,this.h,
          0,0,200,200);
  }
  
  move(velocidade){
    this.x1-=velocidade;
    this.x2-=velocidade;
    
    if(this.x1<=-width){this.x1+=width*2;}
    if(this.x2<=-width){this.x2+=width*2;}
    
    this.x3-=velocidade*0.7;
    this.x4-=velocidade*0.7;
    
    if(this.x3<=-width){this.x3+=width*2;}
    if(this.x4<=-width){this.x4+=width*2;}
    
    this.x5-=velocidade*0.4;
    this.x6-=velocidade*0.4;
    
    if(this.x5<=-width){this.x5+=width*2;}
    if(this.x6<=-width){this.x6+=width*2;}
  }
}