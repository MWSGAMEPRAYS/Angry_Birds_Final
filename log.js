class Log extends BaseClass{
constructor(x, y, height, angle){
  super(x, y, 20, height, angle);
  this.image = loadImage("sprites/1235.jpg");
  Matter.Body.setAngle(this.body, angle);
}
display(){
  super.display();

}
}




