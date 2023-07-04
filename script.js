var combos={
	"wood": ["wood"],
	"day": ["moon"],
	"moon": ["day"],
	"one": ["one"],
	"woman": ["horse","son","also"]
}

var combo = []

function increaseScore(){
	var score = Number(document.getElementById("score").innerHTML.slice(6))
	score = score + 1
	document.getElementById("score").innerHTML = "Score: " + String(score)
}

function placeCursor(image) {
	var d = document.getElementById("cursor");
	let elem = document.querySelector(image);
	let rect = elem.getBoundingClientRect();
	d.style.left = rect["x"]+'px';
	d.style.top = rect["y"]+'px';
	console.log(rect)
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function changeImage(image){
	images = ["also","day","horse","moon","mouth","one","son","woman","wood"]
	let newImage = images[getRndInteger(0,images.length-1)];
	document.getElementById(image).src=`./${newImage}.png`
	console.log(newImage);
}

function changeImage2(image){
	images = ["also","day","horse","moon","mouth","one","son","woman","wood"]
	let newImage = images[getRndInteger(0,images.length-1)];
	document.querySelector(image).src=`./${newImage}.png`
	console.log(newImage);
}

function getWord(image,arr){
	let path = document.querySelector(image).src;
	var word = path.slice(0,-4).split("/").pop()
	arr.push([image,word]);
	console.log(image,word);
}

function logCombo(arr){
	console.log(arr[0],arr[1])
}

function doSomething(image,arr,combos){
	placeCursor(image);
	getWord(image,arr);
	logCombo(arr);
	if (arr.length === 2){
		if (combos[arr[0][1]].includes(arr[1][1])){
			increaseScore();
			changeImage2(arr[0][0]);
			changeImage2(arr[1][0]);
		}
		arr.length = 0;
		console.log(arr);
	}
}


for (let i = 1; i < 10; i++) {
	changeImage(`image${i}`)
	document.getElementById(`image${i}`).addEventListener("click",function(){doSomething(`#image${i}`,combo,combos)});
}



console.log("skdjh")

