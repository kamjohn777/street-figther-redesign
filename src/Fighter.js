class Fighter {
    constructor(name, velocity, x, y) {
        this.name = name;
        this.image = new Image();
        this.position = {x, y};
        this.velocity = velocity;
    }

    updatePosition(GameViewport) {
        this.position.x += this.velocity;

        if (this.position.x > GameViewport.WIDTH - this.image.width || this.position.x < 0) {
            this.velocity *= -1;
        }
    }

    draw(context, GameViewport) {
        const imageWidth = this.image.width * 0.8;
        const imageHeight = this.image.height * 0.8;
        context.drawImage(this.image, this.position.x, this.position.y, imageWidth, imageHeight);
    }
}

export { Fighter };