let x = 0;
let y = 0;
let d = 40;



function setup()
{
	createCanvas(400,400);
	background('green');

}


function draw()
{
    let r = random();

    if(r>0.5){
    	fill('black');
    	square(x,y,d);
    	fill('white');
    	circle(x+d/2,y+d/2,d/2);
    	
    }

    else
    {
        fill('white');
    	square(x,y,d);
    	fill('black');
    	circle(x+d/2,y+d/2,d/2);
    }
    
    x = x+d;

    if(x>=400){
  	x = 0;
  	y = y+d;
    }



  
}

