import Phaser from "phaser";
import button from "../assets/start.btn.png";
import bg from '../assets/start-bg.jpeg'


export default class GameScene extends Phaser.Scene {
  constructor() {
    super({key: "GameScene"});
  }

  preload() {
    
    this.load.image('bg', bg);
    this.load.image('button', button);

  }

  create() {
    this.background = this.add.image(400, 300, "bg");

    this.text = this.add.text(100, 100, "Welcome to Bounce Game", { font: "60px Impact"});
    this.image = this.add.image(400, 300, 'button');

    this.input.on('pointerdown', function(event){
      this.scene.start("GameScene2");
      }, this);
  }


}