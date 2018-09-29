module objects{
    export class Button extends gameObject {
        
        // private instance variables

        // public properties

        // constructor
        /**
         *Creates an instance of Button.
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         */
        constructor (imageString:string, x:number = 0, y:number = 0, isCentered:boolean = false){
            super(imageString);

            if(isCentered) {
                this.regX = this.HalfWidth;
                this.regY = this.HalfHeight;
            }

            this.x = x;
            this.y = y;

            // event listeners
            this.on("mouseover", this._over);
            this.on("mouseout", this._out);
        }
        // private methods

        // event handlers
        private _over(event:createjs.MouseEvent):void {
            this.alpha = 0.7; // 70% opacity
        }
        private _out(event:createjs.MouseEvent):void {
            this.alpha = 1.0; // 100% opacity

        }
        // public methods

        public Start(): void {
            throw new Error("Method not implemented.");
        }
        public Update(): void {
            throw new Error("Method not implemented.");
        }
        public Reset(): void {
            throw new Error("Method not implemented.");
        }
        public Destroy(): void {
            throw new Error("Method not implemented.");
        }
    }
}