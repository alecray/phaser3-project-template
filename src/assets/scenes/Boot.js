import * as constants from  '../util/constants.js';

export default class Boot extends Phaser.Scene {
	constructor() {
		super({ key: "Boot" });
	}

	preload() {
		//this.loadingBar();
		this.loadImages();
		
	}

	create(){
		this.scene.start("Game", this);
	}

	loadImages(){
		let path = './src/assets/'
		this.load.image('grassTile', path + 'img/env/grassTile.png');
		this.load.image('player', path + 'img/player/player.png');
		this.load.image('monster', path + 'img/monsters/monster.png');
		this.load.image('click', path + 'img/control/click.png');

	}

	loadingBar(){
		//this.scale.startFullscreen();
	  	// Load spritesheet
	  	//this.load.multiatlas(constants.SPRITESHEET, '../assets/sprites.json', '../assets/');
	  	// ############ Loading Bar ##############
	  	/*var offsetX = constants.GAME_WIDTH/6;
	  	var offsetY = constants.GAME_HEIGHT/2;
	  	var smidge = constants.GAME_WIDTH/50;
	  	var barWidth = constants.GAME_WIDTH/1.5;
	  	var barHeight = constants.GAME_HEIGHT/20;

	  	var progressBar = this.add.graphics();
	    var progressBox = this.add.graphics();
	    progressBox.fillStyle(0xaaaaaa, 0.8);
	    progressBox.fillRect(offsetX, offsetY, barWidth, barHeight);
	    var txtProgress = this.add.text(constants.GAME_WIDTH/2,constants.GAME_HEIGHT/2 +smidge*2.35).setFontSize(30).setOrigin(0.5,0.5);

	    this.load.on('progress', function(value){
        	progressBar.clear();
        	progressBar.fillStyle(0xffffff, 1);
        	progressBar.fillRect(offsetX + smidge, offsetY + smidge, (barWidth-(smidge*2)) * value, barHeight-(smidge*2));
        	txtProgress.setText(Math.round(100 * value) + "%");
        });*/
	}
}