w66dow.onload = function () {
	Game.popcornCount = Number(getCookie("popcorn"));
	Game.stove.count = Number(getCookie("stove"));
	Game.microwave.count = Number(getCookie("microwave"));
	Game.vendingMachine.count = Number(getCookie("vendingMachine"));
	Game.oven.count = Number(getCookie("oven"));
	Game.theater.count = Number(getCookie("theater"));
	Game.factory.count = Number(getCookie("factory"));
	Game.mall.count = Number(getCookie("mall"));

	Game.stove.calcCost();
	Game.microwave.calcCost();
	Game.vendingMachine.calcCost();
	Game.oven.calcCost();
	Game.theater.calcCost();
	Game.factory.calcCost();
	Game.mall.calcCost();

	window.setInterval(function () {
		var now = new Date();
		var time = now.getTime();
		time += 157680000 * 1000; //5 years
		now.setTime(time);
		document.cookie = "popcorn=" + Math.floor(Game.popcornCount) + "; expires=" + now.toUTCString() + ";";
		document.cookie = "stove=" + Game.stove.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "microwave=" + Game.microwave.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "vendingMachine=" + Game.vendingMachine.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "oven=" + Game.oven.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "theater=" + Game.theater.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "factory=" + Game.factory.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "mall=" + Game.mall.count + "; expires=" + now.toUTCString() + ";";
		console.log("cookies saved");
	}, 5000);
	//IDEA: create Game instance in onload to stop player from playing before page loads
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

var Game = function () {
	this.popcornCount = 0;
	this.popcornPerSecond = 0;
	this.stove            = new Building(20, .2);
	this.microwave        = new Building(200, 1);
	this.vendingMachine   = new Building(6430, 15);
	this.oven             = new Building(48200, 67);
	this.theater          = new Building(428857, 359);
	this.factory          = new Building(2000765, 1344);
	this.mall             = new Building(50000001, 3111);
	this.inductionFurnace = new Building(631000631, 9452);
}

var Building = function (baseCost, pps) {
	this.count = 0;
	this.BASE_COST = baseCost;
	this.cost = this.BASE_COST;
	this.PPS = pps;
	this.buyBuilding = function () {
		if (Game.popcornCount - this.cost >= 0) {
			this.count++;
			Game.popcornCount -= this.cost;
			this.calcCost();
		}
	}
	this.sellBuilding = function () {
		if (this.count > 0) {
			this.count--;
			Game.popcornCount += this.cost * SELL_MULTIPLIER;
			this.calcCost();
		}
	}
	this.calcCost = function () {
		this.cost = Math.floor(this.BASE_COST * Math.pow(BUILDING_MULTIPLIER, this.count) + .5);
	}
}
var Game = new Game();

var BUILDING_MULTIPLIER = 1.16;
var SELL_MULTIPLIER = .5;

var poppedCount = 0;
popZone.addEventListener("click", function (event) {
	Game.popcornCount++;
	$(instruction).fadeOut(1000);
	var x = event.pageX, y = event.pageY;
	var leftBound = $("#popZone").position().left, topBound = $("#popZone").position().top, rightBound = $("#popZone").position().left + $("#popZone").width();
	if (!(x < leftBound || y < topBound || x > rightBound)) {
		var newPopcorn = document.createElement("img");
		var random15 = Math.floor(Math.random() * 15 + 1);
		var random360 = Math.floor(Math.random() * 360 + 1);
		if (dozeCheck.checked == true)
			random15 = 0;
		console.log();
		switch (random15) {
			case 1:
				newPopcorn.src = "images/popcorn1.png";
				x -= 125 / 2;
				y -= 116 / 2;
				break;
			case 2:
				newPopcorn.src = "images/popcorn2.png";
				x -= 125 / 2;
				y -= 102 / 2;
				break;
			case 3:
				newPopcorn.src = "images/popcorn3.png";
				x -= 125 / 2;
				y -= 102 / 2;
				break;
			case 4:
				newPopcorn.src = "images/popcorn4.png";
				x -= 122 / 2;
				y -= 125 / 2;
				break;
			case 5:
				newPopcorn.src = "images/popcorn5.png";
				x -= 117 / 2;
				y -= 125 / 2;
				break;
			case 6:
				newPopcorn.src = "images/popcorn6.png";
				x -= 125 / 2;
				y -= 105 / 2;
				break;
			case 7:
				newPopcorn.src = "images/popcorn7.png";
				x -= 125 / 2;
				y -= 93 / 2;
				break;
			case 8:
				newPopcorn.src = "images/popcorn8.png";
				x -= 111 / 2;
				y -= 125 / 2;
				break;
			case 9:
				newPopcorn.src = "images/popcorn9.png";
				x -= 119 / 2;
				y -= 125 / 2;
				break;
			case 10:
				newPopcorn.src = "images/popcorn10.png";
				x -= 125 / 2;
				y -= 102 / 2;
				break;
			case 11:
				newPopcorn.src = "images/popcorn11.png";
				x -= 125 / 2;
				y -= 85 / 2;
				break;
			case 12:
				newPopcorn.src = "images/popcorn12.png";
				x -= 125 / 2;
				y -= 115 / 2;
				break;
			case 13:
				newPopcorn.src = "images/popcorn13.png";
				x -= 125 / 2;
				y -= 87 / 2;
				break;
			case 14:
				newPopcorn.src = "images/popcorn14.png";
				x -= 125 / 2;
				y -= 104 / 2;
				break;
			case 15:
				newPopcorn.src = "images/popcorn15.png";
				x -= 108 / 2;
				y -= 125 / 2;
				break;
			default:
				newPopcorn.src = "images/suhailDoze.png";
				x -= 93 / 2;
				y -= 100 / 2;
				break;
		}
		newPopcorn.style.transform = "rotate(" + random360 + "deg)";
		newPopcorn.float = "true";
		newPopcorn.style.position = "absolute";
		newPopcorn.style.left = x + "px";
		newPopcorn.style.top = y + "px";
		newPopcorn.style.zIndex = -1;
		newPopcorn.id = "pop" + poppedCount;
		newPopcorn.className = "unselectable";
		popZone.appendChild(newPopcorn);
		fadePopcorn(poppedCount);
		poppedCount++;
	}
});
function fadePopcorn (count) {
	var id = "#pop" + (count - 50);
	$(id).fadeOut(3000);
}

var shown = true;
/*buildingDropdown.addEventListener("click", function () {
	console.log(document.getElementsByClassName("buildings"));
	var elements = document.getElementsByClassName("buildings");
	for (i = 0; i < elements.length; i++) {
		if (shown == true) {
			elements[i].style.display = "none";
			console.log("hide");
		} else {
			elements[i].style.display = "initial";
			console.log("show");
		}
	}

	if (shown == true) {
		stoveDisplay.style.display = "none";
		microwaveDisplay.style.display = "none";
		vendingMachineDisplay.style.display = "none";
		ovenDisplay.style.display = "none";
		theaterDisplay.style.display = "none";
		factoryDisplay.style.display = "none";
		mallDisplay.style.display = "none";
		inductionFurnaceDisplay.style.display = "none";
		console.log("hide");
	} else {
		stoveDisplay.style.display = "initial";
		microwaveDisplay.style.display = "initial";
		vendingMachineDisplay.style.display = "initial";
		ovenDisplay.style.display = "initial";
		theaterDisplay.style.display = "initial";
		factoryDisplay.style.display = "initial";
		mallDisplay.style.display = "initial";
		inductionFurnaceDisplay.style.display = "initial";
		console.log("show");
	}
	shown = !shown;
});*/
buildingDropdown.addEventListener("click", function () {
	$("#stoveDisplay").toggle();
});

stoveDisplay.addEventListener("click", function () {
	Game.stove.buyBuilding();
});
microwaveDisplay.addEventListener("click", function () {
	Game.microwave.buyBuilding();
});
vendingMachineDisplay.addEventListener("click", function () {
	Game.vendingMachine.buyBuilding();
});
ovenDisplay.addEventListener("click", function () {
	Game.oven.buyBuilding();
});
theaterDisplay.addEventListener("click", function () {
	Game.theater.buyBuilding();
});
factoryDisplay.addEventListener("click", function () {
	Game.factory.buyBuilding();
});
mallDisplay.addEventListener("click", function () {
	Game.mall.buyBuilding();
});
inductionFurnaceDisplay.addEventListener("click", function () {
	Game.inductionFurnace.buyBuilding();
})

function commas (x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.setInterval(function () {
	if (document.visibilityState == "hidden") return;
	popcornDisplay.innerHTML = commas(Math.floor(Game.popcornCount));
	Game.popcornPerSecond = 
		(Game.stove.count * Game.stove.PPS) +
		(Game.microwave.count * Game.microwave.PPS) +
		(Game.vendingMachine.count * Game.vendingMachine.PPS) +
		(Game.oven.count * Game.oven.PPS) +
		(Game.theater.count * Game.theater.PPS) +
		(Game.factory.count * Game.factory.PPS) +
		(Game.mall.count * Game.mall.PPS) +
		(Game.inductionFurnace.count * Game.inductionFurnace.PPS);
	popcornPerSecondDisplay.innerHTML = commas(Math.round(Game.popcornPerSecond * 10) / 10) + " Popcorn/Second";
	title.innerHTML = commas(Math.floor(Game.popcornCount)) + " Popcorn | Popcorn Clicker";

	stoveCountDisplay.innerHTML = "Stove: " + Game.stove.count;
	stoveCostDisplay.innerHTML = "Cost: " + commas(Game.stove.cost);
	if (Game.popcornCount - Game.stove.cost >= 0)
		stoveDisplay.style = "background-color: blue; cursor: pointer";
	else
		stoveDisplay.style = "background-color: #000066; cursor: auto";

	microwaveCountDisplay.innerHTML = "Microwave: " + Game.microwave.count;
	microwaveCostDisplay.innerHTML = "Cost: " + commas(Game.microwave.cost);
	if (Game.popcornCount - Game.microwave.cost >= 0)
		microwaveDisplay.style = "background-color: blue; cursor: pointer";
	else
		microwaveDisplay.style = "background-color: #000066; cursor: auto";

	vendingMachineCountDisplay.innerHTML = "Vending Machine: " + Game.vendingMachine.count;
	vendingMachineCostDisplay.innerHTML = "Cost: " + commas(Game.vendingMachine.cost);
	if (Game.popcornCount - Game.vendingMachine.cost >= 0)
		vendingMachineDisplay.style = "background-color: blue; cursor: pointer";
	else
		vendingMachineDisplay.style = "background-color: #000066; cursor: auto";

	ovenCountDisplay.innerHTML = "Oven: " + Game.oven.count;
	ovenCostDisplay.innerHTML = "Cost: " + commas(Game.oven.cost);
	if (Game.popcornCount - Game.oven.cost >= 0)
		ovenDisplay.style = "background-color: blue; cursor: pointer";
	else
		ovenDisplay.style = "background-color: #000066; cursor: auto";


	theaterCountDisplay.innerHTML = "Theater: " + Game.theater.count;
	theaterCostDisplay.innerHTML = "Cost: " + commas(Game.theater.cost);
	if (Game.popcornCount - Game.theater.cost >= 0)
		theaterDisplay.style = "background-color: blue; cursor: pointer";
	else
		theaterDisplay.style = "background-color: #000066; cursor: auto";

	factoryCountDisplay.innerHTML = "Factory: " + Game.factory.count;
	factoryCostDisplay.innerHTML = "Cost: " + commas(Game.factory.cost);
	if (Game.popcornCount - Game.factory.cost >= 0)
		factoryDisplay.style = "background-color: blue; cursor: pointer";
	else
		factoryDisplay.style = "background-color: #000066; cursor: auto";

	mallCountDisplay.innerHTML = "Mall: " + Game.mall.count;
	mallCostDisplay.innerHTML = "Cost: " + commas(Game.mall.cost);
	if (Game.popcornCount - Game.mall.cost >= 0)
		mallDisplay.style = "background-color: blue; cursor: pointer";
	else
		mallDisplay.style = "background-color: #000066; cursor: auto";

	inductionFurnaceCountDisplay.innerHTML = "Induction Furnace: " + Game.inductionFurnace.count;
	inductionFurnaceCostDisplay.innerHTML = "Cost: " + commas(Game.inductionFurnace.cost);
	if (Game.popcornCount - Game.inductionFurnace.cost >= 0)
		inductionFurnaceDisplay.style = "background-color: blue; cursor: pointer";
	else
		inductionFurnaceDisplay.style = "background-color: #000066; cursor: auto";
}, 5);

//default: when site is in viewport
window.setInterval(function () {
	if (document.visibilityState == "hidden") return;
	Game.popcornCount += Game.popcornPerSecond / 50;
}, 20);

//when site isn't in viewport
window.setInterval(function () {
	if (document.visibilityState == "visible") return;
	Game.popcornCount += Game.popcornPerSecond;
	popcornDisplay.innerHTML = commas(Math.floor(Game.popcornCount));
}, 1000);

//reset button
reset.addEventListener("click", function () {
	var validate = confirm("Are you sure that you want to reset your Popcorn Clicker save (Satan will hunt you if you don't keep popping popcorn)?");
	if (validate) {
		document.cookie = "popcorn=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "stove=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "microwave=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "vendingMachine=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "oven=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "theater=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "factory=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "mall=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		location.reload();
	}
});

//Konami Code John Cena
var inputs = [];
var completed = false;
document.addEventListener("keydown", function (event) {
	inputs.push(event.keyCode);
	for (i = 0; i < inputs.length; i++) {
		if (inputs[i]     == 38) { //up
		if (inputs[i + 1] == 38) { //up
		if (inputs[i + 2] == 40) { //down
		if (inputs[i + 3] == 40) { //down
		if (inputs[i + 4] == 37) { //left
		if (inputs[i + 5] == 39) { //right
		if (inputs[i + 6] == 37) { //left
		if (inputs[i + 7] == 39) { //right
		if (inputs[i + 8] == 66) { //b
		if (inputs[i + 9] == 65) { //a
		if (inputs[i +10] == 13) { //enter
		if (!completed) {
			completed = true;
			wrapper.style.display = "none";
			johnCenaGIF.style.display = "block";
			johnCenaMPEG.play();
		}}}}}}}}}}}}
	}
});

popcornDisplay.addEventListener("mousemove", function () {
	//console.log("wow");
});
