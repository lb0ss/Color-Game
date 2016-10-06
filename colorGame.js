
var numSquares  = 6; //keeps track of mode so as to avoid generating 6 colors while just displaying 3.
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setUpModeButtons();
	//square listeners
	setUpSquareButtons();
	//reset everything
 	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
	 	this.classList.add("selected");
	 	
	 	if (this.textContent === "Easy"){
	 		numSquares = 3;
	 	} else {
	 		numSquares = 6;
	 	}
	 	//figure out how many squares to show
	 	//pick new colors
	 	//pick a new pickedColor
	 	//update page to reflect changes
	 	reset();
		});
	}
}
function setUpSquareButtons(){
	for (var i = 0; i < squares.length; i++){
		//add click listeners to square.
			squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "PLAY AGAIN?"
			}	else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try again";
			}
		})
	}

}



function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++){
	 if(colors[i]){
	 //make all background colors visible first
	 squares[i].style.display = "block";
	 //add initial colors to squares
	  squares[i].style.background = colors[i];	
	 } else {
	  squares[i].style.display = "none";
	 }
	squares[i].style.background = colors[i];
	//clear message
	messageDisplay.textContent = "";
	//reset play again button to new colors button
	resetButton.textContent = "NEW COLORS?"	
};
}
// //easy mode
// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3; 
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for (var i = 0; i < squares.length; i++){	

// 	 if(colors[i]){
// 	 	squares[i].style.background = colors[i];
// 	 } else {
// 	 	squares[i].style.display = "none";
// 	 }
//   }
//   h1.style.background = "steelblue";
// })

// //hard mode
// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;

// 	for (var i = 0; i < squares.length; i++){	
// 	 	squares[i].style.background = colors[i];
// 	 	squares[i].style.display = "block";
// }
// h1.style.background = "steelblue";	
// })

//reset the game
resetButton.addEventListener("click", function(){
	reset();
});




function changeColors(color){
 //loop through all squares 
  for (var i = 0; i < squares.length; i++){
 //change each color to match given color 
  squares[i].style.background = color;

  }
};

function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
};

function generateRandomColors(num){
 //make an array
 var arr = []
 //repeat num times
 for(var i = 0; i < num; i++){
 //get random color and push into array
 arr.push(randomColor())
 }
 //return that array	
 return arr;
};

function randomColor(){
//pick a red from 0 - 255
var r = Math.floor(Math.random() * 256);
//pick a green from 0 - 255
var g = Math.floor(Math.random() * 256);
//pick a blue from 0 - 255
var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " +b + ")";
}


