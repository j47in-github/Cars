var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

window.addEventListener("keydown", onKeyDown);

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
    ctx.drawImage(roverImg, 10, 10, 150, 90);
    ctx.drawImage(roverImg1, 10, 100, 150, 90);
}

function onKeyDown(e){
    keyPressed = e.keyCode;
    
    if(keyPressed == '38'){
        up();
    }
    if(keyPressed == '40'){
        down();
    }
    if(keyPressed == '37'){
        left();
    }
    if(keyPressed == '39'){
        right();
    }

    if(keyPressed == '87'){
        up1();
    }
    if(keyPressed == '83'){
        down1();
    }
    if(keyPressed == '65'){
        left1();
    }
    if(keyPressed == '68'){
        right1();
    }
}

function up(){
    console.log("up c1");
}
function right(){
    console.log("right c1");
}
function left(){
    console.log("left c1 ");
}
function down(){
    console.log("down c1");
}

function up1(){
    console.log("up c2");
}
function right1(){
    console.log("right c2");
}
function left1(){
    console.log("left c2");
}
function down1(){
    console.log("down c2");
}