/** @type{HTMLInputElement} */ let txt = (/** @type{HTMLInputElement} */ document.getElementById("ex3-span"));
/** @type{HTMLInputElement} */ let redb = (/** @type{HTMLInputElement} */ document.getElementById("redbut"));
/** @type{HTMLInputElement} */ let yellowb = (/** @type{HTMLInputElement} */ document.getElementById("yellowbut"));
/** @type{HTMLInputElement} */ let greenb = (/** @type{HTMLInputElement} */ document.getElementById("greenbut"));

let fade;
let delta;

redb.onclick = function(){
    txt.innerText = "some text that will become RED.";
    fade = [255,255,255];
    delta = Math.floor(1000/255);
    window.requestAnimationFrame(fadeRed);
}

yellowb.onclick = function(){
    txt.innerText = "some text that will become YELLOW.";
    fade = [255,255,255];
    delta = Math.floor(1000/255);
    window.requestAnimationFrame(fadeYellow);
}

greenb.onclick = function(){
    txt.innerText = "some text that will become GREEN.";
    fade = [255,255,255];
    delta = Math.floor(1000/255);
    window.requestAnimationFrame(fadeGreen);
}

function fadeRed(timestamp){    //red = [255,0,0]
    if(fade[1] >= 255 || fade[2] >= 255){
        delta = delta * -1;
    }
    fade[1] = fade[1] + delta;
    fade[2] = fade[2] + delta;
    txt.style.backgroundColor = "rgb("+fade[0]+","+fade[1]+","+fade[2]+")";
    if(fade[1] > 0 || fade[2] > 0){
        window.requestAnimationFrame(fadeRed);
    }
}

function fadeYellow(timestamp){    //yellow = [255,255,0]
    if(fade[2] >= 255){
        delta = delta * -1;
    }
    fade[2] = fade[2] + delta;
    txt.style.backgroundColor = "rgb("+fade[0]+","+fade[1]+","+fade[2]+")";
    if(fade[2] > 0){
        window.requestAnimationFrame(fadeYellow);
    }
}

function fadeGreen(timestamp){    //green = [0,255,0]
    if(fade[0] >= 255 || fade[2] >= 255){
        delta = delta * -1;
    }
    fade[0] = fade[0] + delta;
    fade[2] = fade[2] + delta;
    txt.style.backgroundColor = "rgb("+fade[0]+","+fade[1]+","+fade[2]+")";
    if(fade[0] > 0 || fade[2] > 0){
        window.requestAnimationFrame(fadeGreen);
    }
}