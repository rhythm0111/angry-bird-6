class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke=loadImage("sprites/smoke.png");
    this.path=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.speed>10 && this.body.position.x>200){
    var position =[this.body.position.x,this.body.position.y];
    this.path.push(position);}

    super.display();
    for(var index=0;index<this.path.length;index++){
      image (this.smoke,this.path[index][0],this.path[index][1]);
    }
  }
}
