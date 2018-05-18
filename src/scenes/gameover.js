import Phaser from "phaser";
import pa from "../assets/pa.png";
import bg from '../assets/start-bg.jpeg'

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({key: "GameOver"});
    }

    preload() {
        this.load.image('pa', pa);
        this.load.image('bg', bg);

    }

    create() {
        this.text = this.add.text(280, 100, "Game Over", {font: "60px Impact"});
        this.image = this.add.image(400, 300, 'pa');

        this.input.on('pointerdown', function(event){
            this.scene.start("GameScene2");
            }, this);
    }




}