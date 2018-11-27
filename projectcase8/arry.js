/*
Chapter case project 8
Author: Sreekanth Sreekumar
      Date:   11/26/2018
*/



// Created an array
var car = [];
function carpp(event) {
    if (event === undefined) {
        event = window.event;
    }
    //Storing variables
    var elm = event.target || event.srcElement;
    var sele= elm.value;
    if (elm.checked) {
        car.push(sele);
        var newcar = document.createElement("ul");
        newcar.innerHTML = sele;
        document.getElementById("carlist").appendChild(newcar);         
    }
    else {
        var car1 = document.querySelectorAll("#carlist ul")
        for (var i = 0; i < car.length; i++) {
            if (car1[i].innerHTML === sele) {
               car.splice(i, 1);
                car1[i].parentNode.removeChild(car1[i]);
                break;
            }
        }
    }
}
function check() {
    var car2 = document.getElementsByName("sele");
    if (car2[0].addEventListener) {
        for (var i = 0; i < car2.length; i++) {
            car2[i].addEventListener("change", carpp, false);
        }
    } else if (car2[0].attachEvent) {
        for (var i = 0; i < car2.length; i++) {
            car2[i].attachEvent("onchange",);
        }
    }    
}

if (window.addEventListener) {
    window.addEventListener("load", check, false);
} 
else if (window.attachEvent) {
    window.attachEvent("onload", check);
}