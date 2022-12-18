let x = 0;
let y = 0;
let incremento = 40;

function setup(){
	createCanvas(400,400);
	background('black');

}


function draw(){
	let r = random()


	if(r<0.5){
		
		line(x,y,x+incremento,y+incremento);
		stroke('white');
	}
	else{
		line(x,y+incremento,x+incremento,y);
		stroke('white');
	} 
    
    x = x+incremento;

    if(x>=400){
      x = 0;
      y = y+incremento;
	}
	

	
}