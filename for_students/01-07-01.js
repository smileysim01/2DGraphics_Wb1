/** @type{HTMLInputElement} */ let txt = (/** @type{HTMLInputElement} */ document.getElementById("ex3-span"));

let colorList = [[0,255,0],[255,255,0],[255,0,0]];
let fade = [[0,255,0],[255,255,0],[255,0,0]];
let delta = Math.floor(1000/255);
let beta = 0;

function fadeColor(timestamp){   
    if(fade[0][0] <= 0 && fade[0][1] >= 255){
        delta = Math.floor(1000/255 -2);
        beta = 0;
    }
    else if(fade[0][0] >= 255 && fade[0][1] >= 255){
        beta = Math.floor(1000/255 -2)*-1;
        delta = 0;
    }
    else if(fade[0][0] >= 255 && fade[0][1] <= 0){
        beta = Math.floor(1000/255 -2);
        delta = beta * -1;
    }
        fade[0][0] = fade[0][0] + delta;
        fade[0][1] = fade[0][1] + beta;
    txt.style.backgroundColor = "rgb("+fade[0][0]+","+fade[0][1]+","+fade[0][2]+")";
    window.requestAnimationFrame(fadeColor);
}

window.requestAnimationFrame(fadeColor);