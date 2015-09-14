// Write your Orange Tree code here - you may use constructor functions 


FRUIT_BEARING_AGE = 10; //age that tree can start making oranges
MAX_AGE = 20;           //maximum age that tree can be

function Orange() {
	this.diameter = Math.floor(Math.random() * 10) + 1;
 }; // FUNCTION FOR ORANGE DIAMETER

function Tree() { //NOTE: could have set as variable with functions to modify it
									//BUT instead I'm using all constructor functions...with prototypes			
		this.age = 0;             //creates a tree and all
		this.height = 0;          //its necessary properties
		this.orangeCount = 0;     //the count is 0 obviously and 
		this.isAlive = true;      //it's default is set to be alive
		this.oranges = [];        //**SORT OF LIKE INITIALIZE IN RUBY**
};

Tree.prototype.grow = function() {   //this method defines the grow action
	this.age++;        //increment age by one
	this.height += 6; //**this.height = this.height + 10**
	if (this.age >= FRUIT_BEARING_AGE) { //runs loop to grow fruit old enough
		this.oranges = [] //array to hold new oranges
		this.orangeCount = this.oranges.length; //count equals the length of the array
		for (var i = 0; i < Math.floor(Math.random() * 4) + 5; i++) {
			this.oranges.push(new Orange);
		};
		this.orangeCount = this.oranges.length;
	};
	if (this.age > MAX_AGE) { //will always check trees age here and 
		this.isAlive = false;   //kill it if too old
	};
};

Tree.prototype.dropOrange = function() {   //function to remove oranges
	this.orangeCount = this.oranges.length;
	console.log(this.oranges); 
	return this.oranges.pop(); //removes one orange
};

function pickOrange() {
	return new Orange;
}
