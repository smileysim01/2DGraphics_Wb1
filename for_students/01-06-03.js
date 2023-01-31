// @ts-check
/* jshint -W069, esversion:6 */

/** @type{HTMLInputElement} */ let slr = (/** @type{HTMLInputElement} */ document.getElementById("slider"));

let lasttime;
let value = 0;
let prevVal = 0;

function advanceSLR(timestamp) {
    if (! (lasttime === undefined)) {
        const delta = (timestamp - lasttime) / 10.0;
        prevVal = value;
        value = (value + delta) % 100;
        if(value < prevVal){
            value = prevVal;
            window.requestAnimationFrame(advanceSLRback);
        }
    }
    slr.value = value.toString();
    window.requestAnimationFrame(advanceSLR);
    lasttime = timestamp;
}

function advanceSLRback(timestamp){
    if (! (lasttime === undefined)) {
        const delta = (timestamp - lasttime) / 10.0;
        prevVal = value;
        value = (value - delta) % 100;
        if(value < 0){
            value = 0;
            window.requestAnimationFrame(advanceSLR);
        }
    }
    slr.value = value.toString();
    window.requestAnimationFrame(advanceSLRback);
    lasttime = timestamp;
}
window.requestAnimationFrame(advanceSLR);
