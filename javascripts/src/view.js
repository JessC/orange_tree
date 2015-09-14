/* Write your JS to modify the view here */
//a function to do something when button is clicked
$('.plant').on('click', function() {
  //change the attribute so orange_tree_template will be shown
	$('#orange-tree-template').attr({'id' : ''}); //<-can use brackets and colon
  //show small tree instead of default big tree
  $('.display-tree-big').attr('class', 'display-tree-small');
  //makes a new tree object
	tree = new Tree;
	//disable the button once a tree is grown
	$(this).prop('disabled', true);//<-parenthesis and comma
});


//select the button to age the tree
$('button.age').on('click', function() {
	tree.grow();//calls the js prototype function to age tree
	
	if (tree.age >= FRUIT_BEARING_AGE) {
	//if tree is old enough display-tree-big should be shown
	$('.display-tree-small').css("display", "none");//hide original tree
	$('.display-tree-small').attr('class', 'display-tree-big');//set the src link
	$('.display-tree-big').fadeIn(500); //fade in fruit bearing tree
	//remove tree-small since tree-big will represent full grown tree
	$('div.display-tree-big img').remove();
	//add the same number of oranges created in the function to the tree for viewer
	for (var i = 0; i < tree.oranges.length; i++) {
		//create an orange image
		var orangeImg = $('<img src="images/orange.gif">');
		//append the image into/on the tree <div>
		$('div.display-tree-big').append(orangeImg);
		};
		//assign oranges a random spot on the tree...do this to each!
		$.each($('div img'), function() {
			$(this).css({
				position: 'absolute',
				top:  generateRandom() + 300 + 'px',
				left: generateRandom() + 100 + 'px',
			});
		});
	} else {
		//make the smaller tree grow
		$('.display-tree-small').animate({
			height: tree.height + '2px', //**it's CSS but there
			width:  tree.height + '2px', //separated by commas**
		});
	}
	//now HTML needs to reflect the age and count when button is clicked
	$('p.age').text("Tree age in years: " + tree.age); 
	// **cannot change HTML with .text ex: <b></b> must use .html**
	$('p.fruit-count').html("Number of ripe oranges on tree: "+"<b>"+tree.orangeCount+"</b>");
});
$(document).on('click', 'div img', function(){//**notice "document"
	$(this).closest('img').animate({top: "+=100%", opacity: '0.3'}, 'slow');//<-drop and fade orange
	var that = this//<-create variable so "this" can be seen inside Timeout function
	//remove orange after animation by setting a timeOut function
	setTimeout(function() { $(that).closest('img').remove(); }, 500);
	tree.dropOrange();  //<-calls function to delete the orange object
	$('p.fruit-count').html("Number of ripe oranges on tree: "+"<b>"+tree.oranges.length+"</b>");
});            //^-updates HTML with reduced number-^

//create a function so oranges can be randomly placed
function generateRandom() {
  return Math.floor(Math.random() * 300);
};
//****GOALS****
//DONE animate falling orange...delay removal after fall
//kill tree after MAX age...change picture
//DONE add a tree with leaves for grown tree
//DONE get rid of border for growing tree...possibly indiv pics
//center tree to grow from center up
//DONE animate it's growth for a smoother look
//make age button bigger

