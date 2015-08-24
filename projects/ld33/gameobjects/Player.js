var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ld33;
(function (ld33) {
    (function (AnimationState) {
        AnimationState[AnimationState["IDLE"] = 0] = "IDLE";
        AnimationState[AnimationState["WALKING"] = 1] = "WALKING";
        AnimationState[AnimationState["DASH"] = 2] = "DASH";
    })(ld33.AnimationState || (ld33.AnimationState = {}));
    var AnimationState = ld33.AnimationState;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            var _this = this;
            this.game = game;
            this.dashTimer = -1;
            var key;
            key = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            key.onDown.add(function () { _this.move_right = true; });
            key.onUp.add(function () { _this.move_right = false; });
            key = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            key.onDown.add(function () { _this.move_left = true; });
            key.onUp.add(function () { _this.move_left = false; });
            key = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
            key.onDown.add(function () { _this.move_up = true; });
            key.onUp.add(function () { _this.move_up = false; });
            key = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            key.onDown.add(function () { _this.move_down = true; });
            key.onUp.add(function () { _this.move_down = false; });
            key = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
            key.onDown.add(function () { _this.DoDash(); });
            key = this.game.input.keyboard.addKey(Phaser.Keyboard.C);
            key.onDown.add(function () { _this.DoAttack(); });
            _super.call(this, game, x, y, "player", 0);
            this.anchor.set(0.5, 1.0);
            this.animations.add("idle", [0], 10, true);
            this.animations.add("walking", [1, 2], 5, true);
            this.animations.add("dash", [3, 4], Player.DASH_ANIM_SPEED, true);
            this.animations.play("idle");
            this.anim = AnimationState.IDLE;
            this.facing_right = true;
        }
        Player.prototype.playIdle = function () {
            if (this.anim != AnimationState.IDLE) {
                this.anim = AnimationState.IDLE;
                this.animations.play("idle");
            }
        };
        Player.prototype.playWalking = function () {
            if (this.anim != AnimationState.WALKING) {
                this.anim = AnimationState.WALKING;
                this.animations.play("walking");
            }
        };
        Player.prototype.playDash = function () {
            if (this.anim != AnimationState.DASH) {
                this.anim = AnimationState.DASH;
                this.animations.play("dash");
            }
        };
        Player.prototype.DoDash = function () {
            if (this.dashTimer < -Player.DASH_WAIT) {
                this.dashTimer = Player.DASH_TIME;
            }
        };
        Player.prototype.DoAttack = function () {
        };
        Player.prototype.update = function () {
            if (this.dashTimer > 0) {
                var dx = 0.0;
                if (this.facing_right)
                    dx = 1;
                else
                    dx = -1;
                this.x += dx * Player.DASH_SPEED * (60 / this.game.time.elapsedMS);
                this.dashTimer -= this.game.time.elapsedMS / 1000;
                this.playDash();
            }
            else {
                if (this.dashTimer > -Player.DASH_WAIT) {
                    this.dashTimer -= this.game.time.elapsedMS / 1000;
                }
                var dx = 0.0;
                var dy = 0.0;
                if (this.move_right)
                    dx += 1;
                if (this.move_left)
                    dx -= 1;
                if (this.move_up)
                    dy -= 1;
                if (this.move_down)
                    dy += 1;
                this.x += dx * (60 / this.game.time.elapsedMS);
                this.y += dy * (60 / this.game.time.elapsedMS);
                if (dx != 0 || dy != 0)
                    this.playWalking();
                else
                    this.playIdle();
                if (dx > 0)
                    this.facing_right = true;
                if (dx < 0)
                    this.facing_right = false;
                if (this.facing_right)
                    this.scale.set(1, 1);
                else
                    this.scale.set(-1, 1);
            }
        };
        Player.DASH_SPEED = 4.0;
        Player.DASH_ANIM_SPEED = 15;
        Player.DASH_TIME = 0.5;
        Player.DASH_WAIT = 0.3;
        return Player;
    })(Phaser.Sprite);
    ld33.Player = Player;
})(ld33 || (ld33 = {}));
