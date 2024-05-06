$(document).ready(function() {
    const GameViewport = {
        WIDTH: 384,
        HEIGHT: 224,
        SCALE: 4,
    };

    const canvasEl = $('canvas'); 
    const canvasDomEl = canvasEl[0]; 
    const context = canvasDomEl.getContext('2d');

    canvasDomEl.width = GameViewport.WIDTH;
    canvasDomEl.height = GameViewport.HEIGHT;

    canvasEl.css('width', `${GameViewport.WIDTH * GameViewport.SCALE}px`);
    canvasEl.css('height', `${GameViewport.HEIGHT * GameViewport.SCALE}px`);

    context.strokeStyle = 'yellow';
    context.moveTo(0, 0);
    context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
    context.moveTo(GameViewport.WIDTH, 0);
    context.lineTo(0, GameViewport.HEIGHT);
    context.stroke();

    console.log(context);
});