(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var confetti_count = 100;

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
        var noisedy = Math.random() * 1000;
        var dx = noisedx;
        dxs.push(dx); 
        var dy = 50 + noisedy;
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

function getPartyStarted(){
    bod = document.getElementsByTagName("BODY")[0]
    bod.classList.add("bodylit");
    
    console.log("this party gettin started");
    document.getElementsByClassName("flame")[0].classList.add("show");
    var player = document.getElementById("GoodTimeGirl");
    player.play();
    
    generate_confetti() ;
}

function main(){
    // play
    setCandleListener();
    console.log("hello");
}

main();

},{}]},{},[1]);
