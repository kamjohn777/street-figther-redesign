import { initializeJin, updateJinPosition, drawJin } from "./jin.js";
import { initializeVenom, updateVenomPosition, drawVenom } from "./venom.js";
import { initializeStage, drawBackground } from "./entities/Stage.js";

$(document).ready(function () {
  const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
  };

  const canvasEl = $("canvas");
  const canvasDomEl = canvasEl[0];
  const context = canvasDomEl.getContext("2d");

  canvasDomEl.width = GameViewport.WIDTH;
  canvasDomEl.height = GameViewport.HEIGHT;

  initializeJin(GameViewport);
  initializeVenom(GameViewport);
  initializeStage(GameViewport); // Add this line

  function frame() {
    updateJinPosition(GameViewport);
    drawBackground(context);
    drawJin(context, GameViewport);

    updateVenomPosition(GameViewport);
    drawVenom(context, GameViewport);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);
});