module objects {
    export class Island extends objects.Actor {
        private _verticalSpeed:number;


        constructor() {
            super("island");
        }

        // private methods
        private _move() {
            this.y += this._verticalSpeed;
        }

        private _checkBounds():void {
            if(this.y > 480 + this.Height){
                this.Reset();
            }
        }

        // public methods
        public Start(): void {
            super.Start();
            this.Reset();
        }
        public Update(): void {
            this._move();
            this._checkBounds();
            super.Update();
        }
        public Reset(): void {
            this._verticalSpeed = 5;
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
            super.Reset();
        }
        public Destroy(): void {
            
        }


    }
}