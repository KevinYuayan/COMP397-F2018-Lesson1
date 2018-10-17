module managers {
    export class Collision {
        // private instance variables

        // public properties

        // constructor

        // private methods

        // public methods
        public static Check(actor1: objects.Actor, actor2: objects.Actor): void {

            if (!actor2.IsColliding) {
                let distance = util.Vector2.Distance(actor1.Position, actor2.Position);
                let totalHeight = actor1.HalfHeight + actor2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    actor2.IsColliding = true;

                    switch(actor2.name) {
                        case "island":
                            let yaySound = createjs.Sound.play("yaySound");
                            yaySound.volume = 0.1;
                            managers.Game.scoreBoard.Score += 100;
                        break;
                        case "cloud":
                            let thunderSound = createjs.Sound.play("thunderSound");
                            thunderSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;

                            if(managers.Game.scoreBoard.Lives <= 0) {
                                managers.Game.currentState = config.Scene.OVER;
                                if(managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                                    managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                                }
                            }
                        break;
                    }
                }
            }


        }
    }
}