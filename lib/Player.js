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
	getHealth() {
		return `${this.name}'s health is now ${this.health}`;
	}

	isAlive() {
		if (this.health > 0) {
			return true;
		} else {
			return false;
		}
	}
	addPotion() {}
	usePotion() {}
	reduceHealth(healthDamage) {
		this.health -= healthDamage;
		if (this.health < 0) {
			this.health = 0;
		}
	}
}

module.exports = Player;
