function preload() {
  imgBG = loadImage('img/bg01.png');
  imgGround = loadImage('img/ground.png');
  imgHero = loadImage('img/leon_nilce.png');
  imgEnemy = loadImage('img/enemy01.png');
  imgAlura = loadImage('img/alura.jpg');
  imgGameDev = loadImage('img/gamedev.png');
  imgTitle = loadImage('img/title.png');
  imgStory = loadImage('img/story.png');
  imgShark = loadImage('img/shark.png');
  imgLife = loadImage('img/heart.png');

  sndAlura = loadSound('snd/alura.mp3');
  sndJump = loadSound('snd/jump.mp3');
  sndHit = loadSound('snd/hit.mp3');
  sndStart = loadSound('snd/start.mp3');
  sndGameOver = loadSound('snd/gameover.mp3');
  sndGameMusic = loadSound('snd/gamemusic.mp3');
  sndShark = loadSound('snd/shark.mp3');
  sndPoop = loadSound('snd/poop.mp3');
  sndNext = loadSound('snd/next.mp3');
  sndSecret = loadSound('snd/secret.mp3');

  jsonCfg = loadJSON('json/config.json');

  font1 = loadFont('Amatic-Bold.ttf');
}

function setup() {
  const c = createCanvas(400, 400);
  if (windowWidth > windowHeight) {
    c.elt.style.width = windowHeight + 'px';
    c.elt.style.height = windowHeight + 'px';
  } else {
    c.elt.style.width = windowWidth + 'px';
    c.elt.style.height = windowWidth + 'px';
  }

  noSmooth();
  frameRate(60);
  textFont(font1);
  textStyle(BOLD);

  sndAlura.setVolume(0.5);
  sndJump.setVolume(0.5);
  sndHit.setVolume(0.5);
  sndStart.setVolume(0.5);
  sndGameOver.setVolume(0.5);
  sndGameMusic.setVolume(0.5);
  sndShark.setVolume(0.5);
  sndPoop.setVolume(0.5);
  sndNext.setVolume(0.5);
  sndSecret.setVolume(0.5);
  
  bg = new BG(imgBG);
  ground = new Ground(imgGround);
  hero[0] = new Hero(imgHero, 0, 30, 30, 30, Scale);
  hero[1] = new Hero(imgHero, 1, -20, 30, 30, Scale);
  shark = new Shark(imgShark, width, random(50, 150), 30, 30, Scale);

  //v--Enemys
  const enemyBear = new Enemy(imgEnemy, 1, width, 30, 30, Scale);
  const enemyBat = new Enemy(imgEnemy, 2, width * 3.5, 30, 30, Scale);
  const enemyPoop = new Enemy(imgEnemy, 0, 0, 30, 30, Scale);

  enemys.push(enemyBear); //0
  enemys.push(enemyBat); //1
  enemys.push(enemyPoop); //2

  enemys[0].speed = random(1.5, 2.5);
  enemys[1].speed = random(2.5, 3.5);
  enemys[1].y = random(50, 150);
  enemys[2].visible = false;
  //^--Enemys

  life = new LifeMeter(imgLife,
    jsonCfg.config.maxLife, jsonCfg.config.startLife,
    30, 30, 1.3);

  credits = new Credits(width / 2, 55);
  story = new Story(imgStory, (width / 2) - 100, 20);
  opening = new Opening();
  night = new Night();
  konamiCode = new KonamiCode();
  splash = new Splash();
}

function keyPressed() {
  switch (Scene) {
    case -1:
      splash.press();
      break;
    case 0:
      konamiCode.press(key);
      if (key === 'Enter') {
        if (konamiCode.active) {
          life.lives = 10;
          hero[1].type=2;
        }
        opening.press();
      }
      break;
    case 1:
      if (key === 'Enter') {
        story.press();
      }
      break;
    case 2:
      if (GameOver === 0) {
        if (key === 'ArrowUp') {
          hero[0].pula(17);
          jumpNilce = 1;
        }
      } else {
        if (key === 'Enter') {
          Restart();
        }
      }
      break;
  }
}

