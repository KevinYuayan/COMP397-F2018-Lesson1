module objects{
    export class Ocean extends objects.gameObject{
        
        // private instance variables
        private verticalSpeed:number;

        // public properties

        // constructor

        constructor() {
            super("ocean");
        }

        // private methods

        private _checkBounds():void {
            if(this.y >= 0)
            this.Reset();
        }

        private _move():void {
            this.y += this.verticalSpeed;
        }

        // public methods

        public Start(): void {
            this.Reset();
            this.verticalSpeed = 5; //5px per frame
        }
        public Update(): void {
            this._move();
            this._checkBounds();
        }
        public Reset(): void {
            this.y = -960;
        }
        public Destroy(): void {

        }
    }
}