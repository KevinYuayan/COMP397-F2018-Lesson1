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
var Objects;
(function (Objects) {
    var gameObject = /** @class */ (function (_super) {
        __extends(gameObject, _super);
        // constructor
        function gameObject(imageString) {
            var _this = _super.call(this, managers.Game.assetManager.getResult(imageString)) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(gameObject.prototype, "Width", {
            // public properties
            get: function () {
                return this._width;
            },
            set: function (newValue) {
                this._width = newValue;
                this.HalfWidth = this._width * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(gameObject.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (newValue) {
                this._height = newValue;
                this.HalfHeight = this._height * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(gameObject.prototype, "HalfWidth", {
            get: function () {
                return this._halfWidth;
            },
            set: function (newValue) {
                this._halfWidth = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(gameObject.prototype, "HalfHeight", {
            get: function () {
                return this._halfHeight;
            },
            set: function (newValue) {
                this._halfHeight = newValue;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        gameObject.prototype._initialize = function () {
            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
        };
        // public methods
        gameObject.prototype.Start = function () {
            this.y = 435;
        };
        gameObject.prototype.Update = function () {
            this.x = managers.Game.stage.mouseX;
            if (this.x > 640 - this.HalfWidth) {
                this.x = 640 - this.HalfWidth;
            }
            if (this.x < this.HalfWidth) {
                this.x = this.HalfWidth;
            }
        };
        gameObject.prototype.Reset = function () {
        };
        gameObject.prototype.Destroy = function () {
        };
        return gameObject;
    }(createjs.Bitmap));
    Objects.gameObject = gameObject;
})(Objects || (Objects = {}));
//# sourceMappingURL=gameObject.js.map