function mousePressed() {
  switch (Scene) {
    case -1:
      splash.press();
      break;
    case 0:
      if (konamiCode.active) {
        life.lives = 10;
        hero[1].type=2;
      }
      opening.press();
      break;
    case 1:
      story.press();
      break;
    case 2:
      if (GameOver === 0) {
        hero[0].pula(17);
        jumpNilce = 1;
      } else {
        Restart();
      }
      break;
  }
}
/*
function touchStarted(){
  switch (Scene) {
    case 0:
      opening.press();
      break;
    case 1:
      story.press();
      break;
    case 2:
      if (GameOver === 0) {
        hero[0].pula(17);
        jumpNilce = 1;
      } else {
        Restart();
      }
      break;
  }
  return false;
}
*/
function draw() {
  background(0);

  switch (Scene) {
    case -1: //splash
      splash.draw();
      break;
    case 0: //opening/title
      opening.draw();
      break;
    case 1: //story
      story.draw();
      break;
    case 2: //game
      bg.draw();
      ground.draw();

      hit();
      bearPoop();

      heroImortal();

      delayNilce();

      if (night.alpha > 0) {
        night.draw();
      }

      hud();

      gameOver();
      break;
  }
}

function hit() {
  enemys.forEach(enemy => {
    if (enemy.visible) {
      enemy.draw();
    }
    if (GameOver === 0) {
      enemy.move(Speed);
    }

    if (hero[0].hitEnemy(enemy) && GameOver === 0) {
      life.change(false);
    }
  });

  shark.update();
}

function heroImortal() {
  if (hero[0].imortal > 0) {
    hero[0].imortal--;
    if (hero[0].imortal % 2 === 1) {
      hero[0].draw();
      hero[1].draw();
    }
  } else {
    hero[0].draw();
    hero[1].draw();
  }
}

function hud() {
  fill(0);
  textSize(40);
  textAlign(LEFT);
  text('Nível ' + Level, 10, 40);
  life.draw();
  textAlign(RIGHT);
  text(parseInt(Score), width - 10, 40);
}

function gameOver() {
  if (GameOver === 0) {
    bg.move(Speed);
    ground.move(Speed);
    shark.move(Speed);

    hero[0].gravity();
    hero[1].gravity();

    if (NextLevel >= 100) {
      Level++;
      Speed += 0.2;
      NextLevel -= 100;
      life.change(true);
      sndNext.play();
    } else {
      NextLevel += 0.05;
    }
    Score += 0.05;

    night.change();
  } else {
    fill('rgba(0,0,0,0.5)');
    rect(0, 0, width, height);

    textAlign(CENTER);

    credits.draw();
    credits.play();

    textSize(120);
    fill(0);
    text('GAME OVER', (width / 2) + 2, (height / 1.8) + 2);
    fill('#F00');
    text('GAME OVER', width / 2, height / 1.8);
    fill(0);
    textSize(50);
    text('[Click]/[ENTER] para reiniciar', (width / 2) + 2, (height / 1.4) + 2);
    fill(255);
    text('[Click]/[ENTER] para reiniciar', width / 2, height / 1.4);
    fill(0);
  }
}

function delayNilce() {
  if (GameOver === 0) {
    if (jumpNilce === 1) {
      if (delay == 10) {
        delay = 0;
        jumpNilce = 0;
        hero[1].pula(17);
      } else {
        delay++;
      }
    }
  }
}

function bearPoop() {
  let poopNow;

  if (Level >= 5) {
    if (enemys[2].visible === false) {
      if (enemys[0].x > 250 && enemys[0].x < 300) {
        poopNow = random(100) >= 95;
        if (poopNow) {
          enemys[2].visible = true;
          enemys[2].x = enemys[0].x + 40;
          sndPoop.play();
        }
      }
    }
  }
}

function Restart() {
  Level = 1;
  Speed = 2;
  Score = 0;
  NextLevel = 0;
  life.lives = konamiCode.active ? 10 : 3;
  GameOver = 0;
  delay = 0;
  jumpNilce = 0;
  enemys[0].x = width;
  enemys[1].x = width * 3.5;
  enemys[2].visible = false;
  hero[0].frameAtual = 0;
  hero[1].frameAtual = 0;
  hero[0].contaPulo = 0;
  hero[1].contaPulo = 0;
  hero[0].velocidadePulo = 0;
  hero[1].velocidadePulo = 0;
  hero[0].imortal = 0;
  hero[1].imortal = 0;
  hero[0].y = 290;
  hero[1].y = 290;
  shark.spawn = 0;
  shark.visible = false;
  night.timeChange = 0;
  night.alpha = 0;
  night.mode = 0;

  sndStart.play();
}
