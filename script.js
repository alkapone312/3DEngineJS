//setup the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

//translate drawing to the center
ctx.translate(canvas.width/2, canvas.height/2);

//Array of points in 3D (cube)
var points = new Array();

 points[0] = new Vector(0,0,1);
 points[1] = new Vector(1,0,1);
 points[2] = new Vector(1,1,1);
 points[3] = new Vector(0,1,1);
 points[4] = new Vector(0,0,2);
 points[5] = new Vector(1,0,2);
 points[6] = new Vector(1,1,2);
 points[7] = new Vector(0,1,2);

 //Scale cube
 for(var i = 0 ; i < points.length; i++){
 multVector(points[i],50);
 }
 
 //create 3x3 matrix filled with zeros
 var projmatrix = createMatrix(3,3);
 //create 3 rotations matrix
 var rotationZ = createMatrix(3,3);
 var rotationY = createMatrix(3,3);
 var rotationX = createMatrix(3,3);
 
//define var for rotating
var angle=0;

//function for animation
function draw(){

	//clear canvas
	clearCanvas();

//calculate projection matrix
 projmatrix[0][0] = 2;
 projmatrix[1][1] = 2;
 projmatrix[2][2] = 0;

//calculate rotationZ matrix
 rotationZ[0][0] = cos(angle);
 rotationZ[1][0] = sin(angle);
 rotationZ[0][1] = -sin(angle);
 rotationZ[1][1] = cos(angle);
 rotationZ[2][2] = 1;

//calculate rotationY matrix
 rotationY[0][0] = cos(angle);
 rotationY[2][0] = -sin(angle);
 rotationY[1][1] = 1;
 rotationY[0][2] = sin(angle);
 rotationY[2][2] = cos(angle);
 
//calculate rotationX matrix
 rotationX[2][2] = cos(angle);
 rotationX[1][2] = sin(angle);
 rotationX[2][1] = -sin(angle);
 rotationX[1][1] = cos(angle);
 rotationX[0][0] = 1;

//color for points
ctx.fillStyle="black";

//array for calculated rotated and projected points
var projected = new Array(8);
var rotated = new Array(8);

//multiply vectors of points by all matrixes and save to projected array
for(var i = 0 ; i < points.length; i++)
{	
rotated[i] = multVecByMat(points[i],rotationZ);		
				
rotated[i] = multVecByMat(rotated[i],rotationY);

rotated[i] = multVecByMat(rotated[i],rotationX);

projected[i]=multVecByMat(rotated[i],projmatrix);
		
//draw point from projected array	
point(projected[i].x, projected[i].y, 1);
}

//connect all points
for(var i = 0; i < 4; i++)
{
	connectP(projected[i],projected[(i+1)%4]);
	connectP(projected[i+4],projected[((i+1)%4)+4]);
	connectP(projected[i+4],projected[i]);

}
//change angle of drawing (speed of rotation)
angle += 0.5;
}

//set interval for drawing function
var interval = setInterval(draw,10);
