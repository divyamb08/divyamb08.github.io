var numSquare = 6;
var colors = generateRandomColors(numSquare);

var sq = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var messageDisplay = document.querySelector("#message");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var h1 = document.querySelector("h1");



easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i=0; i<sq.length; i++)
	{
		if(colors[i]){
			sq[i].style.backgroundColor = colors[i];
		}
		else{
			sq[i].style.display = "none";
		}
	}
});
hard.addEventListener("click", function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numSquare = 6;
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i=0; i<sq.length; i++)
	{
		
			sq[i].style.backgroundColor = colors[i];
			sq[i].style.display = "block";
		}
	}
);


resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	
	for(var i=0; i<sq.length; i++){
		sq[i].style.backgroundColor = colors[i];
	}
})

colorDisplay.textContent = pickedColor;

for(var i=0; i<sq.length; i++){
	sq[i].style.backgroundColor = colors[i];

	sq[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = clickedColor;


		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			resetButton.textContent = "New Colors";
			messageDisplay.style.color = "Black";
		}
	})
}

function changeColors(color){
	for(var i =0; i<sq.length; i++){
		sq[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i<num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+r+", "+g+", " + b + ")";
}