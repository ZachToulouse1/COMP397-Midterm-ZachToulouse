//Source File Name: play.ts
//Author's Name: Zachariah Toulouse
//Date: March 4th, 2016
//Program Description: This program is the midterm for COMP397. It was created by Zachariah Toulouse on March 4th, 2016.

// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES +++++++++++
        private _dice1Label: objects.Label;
        private _dice2Label: objects.Label;

        private _labelBlank: objects.Label;

        private _labelName: string;

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
            
            //Add Label 1
            this._dice1Label = new objects.Label("1", "20px Times New Roman", "000000", 200, 325);
            this.addChild(this._dice1Label);
            
            //Add Label 2
            this._dice2Label = new objects.Label("1", "20px Times New Roman", "000000", 435, 325);
            this.addChild(this._dice2Label);
            
            //this._resetLabels();
            
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
                this._dice[die] = new createjs.Bitmap(assets.getResult("1"));
                this._dice[die].x = 150 + (die * 230);
                this._dice[die].y = 165;
                this.addChild(this._dice[die]);
            }
        }

        private _generateDice(): string[] {
            var dices = [" ", " "];
            var outcome = [0, 0, 0];

            for (var spin = 0; spin < 2; spin++) {
                outcome[spin] = Math.floor((Math.random() * 100) + 1);
                switch (outcome[spin]) {
                    case this._checkRange(outcome[spin], 1, 16):
                        dices[spin] = "1";
                        this._labelName = "1"
                        break;
                    case this._checkRange(outcome[spin], 17, 33):
                        dices[spin] = "2";
                        this._labelName = "2"
                        break;
                    case this._checkRange(outcome[spin], 34, 50):
                        dices[spin] = "3";
                        this._labelName = "3"
                        break;
                    case this._checkRange(outcome[spin], 51, 67):
                        dices[spin] = "4";
                        this._labelName = "4"
                        break;
                    case this._checkRange(outcome[spin], 68, 84):
                        dices[spin] = "5";
                        this._labelName = "5"
                        break;
                    case this._checkRange(outcome[spin], 85, 100):
                        dices[spin] = "6";
                        this._labelName = "6"
                        break;
                }
            }
            return dices;
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _rollButtonClick(event: createjs.MouseEvent): void {
            // generate 2 images
            var bitmap: string[] = this._generateDice();

            for (var reel: number = 0; reel < 2; reel++) {
                this._dice[reel].image = assets.getResult(bitmap[reel]);
                if (reel == 1) {
                    this._dice2Label.text = bitmap[reel];
                } else {
                    this._dice1Label.text = bitmap[reel];
                }
            }
        }
    }
}