import * as constants from  '../util/constants.js';
export default class Entity extends Phaser.GameObjects.Sprite {
	constructor(scene, x, y, sprite) {
		super(scene, x, y, sprite);
		this.scene = scene;
		this.scene.add.existing(this);
		this.scene.physics.world.enableBody(this, 0);
	}
}