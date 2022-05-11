const cjs = new Cjs();
cjs.clear();
let redDot = [0,0,-1,0]
let orangeDot = [1,1,0,1]
let yellowDot = [2,2,1,2]
update = setInterval(update,100);
function increase(){
    // Run
    redDot[0] ++;
    redDot[2] ++;
    orangeDot[0] ++;
    orangeDot[2] ++;
    yellowDot[0] ++;
    yellowDot[2] ++;
    if(redDot[2]>= 8){
        redDot = [0,0,-1,0]
    }
    if(orangeDot[2]>=9){
        orangeDot = [1,1,0,1]
    }
    if(yellowDot[2]>=10){
        yellowDot = [2,2,1,2]
    }
}
function update(){
    increase();
}
function onFrame(){
    cjs.clear();
    cjs.dot(redDot[0],redDot[1],"red");
    cjs.dot(redDot[2],redDot[3],"red");
    //Orange
    cjs.dot(orangeDot[0],orangeDot[1],"orange");
    cjs.dot(orangeDot[2],orangeDot[3],"orange");
    //yellow
    cjs.dot(yellowDot[0],yellowDot[1],"yellow");
    cjs.dot(yellowDot[2],yellowDot[3],"yellow");
}