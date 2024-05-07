import { Fighter } from './Fighter.js';

export class Venom extends Fighter {
  constructor(GameViewport) {
    const x = GameViewport.WIDTH / 2 - $('img').eq(2)[0].width / 2;
    const y = 140;
    super('Venom', 2, x, y);
    this.image = $('img').eq(2)[0];
  }
}

let venom;

function initializeVenom(GameViewport) {
  venom = new Venom(GameViewport);
}

function updateVenomPosition(GameViewport) {
  venom.updatePosition(GameViewport);
}

function drawVenom(context, GameViewport) {
  venom.draw(context, GameViewport);
}

export { initializeVenom, updateVenomPosition, drawVenom };