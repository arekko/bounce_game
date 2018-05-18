import Phaser from "phaser";
import GameScene from "./scenes/gamescene";
import GameScene2 from "./scenes/gamescene2";
import GameOver from "./scenes/gameover";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
        debug: false
    }
  },
  scene: [GameScene, GameScene2, GameOver]
};

const theGame = new Phaser.Game(config);

if (module.hot) {
  module.hot.accept(() => {});

  module.hot.dispose(() => {
    window.location.reload();
  });
}
