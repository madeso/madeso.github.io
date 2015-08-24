var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ld33;
(function (ld33) {
    var PlayState = (function (_super) {
        __extends(PlayState, _super);
        function PlayState() {
            _super.call(this);
        }
        PlayState.prototype.create = function () {
            this.map = this.game.add.tilemap('level1', 128, 128);
            this.map.addTilesetImage('tiles', 'tiles');
            this.backgroundlayer = this.map.createLayer('ground');
            this.map.createLayer('buildings');
            this.backgroundlayer.resizeWorld();
            this.player = new ld33.Player(this.game, 0, this.game.height - 50);
            this.game.add.existing(this.player);
            this.camera.follow(this.player);
        };
        return PlayState;
    })(Phaser.State);
    ld33.PlayState = PlayState;
})(ld33 || (ld33 = {}));
