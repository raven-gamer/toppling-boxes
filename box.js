class Box {
constructor(x,y,w,h) {

var options={
    restitution:0.8,
    friction: 0.3,
    density:1                 
}

    this.body=Bodies.rectangle(x,y,w,h,options)
    World.add (world,this.body)
    this.w=w
    this.h=h 
}

display(){
    var angle=this.body.angle                                 
    push() 
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    rectMode(CENTER)
    fill("red")
    rect(0,0,this.w,this.h)
    pop()
}

}