import { initializeJin, updateJinPosition, drawJin, Jin } from "./entities/fighters/jin.js";
import { initializeVenom, updateVenomPosition, drawVenom, Venom } from "./entities/fighters/venom.js";
import { initializeStage, drawBackground, Stage } from "./entities/Stage.js";
import { FpsCounter } from "./entities/FpsCounter.js";

$(document).ready(function () {
  const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
  };

  const entities = [
    new Stage(GameViewport),
    new Jin(GameViewport),
    new Venom(GameViewport),
    new FpsCounter(),
  ]

  const canvasEl = $("canvas");
  const canvasDomEl = canvasEl[0];
  const context = canvasDomEl.getContext("2d");

  canvasDomEl.width = GameViewport.WIDTH;
  canvasDomEl.height = GameViewport.HEIGHT;

  initializeJin(GameViewport);
  initializeVenom(GameViewport);
  initializeStage(GameViewport); // Add this line
  
  let previousTime = 0;
  let secondsPassed = 0;

  function frame(time) {
    secondsPassed = (time - previousTime) / 1000;
    previousTime = time;

    for (const entity of entities) {
      if (typeof entity.update === 'function') {
        entity.update(secondsPassed, GameViewport);
      }
    }

    for (const entity of entities) {
      if (typeof entity.draw === 'function') {
        entity.draw(context, GameViewport);
      }
    }

    updateJinPosition(secondsPassed, GameViewport);
    drawBackground(context);
    drawJin(context, GameViewport);

    updateVenomPosition(secondsPassed, GameViewport);
    drawVenom(context, GameViewport);

    console.log(time);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
});