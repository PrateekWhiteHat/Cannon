class Cannon 
{
  constructor(x , y , w , h , a) 
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.a = a;
    this.cannon_image = loadImage("assets/canon.png")
    this.cannon_base = loadImage("assets/cannonBase.png")
  }
  display()
  {
   push();
   translate(this.x,this.y);
   rotate(this.a);
   imageMode(CENTER);
   image(this.cannon_image,0,0,this.w,this.h)
   pop();
   image(this.cannon_base,70,20,200,200)
  }
}
