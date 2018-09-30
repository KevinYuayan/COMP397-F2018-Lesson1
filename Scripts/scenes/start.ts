module scenes{
    export class Start extends objects.Scene{
        // private instance variables
        
        private _ocean:objects.Ocean;
        private _welcomeLabel:objects.Label;
        private _startButton:objects.Button;

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
            this.addChild(this._startButton);

            // adds player to the stage
            this.addChild(this._welcomeLabel);

            // event listeners

            // starts the play scene
            this._startButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.PLAY;
            })
        }        
        public Start(): void {
            // Instantiates objects
            this._startButton = new objects.Button("startButton", 320, 360, true);
            this._ocean = new objects.Ocean();
            this._welcomeLabel = new objects.Label("Mail Pilot", "60px", "Consolas", "#FFFF00", 320, 240, true);

            this.Main();
        }
        public Update(): void {

            this._ocean.Update();
        }
        public Reset(): void {
            
        }
        public Destroy(): void {
            this.removeAllChildren();
        }


    }
}