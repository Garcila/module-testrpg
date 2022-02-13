const Potion = require("./Potion");

class Player {
	constructor(name = "") {
		this.name = name;
		this.health = Math.floor(Math.random() * 10 + 95);
		this.strength = Math.floor(Math.random() * 7 + 7);
		this.agility = Math.floor(Math.random() * 5 + 7);
		this.inventory = [new Potion("health"), new Potion()];
	}
	getStats() {
		return {
			potions: this.potions,
			health: this.health,
			strength: this.strength,
			agility: this.agility,
		};
	}
	getInventory() {
		if (this.inventory.length === 0) {
			return false;
		}
		return this.inventory;
	}
	getHealth() {}
	isAlive() {}
	addPotion() {}
	usePotion() {}
	reduceHealth() {}
}

// 	if (this.name === "health") {
// 		this.value = Math.floor(Math.random() * 10 + 30);
// 	} else {
// 		this.value = Math.floor(Math.random() * 5 + 7);
// 	}
// }

module.exports = Player;
