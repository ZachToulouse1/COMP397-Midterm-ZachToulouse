//Source File Name: play.ts
//Author's Name: Zachariah Toulouse
//Date: March 4th, 2016
//Program Description: This program is the midterm for COMP397. It was created by Zachariah Toulouse on March 4th, 2016.

// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;

        private _dice: createjs.Bitmap[];

        private _rollButton: objects.Button;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            //Add Play Button
            this._rollButton = new objects.Button("RollButton", 400, 400);
            this.addChild(this._rollButton);
            this._rollButton.on("click", this._rollButtonClick, this);
            
            //Initialize Array of Bitmaps
            this._initializeBitmapArray();
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        //PRIVATE METHODS
        
        private _checkRange(value: number, lowerBounds: number, upperBounds: number): number {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }

        private _initializeBitmapArray(): void {
            this._dice = new Array<createjs.Bitmap>();
            for (var die: number = 0; die < 2; die++) {
                this._dice[die] = new createjs.Bitmap(assets.getResult("FirstDie"));
                this._dice[die].x = 150 + (die * 230);
                this._dice[die].y = 165;
                this.addChild(this._dice[die]);
                console.log("die" + die + " " + this._dice[die]);
            }
        }

        private _generateDice(): string[] {
            var dices = [" ", " "];
            var outcome = [0, 0, 0];

            for (var spin = 0; spin < 2; spin++) {
                outcome[spin] = Math.floor((Math.random() * 100) + 1);
                switch (outcome[spin]) {
                    case this._checkRange(outcome[spin], 1, 16):
                        dices[spin] = "FirstDie";
                        break;
                    case this._checkRange(outcome[spin], 17, 33):
                        dices[spin] = "SecondDie";
                        break;
                    case this._checkRange(outcome[spin], 34, 50):
                        dices[spin] = "ThirdDie";
                        break;
                    case this._checkRange(outcome[spin], 51, 67):
                        dices[spin] = "FourthDie";
                        break;
                    case this._checkRange(outcome[spin], 68, 84):
                        dices[spin] = "FifthDie";
                        break;
                    case this._checkRange(outcome[spin], 85, 100):
                        dices[spin] = "SixthDie";
                        break;
                }
            }
            return dices;
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _rollButtonClick(event: createjs.MouseEvent): void {
            // generate 2 images
            var bitmap: string[] = this._generateDice();

            for (var reel: number = 0; reel < 3; reel++) {
                this._dice[reel].image = assets.getResult(bitmap[reel]);
            }
        }
    }
}