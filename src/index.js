import Phaser from "phaser";
import logoImg from "./assets/logo.png";

import Boot from "./assets/scenes/Boot.js";
import Game from "./assets/scenes/Game.js";

const config = {
	type: Phaser.AUTO,
	parent: "phaser-example",
	width: 800,
	height: 600,
	scene: [
		Boot,
		Game
	],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { x: 0, y: 0 },
			fps: 60
		}
	}
};

const game = new Phaser.Game(config);