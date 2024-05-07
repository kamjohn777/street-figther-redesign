export class FpsCounter {
  constructor() {
    // this.lastFrameTime = 0;
    this.fps = 0;
  }

  updateFps(secondsPassed) {
    this.fps = Math.trunc(1 / secondsPassed);
  }

  draw(context) {
    context.font = 'bold 16px Arial';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.fillText(`FPS: ${this.fps}`, context.canvas.width / 2, 30);
  }
}