module objects {
    export class Player extends Actor {
        
        // private instance variables

        // public properties
        
        // constructors
        constructor() {
            super("plane");

            this.Start();
        }


        // private methods

        // public methods
        public Start():void {
            super.Start();
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;

            this.y = 435;
        }

        public Update():void {
            this.x = managers.Game.stage.mouseX;

            if(this.x > 640 - this.HalfWidth){
                this.x = 640 - this.HalfWidth;
            }

            if(this.x < this.HalfWidth){
                this.x = this.HalfWidth;
            }
            super.Update();
        }

        public Reset(): void {
            super.Reset();
        }
        
        public Destroy(): void {
        }


    }
}