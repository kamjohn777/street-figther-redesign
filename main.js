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

  const jin = $('img').eq(0);
  const background = $('img').eq(1);
  

  const position = {
    x: GameViewport.WIDTH / 2 - jin[0].width / 2,
    y: 100,
  };

  let velocity = 1;

  function frame() {
    position.x += velocity;

    if (position.x > GameViewport.WIDTH - jin[0].width || position.x < 0) {
      velocity *= -1;
    }

    // context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);
    context.drawImage(background[0], 0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);

    // context.strokeStyle = "yellow";
    // context.moveTo(0, 0);
    // context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    // context.moveTo(GameViewport.WIDTH, 0);
    // context.lineTo(0, GameViewport.HEIGHT);
    // context.stroke();

    const jinWidth = jin[0].width * 0.8;
    const jinHeight = jin[0].height * 0.8;
    context.drawImage(jin[0], position.x, position.y, jinWidth, jinHeight);

    // context.drawImage(jin[0], position.x, position.y);

    window.requestAnimationFrame(frame);
  }

  window.requestAnimationFrame(frame);

//   console.log(context);
});
