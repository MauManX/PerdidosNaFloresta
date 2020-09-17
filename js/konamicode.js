class KonamiCode {
  constructor() {
    this.seqOK = 0;
    this.active = false;
  }

  press(key) {
    let ok = false;
    switch (this.seqOK) {
      case 0:
      case 1:
        ok = key === 'ArrowUp' ? true : false;
        break;
      case 2:
      case 3:
        ok = key === 'ArrowDown' ? true : false;
        break;
      case 4:
      case 6:
        ok = key === 'ArrowLeft' ? true : false;
        break;
      case 5:
      case 7:
        ok = key === 'ArrowRight' ? true : false;
        break;
      case 8:
        ok = key === 'b' ? true : false;
        break;
      case 9:
        ok = key === 'a' ? true : false;
        break;
    }

    if (ok) {
      if (this.seqOK < 9) {
        this.seqOK++;
      } else {
        this.active = true;
        sndSecret.play();
      }
    } else {
      this.seqOK = 0;
    }
  }
}