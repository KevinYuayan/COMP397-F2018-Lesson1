module util {
    export class Vector2 extends createjs.Point{
        // private instance variables

        // public properties

        // constructor
        /**
         *Creates an instance of Vector2.
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @memberof Vector2
         */
        constructor(x:number = 0, y:number = 0) {
            super(x, y);
        }

        // private methods

        // public methods

        /**
         * This method returns the Euclidean Distance between vec1 and vec2
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {void}
         * @memberof Vector2
         */
        public static Distance(vec1:util.Vector2, vec2:util.Vector2):number {
            return Math.floor(Math.sqrt(Math.pow(vec2.x - vec1.x, 2) + Math.pow(vec2.y - vec1.y, 2)));
        }

        /**
         * This method returns the resultant vector when adding vec1 and vec2
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {util.Vector2}
         * @memberof Vector2
         */
        public static Add(vec1:util.Vector2, vec2:util.Vector2):util.Vector2 {
            let result:util.Vector2 = new util.Vector2(vec1.x + vec2.x, vec1.y + vec2.y)
            return result;
        }

        /**
         * (vec1 - vec2)
         * This method returns the resultant vector when subtracting vec2 from vec1 (vec1 - vec2)
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {util.Vector2}
         * @memberof Vector2
         */
        public static Subtract(vec1:util.Vector2, vec2:util.Vector2):util.Vector2 {
            let result:util.Vector2 = new util.Vector2(vec1.x - vec2.x, vec1.y - vec2.y)
            return result;
        }
    }
}