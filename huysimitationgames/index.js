var wheel_states = [0, 0, 0, 0];
var wheel_angles = [0, 0, 0, 0];

var magic_numbers = [0, 7, 1, 6] ;

var not_the_answers = [[1,2,0,7], // memory 1
                        [0,5,1,9], // memory 2
                        [0,4,1,3], // memory 3
                        [0,8,3,1], // memory 4
                        [2,0,2,0]]; 
// var not_the_answers = [[1,0,0,0], // memory 1
//                         [2,0,0,0], // memory 2
//                         [3,0,0,0], // memory 3
//                         [4,0,0,0],// memory 4
//                         [5,0,0,0]]; 
var stage_number=0;

function turnWheel(wheel_num){
    // turn 36 degrees;
    var id = "knob".concat(wheel_num+1);
    var wheel = document.getElementById(id);
    wheel_angles[wheel_num] = wheel_angles[wheel_num]-36;
    turnElement(wheel, wheel_angles[wheel_num]);
    wheel_states[wheel_num] = (-(wheel_angles[wheel_num]/36)+1)%10;
    console.log(wheel_states);
    checkAnswer();
}

function checkAnswer(){
    console.log("checking answers");
    if (statesEquals(wheel_states, not_the_answers[stage_number])){
        // light the bulb 
        turnOnLightbulbs(not_the_answers[stage_number]);
        // display the next level
        hide_current_level();
        // increment the stage_number
        stage_number++;
        display_current_level();
    }
    else{
        // dim the bulb
        turnOffLightbulbs(not_the_answers[stage_number]);
    }
}

function hide_current_level(){
    var stage_content_classname = "stage".concat(stage_number);
    var memory_classname= "memory".concat(stage_number);
    stage_content_div = document.getElementsByClassName(stage_content_classname)[0];
    memory_content_div = document.getElementsByClassName(memory_classname)[0];

    stage_content_div.classList.remove("block_visible");
    stage_content_div.classList.add("block_invisible");
    memory_content_div.classList.remove("block_visible"); 
    memory_content_div.classList.add("block_invisible");
}

function display_current_level(){
    var stage_content_classname = "stage".concat(stage_number);
    var memory_classname= "memory".concat(stage_number);
    stage_content_div = document.getElementsByClassName(stage_content_classname)[0];
    memory_content_div = document.getElementsByClassName(memory_classname)[0];

    stage_content_div.classList.remove("block_invisible");
    stage_content_div.classList.add("block_visible");
    memory_content_div.classList.remove("block_invisible"); 
    memory_content_div.classList.add("block_visible");
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
    return wheel_angle;
}


function turnWheelsTo(nums){
    var new_wheel_angles = [0, 0, 0, 0];
    for (var i=0 ; i<4; i++){
        new_wheel_angles[i] = turnWheelTo( nums[i],i );
    }
    wheel_states = nums;
    wheel_angles = new_wheel_angles;
}

function turnToBirthday(){
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


function turnOnLightbulbs(nums){
    console.log("turn on lightbulbs");
    for (var i=0; i<4; i++){
        var id = "bulb".concat(i+1);
        var bulb= document.getElementById(id);
        console.log("removing bulb from off") ;
        bulb.classList.remove("off"); 
        console.log("adding bulb to on") ;
        bulb.classList.add("on");
        bulb.innerHTML = "<h1 class=datenum>"+nums[i]+"</h1>";
    }    
}

function turnOffLightbulbs(){
    console.log("turn off lightbulbs");
    for (var i=0; i<4; i++){
        var id = "bulb".concat(i+1);
        var bulb = document.getElementById(id);
        console.log("removing bulb from on") ;
        bulb.classList.remove("on"); 
        console.log("adding bulb to off") ;
        bulb.classList.add("off");
        bulb.innerHTML = "<h1 class=datenum>"+"</h1>";
    }    
}




function statesEquals(a, b){
    return a[0]===b[0] && a[1] === b[1] && a[2]===b[2] && a[3] === b[3]
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
        if (statesEquals(wheel_states, magic_numbers)){
            turnOnLightbulbs(magic_numbers);
        }
    }
}

function main(){
    console.log("in main");
    

    // the wheels are spinning at the very beginning for a few seconds,
    randomTurns(0); 
    // arrive at the birthday
    // they arrive at the birthdate

    // then attach event listerners for each of them
    setKnobListeners();
   
}


main();

