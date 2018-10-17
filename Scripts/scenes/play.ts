module scenes{
    export class Play extends objects.Scene{
        // private instance variables
        
        private _ocean:objects.Ocean;
        private _player:objects.Player;
        private _island:objects.Island;

        private _cloudNum:number;
        private _clouds:objects.Cloud[];

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
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

            // adds island to the scene
            this._island = new objects.Island();
            this.addChild(this._island);

            // adds player to the stage
            this._player = new objects.Player();
            this.addChild(this._player);


            // adds clouds to the scene
            for(let count = 0; count < this._cloudNum; count++) {
                this.addChild(this._clouds[count]);
            }
            
        }        
        public Start(): void {

            this._cloudNum = 3;

            // must do this to instantiate the array
            this._clouds = new Array<objects.Cloud>();

            // adds clouds to the array
            for(let count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud();
            }
            this.Main();
        }
        public Update(): void {
            
            this._player.Update();
            this._ocean.Update();
            this._island.Update();
            managers.Collision.Check(this._player, this._island);

            // updates each cloud in array
            for (let cloud of this._clouds) {
                cloud.Update();
                managers.Collision.Check(this._player, cloud);
            }
        }
        public Reset(): void {

        }
        public Destroy(): void {
            this.removeAllChildren();
        }


    }
}