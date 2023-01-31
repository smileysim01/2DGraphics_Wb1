/** @type{HTMLInputElement} */ let txt = (/** @type{HTMLInputElement} */ document.getElementById("ex3-span"));

let colorList = [[255,0,0],[255,255,255]];
let fade = [[255,0,0],[255,255,255]];
let delta = Math.floor(1000/255);

function fadeColor(timestamp){   
    if(fade[0][1] >= 255 || fade[0][2] >= 255){
        delta = delta * -1;
    }
    else if(fade[0][1] <= 0 || fade[0][2] <= 0){
        delta = Math.abs(delta);
    }
        fade[0][1] = fade[0][1] + delta;
        fade[0][2] = fade[0][2] + delta;
    txt.style.backgroundColor = "rgb("+fade[0][0]+","+fade[0][1]+","+fade[0][2]+")";
    window.requestAnimationFrame(fadeColor);
}

window.requestAnimationFrame(fadeColor);