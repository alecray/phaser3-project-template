import Entity from "./entity.js";
import * as constants from  '../util/constants.js';
export default class Player extends Entity {
	constructor(scene, x, y) {
		super(scene,x,y,'player');
		this.speed = constants.BASE_PLAYER_SPEED;
	}
	preload(){}

	/*
	Create function
	Called when the tile is created
	*/
	create(){
	}

	/*
	getCoordsAsString function
	Gets the coordinates as a string, helper function
	@return the coordinates of the building as string (x,y)
	*/
	getCoordsAsString(){
		var coords = "(" + this.x + "," + this.y + ")";
		return coords;
	}

	getCenterX(){
		return this.x + this.width/2;
	}

	getCenterY(){
		return this.y - this.height/2;
	}
}