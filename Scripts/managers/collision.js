var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // private instance variables
        // public properties
        // constructor
        // private methods
        // public methods
        Collision.Check = function (actor1, actor2) {
            if (!actor2.IsColliding) {
                if (util.Vector2.Distance(actor1.Position, actor2.Position) < (actor1.HalfHeight + actor2.HalfHeight)) {
                    console.log('collision');
                    actor2.IsColliding = true;
                    switch (actor2.name) {
                        case "island":
                            createjs.Sound.play("yaySound");
                            break;
                        case "cloud":
                            createjs.Sound.play("thunderSound");
                            break;
                    }
                }
            }
            else {
                actor2.IsColliding = false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map