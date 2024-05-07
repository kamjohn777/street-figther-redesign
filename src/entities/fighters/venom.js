import { Fighter } from '../../Fighter.js';

export class Venom extends Fighter {
  constructor(GameViewport) {
    const x = GameViewport.WIDTH / 2 - $('img').eq(2)[0].width / 2;
    const y = 126;
    super('Venom', 120, x, y);
    this.image = $('img').eq(2)[0];
    this.image.onload = () => {
      this.width = this.image.width * 0.7; // Adjust this value to change the width
      this.height = this.image.height * 0.7;
    };
  }
}

let venom;

function initializeVenom(GameViewport) {
  venom = new Venom(GameViewport);
}

function updateVenomPosition(secondsPassed, GameViewport) {
  venom.updatePosition(secondsPassed, GameViewport);
}

function drawVenom(context, GameViewport) {
  venom.draw(context, GameViewport);
}

export { initializeVenom, updateVenomPosition, drawVenom };