// @ts-check
/* jshint -W069, esversion:6 */

/** @type{HTMLInputElement} */ let startb = (/** @type{HTMLInputElement} */ document.getElementById("startbut"));
/** @type{HTMLInputElement} */ let stopb = (/** @type{HTMLInputElement} */ document.getElementById("stopbut"));
/** @type{HTMLInputElement} */ let slr = (/** @type{HTMLInputElement} */ document.getElementById("slider"));

let speed = 0;

startb.onclick = function(){
    speed = 1;
}
stopb.onclick = function(){
    speed = 0;
}

function advanceSLR() {
    let newValue = (Number(slr.value)+speed) % 100;
    if (newValue<0) newValue=100;
    slr.value = newValue.toString();
    window.requestAnimationFrame(advanceSLR);
}
window.requestAnimationFrame(advanceSLR);
