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
            //Add Play Button
            this._rollButton = new objects.Button("RollButton", 400, 400);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);
            //Initialize Array of Bitmaps
            this._initializeBitmapArray();
            //Add Label 1
            this._dice1Label = new objects.Label("1", "20px Times New Roman", "000000", 200, 325);
            this.addChild(this._dice1Label);
            //Add Label 2
            this._dice2Label = new objects.Label("1", "20px Times New Roman", "000000", 435, 325);
            this.addChild(this._dice2Label);
            //this._resetLabels();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //PRIVATE METHODS
        Play.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        Play.prototype._initializeBitmapArray = function () {
            this._dice = new Array();
            for (var die = 0; die < 2; die++) {
                this._dice[die] = new createjs.Bitmap(assets.getResult("1"));
                this._dice[die].x = 150 + (die * 230);
                this._dice[die].y = 165;
                this.addChild(this._dice[die]);
            }
        };
        Play.prototype._generateDice = function () {
            var dices = [" ", " "];
            var outcome = [0, 0, 0];
            for (var spin = 0; spin < 2; spin++) {
                outcome[spin] = Math.floor((Math.random() * 100) + 1);
                switch (outcome[spin]) {
                    case this._checkRange(outcome[spin], 1, 16):
                        dices[spin] = "1";
                        this._labelName = "1";
                        break;
                    case this._checkRange(outcome[spin], 17, 33):
                        dices[spin] = "2";
                        this._labelName = "2";
                        break;
                    case this._checkRange(outcome[spin], 34, 50):
                        dices[spin] = "3";
                        this._labelName = "3";
                        break;
                    case this._checkRange(outcome[spin], 51, 67):
                        dices[spin] = "4";
                        this._labelName = "4";
                        break;
                    case this._checkRange(outcome[spin], 68, 84):
                        dices[spin] = "5";
                        this._labelName = "5";
                        break;
                    case this._checkRange(outcome[spin], 85, 100):
                        dices[spin] = "6";
                        this._labelName = "6";
                        break;
                }
            }
            return dices;
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play.prototype._rollButtonClick = function (event) {
            // generate 2 images
            var bitmap = this._generateDice();
            for (var reel = 0; reel < 2; reel++) {
                this._dice[reel].image = assets.getResult(bitmap[reel]);
                if (reel == 1) {
                    this._dice2Label.text = bitmap[reel];
                }
                else {
                    this._dice1Label.text = bitmap[reel];
                }
            }
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map