import Tile from "./tile.js";
export default class TileGrass extends Tile {
	constructor(scene, x, y) {
		super(scene,x,y,'grassTile');
		this.width = 50;
		this.height = 50;
	}
	preload(){}

	/*
	Create function
	Called when the tile is created
	*/
	create(){
	}
}