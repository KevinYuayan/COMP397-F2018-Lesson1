module scenes{
    export class Over extends objects.Scene{
        // private instance variables
        
        private _ocean:objects.Ocean;
        private _gameOverLabel:objects.Label;
        private _restartButton:objects.Button;

        // public properties

        // constructors

        constructor() {
            super();

            this.Start();
        }

        // private methods


        // public methods

        public Main(): void {
            
            // adds ocean to the stage
            this.addChild(this._ocean);

            // adds ocean to the stage
            this.addChild(this._restartButton);

            // adds player to the stage
            this.addChild(this._gameOverLabel);

            // event listeners

            // starts the play scene
            this._restartButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.PLAY;
            })
        }        
        public Start(): void {
            // Instantiates objects
            this._restartButton = new objects.Button("restartButton", 320, 360, true);
            this._ocean = new objects.Ocean();
            this._gameOverLabel = new objects.Label("Game Over", "60px", "Consolas", "#FFFF00", 320, 240, true);

            this.Main();
        }
        public Update(): void {

            this._ocean.Update();
        }
        public Reset(): void {
            throw new Error("Method not implemented.");
        }
        public Destroy(): void {
            this.removeAllChildren();
        }


    }
}