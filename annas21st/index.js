var confetti_count = 75;

window.open = function() {};
            window.print = function() {};
            // Support hover state for mobile.
            if (false) {
                window.ontouchstart = function() {};
            }

function generate_confetti(){
    
    var divs = [];
    var dxs = [];
    var dys= [];

    for (var i=0 ; i < confetti_count; i++){
        var newDiv = document.createElement("div")  ;
        var cup = document.createElement("IMG");
        cup.src = `assets/solocup_clear.png`;
        cup.height = Math.random()*100+80;
        cup.width = cup.height;
        newDiv.appendChild(cup);
        
        newDiv.style.position='absolute';
        newDiv.style.left='0px'; 
        newDiv.style.top='0px';
        document.getElementById("my-canvas").appendChild(newDiv);
        
        // start the rotations
        var rotate_group = "rotate".concat(  Math.round(1+2*Math.random()).toString() );
        newDiv.classList.add(rotate_group);
        divs.push(newDiv);
        var noisedx = Math.random() * 1000;
        var noisedy = Math.random() * 900;
        var dx = noisedx;
        dxs.push(dx); 
        var dy = 100+ noisedy;
        dys.push(dy);
    }
    // add to the rotate list

    throw_confetti(0, divs, dxs, dys);
}

function throw_confetti(timecount, divs, dxs, dys){
    if (timecount<200){
        var next_timecount = timecount + 1;
        for (var i=0; i<confetti_count; i++){
            var x = timecount/1000*20  * dxs[i];
            var y = (timecount/1000*20) * (timecount/1000*20) * 0.5 * dys[i];
            divs[i].style.left = Math.round(x).toString().concat('px');
            divs[i].style.top = Math.round(y).toString().concat('px');
        }
        
        setTimeout(throw_confetti.bind(null, next_timecount, divs, dxs, dys), 20);
    }
    else{
        for (var i=0; i<confetti_count; i++){
            divs[i].classList.add("hide");
        } 
    }
}

function setCandleListener(){
    document.getElementsByClassName("candle")[0].addEventListener("click", getPartyStarted);
}

function evaporateArrow(){
    console.log("evaporate arrow"); 
    document.getElementsByClassName("arrow")[0].classList.add("evaporateContent");
}

function displayInstructions(){
    console.log("Displaying instructions for slicing cake");
    var instructions = document.getElementsByClassName("instructions")[0];
    console.log(instructions);
    instructions.classList.add("displaycontent");
}

function getPartyStarted(){
    // generate event listeners to move the cake
    displayInstructions();
    console.log("listening for layer1 activation");

    bod = document.getElementsByTagName("BODY")[0]
    bod.classList.add("bodylit");
    
    console.log("this party gettin started");
    document.getElementsByClassName("flame")[0].classList.add("show");
    var player = document.getElementById("GoodTimeGirl");
    player.play();
    
    generate_confetti() ;
    setIcingListener();
    evaporateArrow();
}

function setIcingListener(){
    document.getElementsByClassName("icing")[0].addEventListener("click", layer_top_open);
    document.getElementsByClassName("l2")[0].addEventListener("click", layer_top_open);
    document.getElementsByClassName("l3")[0].addEventListener("click", layer_top_open);
    document.getElementsByClassName("l4")[0].addEventListener("click", layer_top_open);
    document.getElementsByClassName("l5")[0].addEventListener("click", layer_top_open);
    document.getElementsByClassName("l6")[0].addEventListener("click", layer_top_open); 
}

var clicks = 1;
function layer_top_open(){
    if (clicks < 6){
        var partnametransition = "part".concat(clicks.toString());
        console.log(partnametransition);
        for (var i=clicks+1; i<=6; i++){
            // add into the relevant group
            var layerclassname = "l".concat(i.toString());
            console.log(layerclassname);
            document.getElementsByClassName(layerclassname)[0].classList.add(partnametransition);
        }
        document.getElementsByClassName("plate")[0].classList.add(partnametransition);
        // display the relevant content
        var contentname = "content_l".concat(clicks.toString());
        console.log("getting ".concat(contentname)) ;
        var contentelement = document.getElementsByClassName(contentname)[0];
        contentelement.classList.add("displaycontent");
        clicks ++;
    }
    else{
        console.log("doing nothing");
    }
}


function main(){
    // play
    setCandleListener();

}

main();
