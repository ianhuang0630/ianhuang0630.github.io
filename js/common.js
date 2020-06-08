function cryptorender(element, timestep, groundtruth){
    if (timestep < 6){
        var ascii_low = 174;
        let ascii_high = 255;
        var random_string = "";
        var random_ascii;
        
        random_string = "";
        for (var i = 0; i< groundtruth.length;i++){
            random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
            random_string+= String.fromCharCode(random_ascii);
        }
        element.innerHTML = random_string;
        timestep += 1;
        console.log(timestep);
        setTimeout(cryptorender.bind(null, element, timestep, groundtruth), 80);
    }
    else{
        element.innerHTML=groundtruth;
    }
}
