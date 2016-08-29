var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var backCanvas = document.createElement('canvas');
backCanvas.height =canvas.height;
backCanvas.width = canvas.width;
var backCtx = backCanvas.getContext('2d');

var speed = 1/16000;

var x = 0;
var y = 0;


var input = {
	up:false,
	down:false,
	left:false,
	right:false
}

window.onkeydown = function(event)
{
	event.preventDefault();
	switch(event.keyCode)
	{
		 case 38:
		 case 87:
			input.up = true;
			break;
		 case 37:
		 case 65:
			input.left = true;
			break;
		 case 40:
		 case 83:
			input.down = true;
			break;
		 case 39:
		 case 68:
			input.right = true;
			break;
	}
}
window.onkeyup = function(event)
{
	event.preventDefault();
	switch(event.keyCode)
	{
		 case 38:
		 case 87:
			input.up = false;
			break;
		 case 37:
		 case 65:
			input.left = false;
			break;
		 case 40:
		 case 83:
			input.down = false;
			break;
		 case 39:
		 case 68:
			input.right = false;
			break;
	}
}


function loop()
{
		if(input.up)y-=2;
		if(input.down)y+=2;
		if(input.left)x-=2;
		if(input.right)x+=2;
		
		backCtx.clearRect(0,0,canvas.width,canvas.height);
		
		for(i = 0; i< 100; i++){
			backCtx.fillStyle = "blue";
			backCtx.fillRect(
			i * 5, 
			i * 5,
			10,
			10);
		}
		
		backCtx.fillStyle = "#FF0000"
		backCtx.fillRect(x,y,5,5);
		
		ctx.drawImage(x,y,5,5);
		requestAnimationFrame(loop);
}

//var intervalId = setInterval(loop,speed);

requestAnimationFrame(loop);




