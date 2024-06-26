import { Fighter } from '../../Fighter.js';

export class Jin extends Fighter {
  constructor(GameViewport) {
    const x = GameViewport.WIDTH / 2 - $('img').eq(0)[0].width / 2;
    const y = 100;
    super('Jin', -120, x, y);
    this.image = $('img').eq(0)[0];
  }
}

let jin;

function initializeJin(GameViewport) {
  jin = new Jin(GameViewport);
}

function updateJinPosition( secondsPassed, GameViewport) {
  jin.updatePosition(secondsPassed, GameViewport);
}

function drawJin(context, GameViewport) {
  jin.draw(context, GameViewport);
}

export { initializeJin, updateJinPosition, drawJin };