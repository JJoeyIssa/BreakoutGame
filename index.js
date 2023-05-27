let canvas = document.getElementById('game'),
    ctx = canvas.getContext('2d'),
    ballRadius = 9
    x = canvas.width / (Math.floor(Math.random()*Math.random()*10)+3),
    y = canvas.height - 40,
    dx = 2  //rate of change of x
    dy = -2; //rate of change of y

let paddleHieght = 12,
    paddleWidth = 72;


// determining paddle start position
let paddleX = (canvas.width - paddleWidth) / 2; 

// generating bricks
let rowCount = 5,
    columnCount = 9,
    brickWidth = 54,
    brickHeight = 18,
    brickPadding = 12,
    topOffset = 40,
    leftOffset = 33,
    score = 0;

// brick array
let bricks = [];
for(let c = 0; c < columnCount; c++) {
    bricks[c] = [];
    for(let r = 0; r < rowCount; r++) {
        //set postions of the bricks
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
}


// adding eventlistner and mouse movement
document.addEventListener("mouseover", mouseMoveHandler, false);

// move paddle with mouse
function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > o && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth /2;
    }
}

// draw paddle
function drawPaddle(){
    ctx.beginPath();
    ctx.roundRect(paddleX, canvas.height - paddleHeight, paddleWidth,
        paddleHeight, 30);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.closePath();
}

// draw ball
function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI *2);
    ctx.fillStyle = '#333';
    ctx.fill();
    ctx.closePath();
}

// draw bricks
function drawBricks(){
    for(let c = 0; c < columnCount; c++) {
        for(let r = 0; r < rowCount; r++) {
            if(bricks[c][r].status === 1) {
                let brickX = (c * (brickWidth + brickPadding)) + leftOffset;
                let brickY = (r * (brickWidth + brickPadding)) + topOffset;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.roundRect(brickX. brickY, brickWidth, brickHeight, 30);
                ctx.fillStyle = '#333';
                ctx.fill();
                ctx.closePath();
            }
        }
    }

}

// track score
function trackScore(){
    ctx.font = "blod 16px sans=serif";
    ctx.fillStyle = "#333";
}