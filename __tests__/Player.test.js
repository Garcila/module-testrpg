const Potion = require("../lib/Potion");
const Player = require("../lib/Player.js");

jest.mock("../lib/Potion");

test("creates a random player object", () => {
	const player = new Player("Pepito");

	expect(player.name).toBe("Pepito");
	expect(player.health).toEqual(expect.any(Number));
	expect(player.strength).toEqual(expect.any(Number));
	expect(player.agility).toEqual(expect.any(Number));
	expect(player.inventory).toEqual(
		expect.arrayContaining([expect.any(Object)])
	);
});
