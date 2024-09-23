// ==UserScript==
// @name         Cartographication for Dummies
// @version      1.0
// @description  Never mess up again!
// @author       Flutterz
// @match        https://www.neopets.com/faerieland/caverns/*
// ==/UserScript==

var perkBar = document.getElementsByClassName("perkBar");
if (perkBar[0]!=undefined){
    console.log(document.body);
    var ind = document.body.innerHTML.indexOf("suddenly feels compelled to go");
    if (ind > -1) {
        console.log(ind);
        var direction = document.body.innerHTML.substring(ind+39);
        ind = direction.indexOf("</strong>");
        direction = direction.substring(0,ind);
        var buttons = document.getElementsByClassName("button-default__2020 button-yellow__2020");
        console.log(buttons);
        if (direction.includes("left")){
            buttons[2].remove();
        } else if (direction.includes("right")){
            buttons[1].remove();
        }
    }
}
