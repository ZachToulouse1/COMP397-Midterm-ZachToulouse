//Source File Name: play.ts
//Author's Name: Zachariah Toulouse
//Date: March 4th, 2016
//Program Description: This program is the midterm for COMP397. It was created by Zachariah Toulouse on March 4th, 2016.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //Add Play Label
            this._playLabel = new objects.Label("PLAY SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._playLabel);
            //Add Play Button
            this._playButton = new objects.Button;
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map