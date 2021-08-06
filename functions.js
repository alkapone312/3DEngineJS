//function to clear canvas
function clearCanvas()
{
	ctx.fillStyle="black";
	ctx.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height);
}

//function to draw a point(drawing square)
function point(x, y, size)
{
	ctx.fillRect(x,y,size,size);
}

//function to connect points (vector.x vector.y),(vector.x,vector.y)
function connectP(vector1, vector2)
{
	ctx.beginPath();
	ctx.moveTo(vector1.x, vector1.y);
	ctx.lineTo(vector2.x,vector2.y);
	ctx.stroke();
}

//cosine by degrees
function cos(deg)
{
	var rad = (deg * 3.14)/180;
	return Math.cos(rad);
}

//sine by degrees
function sin(deg)
{
	var rad = (deg * 3.14)/180;
	return Math.sin(rad);
}