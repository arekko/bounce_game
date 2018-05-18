import Phaser from "phaser";
import background from "../assets/background.png";
import orb from "../assets/ball.png";
import lava from "../assets/lava.png";
import wall from "../assets/wall.png"
import mountain from "../assets/rock.png"
import forest from "../assets/forest.png"
import saw from "../assets/saw.png"




export default class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "GameScene2"
        });
    }
    

    preload() {
        this.score = 0;
        this.load.image("saw", saw);
        this.load.image("forest", forest);
        this.load.image("mountain", mountain);
        this.load.image("background", background);
        this.load.image("lava", lava);
        this.load.image("lava2", lava);
        this.load.image("orb", orb);
        this.load.image("wall", wall);
    }

    create() {

        //backgorund
        this.mountain = this.add.image(400, 300, "mountain");
        this.forest = this.add.image(400, 300, "forest");

        // this.background = this.add.image(400, 300, "background");

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 600, 'lava2');
        // this.platforms.create(400, 0, 'lava');

        this.blocks = this.add.group();

        //SAW
        this.saw = this.physics.add.image(950, 200, "saw");
        // this.physics.add.collider(this.orb, this.saw);
        // this.saw.setGravityX(0);
        // this.saw.setGravityY(0);
        this.saw.body.setAcceleration(-200, 0);




        this.orb = this.physics.add.image(100, 300, "orb").setActive().setVelocity(0, 0).setBounce(0);
        this.orb.setScale(0.9);

        this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.orb.setBounce(0.3);
        this.orb.setCollideWorldBounds(true, true, true, true);

        this.orb.setGravityY(1000);
        this.physics.add.collider(this.orb, this.platforms, this.gameOver, null, this);
        // this.makeBlocks();
        let block = this.physics.add.group({
            key: 'wall',
            repeat: 100,
            setXY: {
                x: 300,
                y: 430,
                stepX: 300
            }
        })

        this.physics.add.collider(block, block);

        block.setVelocityX(-100);
        this.physics.add.collider(block, this.orb, this.gameOver, null, this);

        this.physics.add.collider(this.orb, this.saw, this.gameOver, null, this);

        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fffff' });



    }

    gameOver() {
        this.cameras.main.shake(300);


        this.timedEvent = this.time.delayedCall(300 ,this.changeScene , [], this);

    }

    changeScene(){
            this.scene.start("GameOver");
        }
    




    update(delta) {

        this.forest.x += -1;
        this.mountain.x += -1;


        if (this.key_A.isDown) {
            this.orb.setVelocityY(-210);
            this.score += 10;
        }

        this.scoreText.setText('Score: ' + this.score);



        if (this.forest.x < -280) {
            this.forest.x = 1150;
        }
        if (this.mountain.x < -50) {
            this.mountain.x = 950;
        }


        //saw
        if (this.saw.x < -50) {
            this.saw.y = 200; 
            this.saw.x = 950;
            this.saw.setVelocityY(-200);
        }
    }

    // makeBlocks(){
    //     // const wallheight = this.rnd.integerInRangeaa(2, 6);
    //     // const wallheight = this.rnd.integerInRange(2, 6);
    //     // for(let i = 0; i < wallheight; i++){}
    //         let block = this.physics.add.group({
    //             key: 'block',
    //             repeat: 20,
    //             setXY: { x: 300, y: 450, stepX: 150}
    //         });


    // this.blocks.create(block);

    // this.block.setGravityX(0);
    // this.block.setGravityY(0);
    // block.body.setAcceleration(-200, 0);





}