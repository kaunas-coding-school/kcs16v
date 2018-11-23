let el = document.getElementById("elementas");
let pav = document.getElementById("foto");


// el.style.color = 0;
el.style.backgroundColor = 0;
el.style.fontSize = "0px";

pav.src = "/img/logo.png";

var x = 0;
while(x < 255)
{
    x += 1;
    el.fontSize = x + "px";

}