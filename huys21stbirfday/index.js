var wheel_states = [0, 0, 0, 0];
var wheel_angles = [0, 0, 0, 0];

function turnWheel(wheel_num){
    // turn 36 degrees;
    var id = "knob".concat(wheel_num+1);
    var wheel = document.getElementById(id);
    wheel_angles[wheel_num] = wheel_angles[wheel_num]-36;
    turnElement(wheel, wheel_angles[wheel_num]);
    wheel_states[wheel_num] = (-(wheel_angles[wheel_num]/36)+1)%10;
    console.log(wheel_states);
}

function turnElement(variable, degrees){
    variable.style.webkitTransform = 'rotate('+degrees+'deg)'; 
    variable.style.mozTransform    = 'rotate('+degrees+'deg)'; 
    variable.style.msTransform     = 'rotate('+degrees+'deg)'; 
    variable.style.oTransform      = 'rotate('+degrees+'deg)'; 
    variable.style.transform       = 'rotate('+degrees+'deg)'; 
}


function num2angle(num){
    return -(num - 1) * 36;
}

function turnWheelTo(num, wheel_num){
    var id = "knob".concat(wheel_num+1); 
    var wheel = document.getElementById(id); 
    wheel_angle = num2angle(num);
    console.log(wheel_angle);
    turnElement(wheel, wheel_angle);
}


function turnWheelsTo(nums){
    for (var i=0 ; i<4; i++){
        turnWheelTo( nums[i],i );
    }
}

function turnToBirthday(){
    var magic_numbers = [0, 7, 1, 6] ;
    console.log("turning to birthday");
    turnWheelsTo(magic_numbers); 
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

function randomTurns(timecount){
    if (timecount < 6){
        next_timecount = timecount+1; 
        var a = Math.round(Math.random()*10);
        var b = Math.round(Math.random()*10);
        var c = Math.round(Math.random()*10);
        var d = Math.round(Math.random()*10);
        console.log([a, b, c, d]);
        turnWheelsTo([a,b,c,d]);

        setTimeout(randomTurns.bind(null, next_timecount), 1000);
    } 
    else {
        turnToBirthday();
    }
}

function main(){
    console.log("in main");
    // the wheels are spinning at the very beginning for a few seconds,
    randomTurns(0); 
    // arrive at the birthday
    // they arrive at the birthdate
    
    // lightbulbs flash on with the dates inside them

    // then attach event listerners for each of them
    setKnobListeners();
}


main();

