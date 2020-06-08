function main(){
    var element= document.getElementById("header1"); 
    var groundtruth=element.innerHTML;
    cryptorender(element, 0, groundtruth); 

    var element2= document.getElementById("header2");
    var groundtruth2=element2.innerHTML;
    cryptorender(element2, 0, groundtruth2);

}


main();
