window.onload = function () {
	Game.popcorn = Number(getCookie("popcorn"));
	Game.stove.count = Number(getCookie("stove"));
	Game.microwave.count = Number(getCookie("microwave"));
	Game.vendingMachine.count = Number(getCookie("vendingMachine"));
	Game.oven.count = Number(getCookie("oven"));
	Game.theater.count = Number(getCookie("theater"));
	Game.factory.count = Number(getCookie("factory"));
	Game.mall.count = Number(getCookie("mall"));
	Game.inductionFurnace.count = Number(getCookie("inductionFurnace"));
	Game.clicker.count = Number(getCookie("clicker"));
	Game.stoveUpgrade.count = Number(getCookie("stoveUpgrade"));
	Game.microwaveUpgrade.count = Number(getCookie("microwaveUpgrade"));
	Game.vendingMachineUpgrade.count = Number(getCookie("vendingMachineUpgrade"));
	Game.ovenUpgrade.count = Number(getCookie("ovenUpgrade"));
	Game.theaterUpgrade.count = Number(getCookie("theaterUpgrade"));
	Game.factoryUpgrade.count = Number(getCookie("factoryUpgrade"));
	Game.mallUpgrade.count = Number(getCookie("mallUpgrade"));
	Game.inductionFurnaceUpgrade.count = Number(getCookie("inductionFurnaceUpgrade"));
	poppersOpen = (getCookie("poppersOpen") == "false");
	upgradesOpen = (getCookie("upgradesOpen") == "false");

	Game.stove.calcCost();
	Game.microwave.calcCost();
	Game.vendingMachine.calcCost();
	Game.oven.calcCost();
	Game.theater.calcCost();
	Game.factory.calcCost();
	Game.mall.calcCost();
	Game.inductionFurnace.calcCost();
	Game.clicker.calcCost();
	Game.calcClick();
	popperDropdownFunc();
	upgradeDropdownFunc();


	window.setInterval(function () {
		var now = new Date();
		var time = now.getTime();
		time += 157680000 * 1000; //5 years
		now.setTime(time);
		document.cookie = "popcorn=" + Math.floor(Game.popcorn) + "; expires=" + now.toUTCString() + ";";
		document.cookie = "popcorn=" + Game.coins + "; expires=" + now.toUTCString() + ";";
		document.cookie = "stove=" + Game.stove.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "microwave=" + Game.microwave.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "vendingMachine=" + Game.vendingMachine.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "oven=" + Game.oven.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "theater=" + Game.theater.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "factory=" + Game.factory.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "mall=" + Game.mall.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "inductionFurnace=" + Game.inductionFurnace.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "clicker=" + Game.clicker.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "stoveUpgrade=" + Game.stoveUpgrade.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "microwaveUpgrade=" + Game.microwaveUpgrade.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "vendingMachineUpgrade=" + Game.vendingMachineUpgrade.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "ovenUpgrade=" + Game.ovenUpgrade.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "theaterUpgrade=" + Game.theaterUpgrade.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "mallUpgrade=" + Game.mallUpgrade.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "factoryUpgrade=" + Game.factoryUpgrade.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "inductionFurnaceUpgrade=" + Game.inductionFurnaceUpgrade.count + "; expires=" + now.toUTCString() + ";";
		document.cookie = "poppersOpen=" + poppersOpen + "; expires=" + now.toUTCString() + ";";
		document.cookie = "upgradesOpen=" + upgradesOpen + "; expires=" + now.toUTCString() + ";";
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
	this.popcorn = 0;
	this.popcornPerSecond = 0;
	this.popcornPerClick = 1;
	this.coins = 0;
	this.coinsPerShipment = 0;
	this.stove                   = new Popper(20, .2);
	this.microwave               = new Popper(200, 1);
	this.vendingMachine          = new Popper(6430, 15);
	this.oven                    = new Popper(48200, 67);
	this.theater                 = new Popper(428857, 359);
	this.mall                    = new Popper(2000765, 1344);
	this.factory                 = new Popper(50000001, 3111);
	this.inductionFurnace        = new Popper(631000631, 9452);
	this.deliveryBoy             = new Shipment();
	//this.
	this.clicker                 = new ClickerUpgrade();
	this.stoveUpgrade            = new PopperUpgrade(5624, Game.stove);
	this.microwaveUpgrade        = new PopperUpgrade(47252, Game.microwave);
	this.vendingMachineUpgrade   = new PopperUpgrade(1104029, Game.vendingMachine);
	this.ovenUpgrade             = new PopperUpgrade(8932995, Game.oven);
	this.theaterUpgrade          = new PopperUpgrade(35849372, Game.theater);
	this.mallUpgrade             = new PopperUpgrade(100000010, Game.mall);
	this.factoryUpgrade          = new PopperUpgrade(9876543201, Game.factory);
	this.inductionFurnaceUpgrade = new PopperUpgrade(50322182045, Game.inductionFurnace);
	this.calcClick = function () {
		this.popcornPerClick = Math.pow(CLICK_MULTIPLIER, this.clicker.count);
	}
}
var Popper = function (baseCost, pps) {
	this.count = 0;
	this.BASE_COST = baseCost;
	this.cost = this.BASE_COST;
	this.PPS = pps;
	this.buyPopper = function () {
		if (Game.coins - this.cost >= 0) {
			this.count++;
			Game.coins -= this.cost;
			this.calcCost();
		}
	}
	this.sellPopper = function () {
		if (this.count > 0) {
			this.count--;
			Game.coins += this.cost * SELL_MULTIPLIER;
			this.calcCost();
		}
	}
	this.calcCost = function () {
		this.cost = Math.floor(this.BASE_COST * Math.pow(POPPER_COST_MULTIPLIER, this.count) + .5);
	}
}
var Shipment = function (baseCost, cps) {
	this.count = 0;
	this.BASE_COST = baseCost;
	this.cost = this.BASE_COST;
	this.CPS = cps;
	this.buyShipment = function () {
		if (Game.coins - this.cost >= 0) {
			this.count++;
			Game.coins -= this.cost;
			this.calcCost();
		}
	}
	this.sellShipment = function () {
		if (this.count > 0) {
			this.count--;
			Game.coins += this.cost * SELL_MULTIPLIER;
			this.calcCost();
		}
	}
	this.calcCost = function () {
		this.cost = 0; //TODO
	}
}
var ClickerUpgrade = function () {
	this.count = 0;
	this.BASE_COST = 1000;
	this.cost = this.BASE_COST;
	this.buyUpgrade = function () {
		if (Game.coins - this.cost >= 0) {
			this.count++;
			Game.coins -= this.cost;
			Game.calcClick();
			this.calcCost();
		}
	}
	this.calcCost = function () {
		this.cost = this.BASE_COST * Math.pow(CLICK_MULTIPLIER, this.count);
	}
}
var PopperUpgrade = function (cost, popper) {
	this.count = 0;
	this.BASE_COST = cost;
	this.cost = this.BASE_COST;
	this.buyUpgrade = function () {
		if (Game.coins - this.cost >= 0) {
			this.count++;
			Game.coins -= this.cost;

			this.calcCost();
		}
	}
	this.calcCost = function () {
		this.cost = this.BASE_COST * Math.pow(POPPER_UPGRADE_MULTIPLIER, this.count);
	}
}
var Game = new Game();

var POPPER_COST_MULTIPLIER = 1.16;
var SELL_MULTIPLIER = .5;
var CLICK_MULTIPLIER = 2;
var POPPER_UPGRADE_MULTIPLIER = 1.79;

var poppedCount = 0;
popZone.addEventListener("click", function (event) {
	Game.popcorn += Game.popcornPerClick;
	$(instruction).fadeOut(1000);
	var x = event.pageX, y = event.pageY;
	var leftBound = $("#popZone").position().left, topBound = $("#popZone").position().top, rightBound = $("#popZone").position().left + $("#popZone").width();
	if (!(x < leftBound || y < topBound || x > rightBound)) {
		var newPopcorn = document.createElement("img");
		var random15 = Math.floor(Math.random() * 15 + 1);
		var random360 = Math.floor(Math.random() * 360 + 1);
		if (dozeCheck.checked)
			random15 = -1;
		if (trumpCheck.checked)
			random15 = -2;
		if (hillaryCheck.checked)
			random15 = -3;
		if (harambeCheck.checked)
			random15 = -4;
		switch (random15) {
			case 1:
				newPopcorn.src = "images/popcorn1.png"; x -= 125 / 2; y -= 116 / 2;
				break;
			case 2:
				newPopcorn.src = "images/popcorn2.png"; x -= 125 / 2; y -= 102 / 2;
				break;
			case 3:
				newPopcorn.src = "images/popcorn3.png"; x -= 125 / 2; y -= 102 / 2;
				break;
			case 4:
				newPopcorn.src = "images/popcorn4.png"; x -= 122 / 2; y -= 125 / 2;
				break;
			case 5:
				newPopcorn.src = "images/popcorn5.png"; x -= 117 / 2; y -= 125 / 2;
				break;
			case 6:
				newPopcorn.src = "images/popcorn6.png"; x -= 125 / 2; y -= 105 / 2;
				break;
			case 7:
				newPopcorn.src = "images/popcorn7.png"; x -= 125 / 2; y -= 93 / 2;
				break;
			case 8:
				newPopcorn.src = "images/popcorn8.png"; x -= 111 / 2; y -= 125 / 2;
				break;
			case 9:
				newPopcorn.src = "images/popcorn9.png"; x -= 119 / 2; y -= 125 / 2;
				break;
			case 10:
				newPopcorn.src = "images/popcorn10.png"; x -= 125 / 2; y -= 102 / 2;
				break;
			case 11:
				newPopcorn.src = "images/popcorn11.png"; x -= 125 / 2; y -= 85 / 2;
				break;
			case 12:
				newPopcorn.src = "images/popcorn12.png"; x -= 125 / 2; y -= 115 / 2;
				break;
			case 13:
				newPopcorn.src = "images/popcorn13.png"; x -= 125 / 2; y -= 87 / 2;
				break;
			case 14:
				newPopcorn.src = "images/popcorn14.png"; x -= 125 / 2; y -= 104 / 2;
				break;
			case 15:
				newPopcorn.src = "images/popcorn15.png"; x -= 108 / 2; y -= 125 / 2;
				break;
			case -1:
				newPopcorn.src = "images/suhailDoze.png"; x -= 93 / 2; y -= 100 / 2;
				break;
			case -2:
				newPopcorn.src = "images/trump.png"; x -= 125 / 2; y -= 125 / 2;
				break;
			case -3:
				newPopcorn.src = "images/hillary.png"; x -= 115 / 2; y -= 125 / 2;
				break;
			case -4:
				newPopcorn.src = "images/harambe.png"; x -= 125 / 2; y -= 125 / 2;
				break;
			default:
				console.log("Error choosing popcorn images");
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
		//fadePopcorn(poppedCount);
		poppedCount++;
	}
});
function fadePopcorn (count) {
	var id = "#pop" + (count - 150);
	$(id).fadeOut(3000);
	id = "#pop" + count;
	setTimeout(function () {
		$(id).fadeOut(3000);
	}, 90000);
}

var poppersOpen = false;
var upgradesOpen = false;
function popperDropdownFunc () {
	if (poppersOpen == true) {
		poppers.style.display = "none";
		popperDropdownImg.src = "images/downArrow.png";
	} else {
		poppers.style.display = "";
		popperDropdownImg.src = "images/upArrow.png";
	}
	poppersOpen = !poppersOpen;
}
function upgradeDropdownFunc () {
	if (upgradesOpen == true) {
		upgrades.style.display = "none";
		upgradeDropdownImg.src = "images/downArrow.png"
	} else {
		upgrades.style.display = "";
		upgradeDropdownImg.src = "images/upArrow.png"
	}
	upgradesOpen = !upgradesOpen;
}
popperDropdown.addEventListener("click", function () {
	popperDropdownFunc();
});
upgradeDropdown.addEventListener("click", function () {
	upgradeDropdownFunc();
});

function addPopperEventListeners (popper, popperDisplay, popperSellDisplay) {
	popperDisplay.addEventListener("click", function (event) {
		if (event.target == popperSellDisplay) return;
		popper.buyPopper();
	});
	popperDisplay.addEventListener("mouseenter", function () {
		popperSellDisplay.style.visibility = "visible";
	});
	popperDisplay.addEventListener("mouseleave", function () {
		popperSellDisplay.style.visibility = "hidden";
	});
	popperSellDisplay.addEventListener("click", function () {
		popper.sellPopper();
	});
}
addPopperEventListeners(Game.stove, stoveDisplay, stoveSellDisplay);
addPopperEventListeners(Game.microwave, microwaveDisplay, microwaveSellDisplay);
addPopperEventListeners(Game.vendingMachine, vendingMachineDisplay, vendingMachineSellDisplay);
addPopperEventListeners(Game.oven, ovenDisplay, ovenSellDisplay);
addPopperEventListeners(Game.theater, theaterDisplay, theaterSellDisplay);
addPopperEventListeners(Game.mall, mallDisplay, mallSellDisplay);
addPopperEventListeners(Game.factory, factoryDisplay, factorySellDisplay);
addPopperEventListeners(Game.inductionFurnace, inductionFurnaceDisplay, inductionFurnaceSellDisplay);
function addShipmentEventListeners (shipment, shipmentDisplay, shipmentSellDisplay) {
	shipmentDisplay.addEventListener("click", function (event) {
		if (event.target == shipmentSellDisplay) return;
		shipment.buyShipment();
	});
	shipmentDisplay.addEventListener("mouseenter", function () {
		shipmentSellDisplay.style.visibility = "visible";
	});
	shipmentDisplay.addEventListener("mouseleave", function () {
		shipmentSellDisplay.style.visibility = "hidden";
	});
	shipmentSellDisplay.addEventListener("click", function () {
		shipment.sellShipment();
	});
}

function addPopperUpgradeEventListeners (popperUpgrade, popperUpgradeDisplay) {
	popperUpgradeDisplay.addEventListener("click", function () {
		popperUpgrade.buyUpgrade();
	});
}
addPopperUpgradeEventListeners(Game.stoveUpgrade, stoveUpgradeDisplay);
addPopperUpgradeEventListeners(Game.microwaveUpgrade, microwaveUpgradeDisplay);
addPopperUpgradeEventListeners(Game.vendingMachineUpgrade, vendingMachineUpgradeDisplay);
addPopperUpgradeEventListeners(Game.ovenUpgrade, ovenUpgradeDisplay);
addPopperUpgradeEventListeners(Game.theaterUpgrade, theaterUpgradeDisplay);
addPopperUpgradeEventListeners(Game.mallUpgrade, mallUpgradeDisplay);
addPopperUpgradeEventListeners(Game.factoryUpgrade, factoryUpgradeDisplay);
addPopperUpgradeEventListeners(Game.inductionFurnaceUpgrade, inductionFurnaceUpgradeDisplay);

clickerDisplay.addEventListener("click", function () {
	if (Game.clicker.buyUpgrade() == true) {
		clicker1Display.style.display = "none";
	}
});

function commas (x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function romanNumerals (x) { //great example of recursion
	if (x >= 1000) {
		return "M" + romanNumerals(x - 1000);
	} else if (x >= 500) {
		if (x == 999) {
			return "IM" + romanNumerals(x - 999);
		} else {
			return "D" + romanNumerals(x - 500);
		}
	} else if (x >= 100) {
		if (x == 499) {
			return "ID" + romanNumerals(x - 499);
		} else if (x >= 400) {
			return "CD" + romanNumerals(x - 400);
		} else {
			return "C" + romanNumerals(x - 100);
		}
	} else if (x >= 50) {
		if (x == 99) {
			return "IC" + romanNumerals(x - 99);
		} else {
			return "L" + romanNumerals(x - 50);
		}
	} else if (x >= 10) {
		if (x == 49) {
			return "IL" + romanNumerals(x - 49);
		} else if (x >= 40) {
			return "XL" + romanNumerals(x - 40);
		} else {
			return "X" + romanNumerals(x - 10);
		}
	} else if (x >= 5) {
		if (x == 9) {
			return "IX" + romanNumerals(x - 9);
		} else {
			return "V" + romanNumerals(x - 5);
		}
	} else if (x >= 1) {
		if (x == 4) {
			return "IV" + romanNumerals(x - 4);
		} else {
			return "I" + romanNumerals(x - 1);
		}
	} else {
		return "";
	}
}

//these functions are outside of the setInterval to prevent them being recreated every time the interval is run
function updateStoreItemDisplay (name, count, cost, display, countDisplay, costDisplay, sellDisplay) {
	countDisplay.innerHTML = name + ": " + count;
	costDisplay.innerHTML = "Cost: " + commas(cost) + " coins";
	if (Game.popcorn - cost >= 0) {
		display.style.backgroundColor = "blue";
		display.style.cursor = "pointer";
	} else {
		display.style.backgroundColor = "#000066";
		display.style.cursor = "default";
	}
	if (count > 0) {
		sellDisplay.style.backgroundColor = "red";
		sellDisplay.style.color = "white";
		sellDisplay.style.cursor = "pointer";
	} else {
		sellDisplay.style.backgroundColor = "#990000";
		sellDisplay.style.color = "#999999";
		sellDisplay.style.cursor = "default";
	}
}
function updatePopperUpgradeDisplay (name, count, cost, display, countDisplay, costDisplay) {
	countDisplay.innerHTML = name + " " + romanNumerals(count + 1);
	costDisplay.innerHTML = "Cost: " + commas(cost) + " coins";
	if (Game.popcorn - cost >= 0) {
		display.style.backgroundColor = "blue";
		display.style.cursor = "pointer";
	} else {
		display.style.backgroundColor = "#000066";
		display.style.cursor = "default";
	}
}
window.setInterval(function () {
	popcornDisplay.innerHTML = commas(Math.floor(Game.popcorn));
	Game.popcornPerSecond = 
		(Game.stove.count * Game.stove.PPS) +
		(Game.microwave.count * Game.microwave.PPS) +
		(Game.vendingMachine.count * Game.vendingMachine.PPS) +
		(Game.oven.count * Game.oven.PPS) +
		(Game.theater.count * Game.theater.PPS) +
		(Game.mall.count * Game.mall.PPS) +
		(Game.factory.count * Game.factory.PPS) +
		(Game.inductionFurnace.count * Game.inductionFurnace.PPS);
	popcornPerSecondDisplay.innerHTML = commas(Math.round(Game.popcornPerSecond * 10) / 10) + " Popcorn/Second";
	coinDisplay.innerHTML = commas(Game.coins);
	coinPerShipmentDisplay.innerHTML = commas(Game.coinsPerShipment); //TODO IMPLEMENT IN HTML
	title.innerHTML = commas(Math.floor(Game.popcorn)) + "P, " + commas(Math.floor(Game.coins)) + "C | Popcorn Clicker";

	updateStoreItemDisplay("Stove", Game.stove.count, Game.stove.cost, stoveDisplay, stoveCountDisplay, stoveCostDisplay, stoveSellDisplay);
	updateStoreItemDisplay("Microwave", Game.microwave.count, Game.microwave.cost, microwaveDisplay, microwaveCountDisplay, microwaveCostDisplay, microwaveSellDisplay);
	updateStoreItemDisplay("Vending Machine", Game.vendingMachine.count, Game.vendingMachine.cost, vendingMachineDisplay, vendingMachineCountDisplay, vendingMachineCostDisplay, vendingMachineSellDisplay);
	updateStoreItemDisplay("Oven", Game.oven.count, Game.oven.cost, ovenDisplay, ovenCountDisplay, ovenCostDisplay, ovenSellDisplay);
	updateStoreItemDisplay("Theater", Game.theater.count, Game.theater.cost, theaterDisplay, theaterCountDisplay, theaterCostDisplay, theaterSellDisplay);
	updateStoreItemDisplay("Mall", Game.mall.count, Game.mall.cost, mallDisplay, mallCountDisplay, mallCostDisplay, mallSellDisplay);
	updateStoreItemDisplay("Factory", Game.factory.count, Game.factory.cost, factoryDisplay, factoryCountDisplay, factoryCostDisplay, factorySellDisplay);
	updateStoreItemDisplay("Induction Furnace", Game.inductionFurnace.count, Game.inductionFurnace.cost, inductionFurnaceDisplay, inductionFurnaceCountDisplay, inductionFurnaceCostDisplay, inductionFurnaceSellDisplay);

	clickerCountDisplay.innerHTML = "Clicker " + romanNumerals(Game.clicker.count + 1);
	clickerCostDisplay.innerHTML = "Cost: " + commas(Game.clicker.cost);
	popZone.title = "Each click pops " + commas(Game.popcornPerClick) + " popcorn";
	if (Game.popcorn - Game.clicker.cost >= 0) {
		clickerDisplay.style.backgroundColor = "blue";
		clickerDisplay.style.cursor = "pointer";
	} else {
		clickerDisplay.style.backgroundColor = "#000066";
		clickerDisplay.style.cursor = "auto";
	}

	updatePopperUpgradeDisplay("Stove", Game.stoveUpgrade.count, Game.stoveUpgrade.cost, stoveUpgradeDisplay, stoveUpgradeCountDisplay, stoveUpgradeCostDisplay);
	updatePopperUpgradeDisplay("Microwave", Game.microwaveUpgrade.count, Game.microwaveUpgrade.cost, microwaveUpgradeDisplay, microwaveUpgradeCountDisplay, microwaveUpgradeCostDisplay);
	updatePopperUpgradeDisplay("Vending Machine", Game.vendingMachineUpgrade.count, Game.vendingMachineUpgrade.cost, vendingMachineUpgradeDisplay, vendingMachineUpgradeCountDisplay, vendingMachineUpgradeCostDisplay);
	updatePopperUpgradeDisplay("Oven", Game.ovenUpgrade.count, Game.ovenUpgrade.cost, ovenUpgradeDisplay, ovenUpgradeCountDisplay, ovenUpgradeCostDisplay);
	updatePopperUpgradeDisplay("Theater", Game.theaterUpgrade.count, Game.theaterUpgrade.cost, theaterUpgradeDisplay, theaterUpgradeCountDisplay, theaterUpgradeCostDisplay);
	updatePopperUpgradeDisplay("Mall", Game.mallUpgrade.count, Game.mallUpgrade.cost, mallUpgradeDisplay, mallUpgradeCountDisplay, mallUpgradeCostDisplay);
	updatePopperUpgradeDisplay("Factory", Game.factoryUpgrade.count, Game.factoryUpgrade.cost, factoryUpgradeDisplay, factoryUpgradeCountDisplay, factoryUpgradeCostDisplay);
	updatePopperUpgradeDisplay("Induction Furnace", Game.inductionFurnaceUpgrade.count, Game.inductionFurnaceUpgrade.cost, inductionFurnaceUpgradeDisplay, inductionFurnaceUpgradeCountDisplay, inductionFurnaceUpgradeCostDisplay);
}, 5);


//default: when site is in viewport
window.setInterval(function () {
	if (document.visibilityState == "hidden") return;
	Game.popcorn += Game.popcornPerSecond / 50;
}, 20);

//when site isn't in viewport
window.setInterval(function () {
	if (document.visibilityState == "visible") return;
	Game.popcorn += Game.popcornPerSecond;
	popcornDisplay.innerHTML = commas(Math.floor(Game.popcorn));
}, 1000);

//reset button
reset.addEventListener("click", function () {
	var validate = confirm("Are you sure that you want to reset your Popcorn Clicker save (Satan will hunt you if you don't keep popping popcorn)?");
	if (validate) {
		document.cookie = "popcorn=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "coins=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "stove=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "microwave=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "vendingMachine=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "oven=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "theater=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "factory=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "mall=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "inductionFurnace=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "clicker=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "stoveUpgrade=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "microwaveUpgrade=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "vendingMachineUpgrade=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "ovenUpgrade=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "theaterUpgrade=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "factoryUpgrade=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "mallUpgrade=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "inductionFurnaceUpgrade=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "popperDropdown=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		document.cookie = "upgradeDropdown=0; expires=Sun, 31 Dec 2000 16:02:00 GMT-0400;";
		location.reload();
	}
});
//freePopcorn for debug
freePopcorn.addEventListener("click", function () {
	Game.popcorn += 1000000;
	console.log($("coinDisplay").height());
});



//Passcode checker
var inputs = [];
var completed = false;
document.addEventListener("keydown", function (event) {
	inputs.push(event.keyCode);
	for (i = 0; i < inputs.length; i++) {
		//Konami code for John Cena
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
		//"faces" code
		if (inputs[i]     == 70) { //f
		if (inputs[i + 1] == 65) { //a
		if (inputs[i + 2] == 67) { //c
		if (inputs[i + 3] == 69) { //e
		if (inputs[i + 4] == 83) { //s
			popcornSelect.style.display = "initial";
		}}}}}
	}
});

popcornDisplay.addEventListener("mousemove", function () {
	//console.log("wow");
});
