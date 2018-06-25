
"use strict";


var stage;
var startbutton;
var dice1;
var dice2;

    // Game VARIABLES
var canvas = document.getElementById("canvas");

function Init() {
    console.log("Initialization Started");
    // var myVariable = "foo";
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", Update);
    
    Main();
}

function Update() {
    stage.update();
}

function Main() {
    console.log("Main Started...");


    startbutton = new createjs.Bitmap("./Assets/images/StartButton.png");
    startbutton.x = 175;
    startbutton.y = 400;
    startbutton.addEventListener("click", showRandDice);
    stage.addChild(startbutton);

    

        

    }
    function showRandDice(){
        
        var pos1 = (Math.random() * 6) + 1
        switch(pos1){
        case 1:
            dice2 = new createjs.Bitmap("./Assets/images/1.png");
            dice2.x = 75;
            dice2.y = 100;
            stage.addChild(dice1);
            break;
        case 2:
            dice2 = new createjs.Bitmap("./Assets/images/2.png");
            dice2.x = 75;
            dice2.y = 100;
            stage.addChild(dice2);
            break;
        case 3:
            dice2 = new createjs.Bitmap("./Assets/images/3.png");
            dice2.x = 75;
            dice2.y = 100;
            stage.addChild(dice2);
            break;
        case 4:
        
            dice2 = new createjs.Bitmap("./Assets/images/4.png");
            dice2.x = 75;
            dice2.y = 100;
            stage.addChild(dice2);
            break;
        case 5:
        dice2 = new createjs.Bitmap("./Assets/images/5.png");
        dice2.x = 75;
        dice2.y = 100;
        stage.addChild(dice2);
        break;
        case 6:
        dice2 = new createjs.Bitmap("./Assets/images/6.png");
        dice2.x = 75;
        dice2.y = 100;
        stage.addChild(dice2);
        break;

        }

        var pos2 = (Math.random() * 6) + 1;
        switch(pos2){
            case 1:
                dice1 = new createjs.Bitmap("./Assets/images/1.png");
                dice1.x = 200;
                dice1.y = 100;
                stage.addChild(dice1);
                break;
            case 2:
                dice1 = new createjs.Bitmap("./Assets/images/2.png");
                dice1.x = 200;
                dice1.y = 100;
                stage.addChild(dice1);
                break;
            case 3:
            dice1 = new createjs.Bitmap("./Assets/images/3.png");
            dice1.x = 200;
            dice1.y = 100;
            stage.addChild(dice1);
            break;
            case 4:
            
            dice1 = new createjs.Bitmap("./Assets/images/4.png");
            dice1.x = 200;
            dice1.y = 100;
            stage.addChild(dice1);
            break;
            case 5:
            dice1 = new createjs.Bitmap("./Assets/images/5.png");
            dice1.x = 200;
            dice1.y = 100;
            stage.addChild(dice1);
            break;
            case 6:
            dice1 = new createjs.Bitmap("./Assets/images/6.png");
            dice1.x = 200;
            dice1.y = 100;
            stage.addChild(dice1);
            break;
            }
        }




window.addEventListener("load", Init);



