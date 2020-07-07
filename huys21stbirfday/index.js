var wheel_states = [0, 0, 0, 0];
var wheel_angles = [0, 0, 0, 0];

function turnWheel(wheel_num){
    // turn 36 degrees;
    var id = "knob".concat(wheel_num+1);
    var wheel = document.getElementById(id);
    wheel_angles[wheel_num] = (wheel_angles[wheel_num]+36);
    wheel.style.webkitTransform = 'rotate('+wheel_angles[wheel_num]+'deg)'; 
    wheel.style.mozTransform    = 'rotate('+wheel_angles[wheel_num]+'deg)'; 
    wheel.style.msTransform     = 'rotate('+wheel_angles[wheel_num]+'deg)'; 
    wheel.style.oTransform      = 'rotate('+wheel_angles[wheel_num]+'deg)'; 
    wheel.style.transform       = 'rotate('+wheel_angles[wheel_num]+'deg)'; 
    wheel_states[wheel_num] = wheel_angles[wheel_num]/36%10;
    console.log(wheel_states);
}

function turnKnob1(){
    turnWheel(0);
}
function turnKnob2(){ 
    turnWheel(1);
}
function turnKnob3(){
    turnWheel(2);
}
function turnKnob4(){
    turnWheel(3);
}

function setKnobListeners(){
    console.log("adding knob listeners");
    document.getElementById("knob1").addEventListener("click", turnKnob1);
    document.getElementById("knob2").addEventListener("click", turnKnob2);
    document.getElementById("knob3").addEventListener("click", turnKnob3);
    document.getElementById("knob4").addEventListener("click", turnKnob4);
}

function main(){
    console.log("in main");
    // the wheels are spinning at the very beginning for a few seconds,
    // they arrive at the birthdate
    // then attach event listerners for each of them
    setKnobListeners();
}


main();

