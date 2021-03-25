var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

window.addEventListener("keydown", onKeyDown);

marginX = 10;
marginY = 10;

marginX1 = 10;
marginY1 = 100;

var roverImg = new Image();
roverImg.onload = roverDraw;
roverImg.src = "https://i.postimg.cc/YqdnnNX1/car1.png";
var roverImg1 = new Image();
roverImg1.onload = roverDraw;
roverImg1.src = "https://i.postimg.cc/YqdnnNX1/car1.png";

var bg = new Image();
bg.onload = roverDraw;
bg.src = "https://i.postimg.cc/bv5d35nK/racing.jpg";

function roverDraw(){
    ctx.drawImage(bg, 0, 0, 800, 600);
    ctx.drawImage(roverImg, marginX, marginY, 150, 90);
    ctx.drawImage(roverImg1, marginX1, marginY1, 150, 90);
}

function onKeyDown(e){
    keyPressed = e.keyCode;
    
    if(keyPressed == '38'){
        move(0, 0, -10);
    }
    if(keyPressed == '40'){
        move(0, 0, 10);
    }
    if(keyPressed == '37'){
        move(0, -10, 0);
    }
    if(keyPressed == '39'){
        move(0, 10, 0);
    }

    if(keyPressed == '87'){
        move(1, 0, -10);
    }
    if(keyPressed == '83'){
        move(1, 0, 10);
    }
    if(keyPressed == '65'){
        move(1, -10, 0);
    }
    if(keyPressed == '68'){
        move(1, 10, 0);
    }
}

function move(carId, moveX, moveY){
    if(carId == 0){
        if(!(marginX < 10 && moveX < 0)){
            if(!(marginX > 700 && moveX > 0)){
                marginX += moveX;
            }
        }
        if(!(marginY < 10 && moveY < 0)){
            if(!(marginY > 500 && moveY > 0)){
                marginY += moveY;
            }
        }
    }
    else if(carId == 1){
        if(!(marginX1 < 10 && moveX < 0)){
            if(!(marginX1 > 700 && moveX > 0)){
                marginX1 += moveX;
            }
        }
        if(!(marginY1 < 10 && moveY < 0)){
            if(!(marginY1 > 500 && moveY > 0)){
                marginY1 += moveY;
            }
        }
    }
    roverDraw();
}