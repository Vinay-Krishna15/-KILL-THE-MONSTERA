class Superman
{
    constructor(x,y,r)
    {
        var options={
            friction:1,
            density:1
        }
        this.x=x;
        this.y=y;
        this.r=r; 
        this.image=loadImage("Superhero-01.png") 
        this.body=Bodies.circle(x,y,r/2,options)
        World.add(world, this.body);
       
        

    }        
    display()
    {

        var paperpos=this.body.position;

        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        strokeWeight(9);
        fill("pink")
        ellipse(0,0,this.r,this.r);
        pop()

    }

}