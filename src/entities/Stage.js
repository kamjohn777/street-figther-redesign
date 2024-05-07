export class Stage {
    constructor(GameViewport) {
      this.GameViewport = GameViewport;
      this.image = $('img').eq(1)[0];
    }
  
    draw(context) {
      context.drawImage(this.image, 0, 0, this.GameViewport.WIDTH, this.GameViewport.HEIGHT);
    }
  }
  
  let stage;
  
  function initializeStage(GameViewport) {
    stage = new Stage(GameViewport);
  }
  
  function drawBackground(context) {
    stage.draw(context);
  }
  
  export { initializeStage, drawBackground };