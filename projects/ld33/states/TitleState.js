var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ld33;
(function (ld33) {
    var TitleState = (function (_super) {
        __extends(TitleState, _super);
        function TitleState() {
            _super.call(this);
        }
        TitleState.prototype.create = function () {
            this.image = this.game.add.sprite(0, 0, "titlescreen");
            this.image.scale.setTo(this.game.width / this.image.width, this.game.height / this.image.height);
            this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.addOnce(this.onClicked, this);
        };
        TitleState.prototype.onClicked = function () {
            this.game.state.start("game");
        };
        return TitleState;
    })(Phaser.State);
    ld33.TitleState = TitleState;
})(ld33 || (ld33 = {}));
