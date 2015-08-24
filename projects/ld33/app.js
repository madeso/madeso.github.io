var game;
(function (game) {
    var Main = (function () {
        function Main() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create, preload: this.preload
            });
        }
        Main.prototype.preload = function () {
            this.game.load.image("titlescreen", "/assets/title.png");
            this.game.load.spritesheet("player", "/assets/player.png", 128, 128);
            this.game.load.tilemap("level1", "/assets/level1.json", null, Phaser.Tilemap.TILED_JSON);
            this.game.load.spritesheet("tiles", "/assets/tiles.png", 128, 128);
        };
        Main.prototype.create = function () {
            this.game.state.add("title", ld33.TitleState, true);
            this.game.state.add("game", ld33.PlayState, false);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };
        return Main;
    })();
    game.Main = Main;
})(game || (game = {}));
window.onload = function () {
    var g = new game.Main();
};
