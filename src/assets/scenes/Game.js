import * as constants from  '../util/constants.js';
import Tile from '../entities/tile.js';
import TileGrass from '../entities/tileGrass.js';
import Player from '../entities/player.js';
import Monster from '../entities/monster.js';

export default class Game extends Phaser.Scene {
  constructor() {
    super({ key: "Game" });
  }

  preload() {
    this.gameConfig = {
      tileHeight: 50,
      tileWidth: 50
    };
    this.mainTownConfig = {
      width: 2000,
      height: 2000
    };
  }

  create(){
    console.log('game');
    this.initControls();
    this.generateGrassTiles(this.game);
    this.spawnPlayer();
    this.spawnMonster();
    this.initGraphics(0);
  }

  update(){
    this.checkPlayerMoving();
    this.checkMonsterRanges(); // see if any monsters are in range, and set them to move towards player
  }

  initControls(){
    this.input.on('pointerdown', function (pointer) {
      this.setMoveToPos(pointer.worldX,pointer.worldY);
      this.physics.moveToObject(this.player, this.reticle, this.player.speed);
    }, this);
  }

  initGraphics(){
    this.reticle = this.add.sprite(100,100,'click').setDisplaySize(10,10);
    this.reticle.setVisible(false)
    //this.reticle.setDepth(2);
    //this.reticle.setTintFill(0xFF0000);
  }

  checkPlayerMoving(){
    //if(this.reticle.visible) 
    let distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.reticle.x, this.reticle.y);
    // check if player is close to reticle
    if (this.player.body.speed > 0) {
        if (distance < this.player.speed/20){
            this.player.body.reset(this.reticle.x, this.reticle.y);
            this.reticle.setVisible(false);
        }
    }
  }

  setMoveToPos(x,y){
    this.reticle.setVisible(true);
    this.reticle.setPosition(x,y);
  }

  generateGrassTiles(){
    //this.grassTile = this.add.sprite(0,0,'grassTile');
    this.grassTiles = this.add.group();
    for(let i=0; i<this.mainTownConfig.width; i+=this.gameConfig.tileWidth){
      for(let j=0; j<this.mainTownConfig.height; j+=this.gameConfig.tileHeight){
        let ntg = new TileGrass(this,i,j);
        this.grassTiles.add(ntg);
      }
    } 
  }

  spawnPlayer(){
    this.player = new Player(this,0,0);
    this.cameras.main.startFollow(this.player);
  }

  spawnMonster(){
    this.monster = new Monster(this,500,500);
  }

  checkMonsterRanges(){
    //if(this.reticle.visible) 
    let distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.monster.x, this.monster.y),
        tolerance = this.player.speed/20;
    if (distance <tolerance ){
        this.monster.body.reset(this.monster.x, this.monster.y);
    } else if(distance < constants.MONSTER_DISTANCE) {
        this.physics.moveToObject(this.monster, this.player, this.player.speed/2);
    }
  }
}