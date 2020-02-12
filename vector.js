//create vector structure

class Vector{
				constructor(x, y, z)
				{
								this.x = x;
								this.y = y;
								this.z = z;
				}
}

//add multiplying vector by some amount

function multVector(vector, times)
{
				vector.x *= times;
				vector.y *= times;
				vector.z *= times;
}