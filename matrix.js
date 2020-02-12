//function for create matrix
function createMatrix(cols, rows)
{
  var matrix = new Array(cols);
  for(var i = 0 ; i < cols ; i++)
  {
    matrix[i] = new Array(rows);
  }

  for(var i = 0 ; i < cols ; i++)
  {
    for(var j = 0 ; j < rows ; j++)
    {
      matrix[i][j]=0;
    }
  }
  return matrix;
}


//function for multyplying 3Dvector by matrix 3x3

function multVecByMat(vector, matrix)
{
	 var newVector = new Vector(0,0,0);
	 
    var a = vector.x * matrix[0][0];
    var b = vector.y * matrix[0][1];
    var c = vector.z * matrix[0][2];
    newVector.x = a+b+c;

    a = vector.x * matrix[1][0];
    b = vector.y * matrix[1][1];
    c = vector.z * matrix[1][2];
    newVector.y = a+b+c;

    a = vector.x * matrix[2][0];
    b = vector.y * matrix[2][1];
    c = vector.z * matrix[2][2];
    newVector.z = a+b+c;
  
  return newVector;
}
