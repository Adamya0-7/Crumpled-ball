class Box{
    constructor(x,y, width, height){
        var options = {isStatic:false, restitution: 1, friction: 0, density: 0.8}
        
        this.body = Matter.Bodies.rectangle(x,y, width, height, options);
        this.height = height;
        this.width = width;
        Matter.World.add(world, this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
    
    
}