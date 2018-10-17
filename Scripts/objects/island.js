var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Island = /** @class */ (function (_super) {
        __extends(Island, _super);
        function Island() {
            return _super.call(this, "island") || this;
        }
        // private methods
        Island.prototype._move = function () {
            this.y += this._verticalSpeed;
        };
        Island.prototype._checkBounds = function () {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
        };
        // public methods
        Island.prototype.Start = function () {
            _super.prototype.Start.call(this);
            this.Reset();
        };
        Island.prototype.Update = function () {
            this._move();
            this._checkBounds();
            _super.prototype.Update.call(this);
        };
        Island.prototype.Reset = function () {
            this._verticalSpeed = 5;
            this.y = -this.Height;
            this.x = Math.floor(Math.random() * (640 - this.Width) + this.HalfWidth);
            _super.prototype.Reset.call(this);
        };
        Island.prototype.Destroy = function () {
        };
        return Island;
    }(objects.Actor));
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map