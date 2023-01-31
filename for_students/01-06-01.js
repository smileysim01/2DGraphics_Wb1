// @ts-check
/* jshint -W069, esversion:6 */

/** @type{HTMLInputElement} */ let slr1 = (/** @type{HTMLInputElement} */ document.getElementById("slider1"));
/** @type{HTMLInputElement} */ let slr2 = (/** @type{HTMLInputElement} */ document.getElementById("slider2"));
/** @type{HTMLInputElement} */ let slr3 = (/** @type{HTMLInputElement} */ document.getElementById("slider3"));

function changeSlr3(){
    slr3.value = (Number(slr2.value) - Number(slr1.value)).toString();
}

function advanceSLR(){
    if(slr1 || slr2){
        slr1.oninput = changeSlr3
        slr2.oninput = changeSlr3        
    }
    if(slr3){
        slr3.oninput = function(){
            if(Number(slr3.value) > 0){
                slr1.value = "0";
                slr2.value = slr3.value;
            }
            else{
                slr1.value = (Number(slr3.value)*-1).toString();
                slr2.value = "0";
            }
        }
    }
}
    
window.requestAnimationFrame(advanceSLR);