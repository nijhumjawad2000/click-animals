function score(){
    var score = document.getElementById("lilBox");
    score.innerHTML = parseInt(score.innerHTML) + 1;
}
var div = document.getElementById("container");
var para = document.createElement("p");
para.setAttribute= ("id","para");
para.innerHTML= "";
div.appendChild(para);
document.body.appendChild(div);

function chickenSound() {
    para.innerHTML = "kok kok kok.....";
    var mySound = document.getElementById("mySound");
    var chicken = document.getElementById("chicken");
    chicken.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(3)' },
            { transform: 'scale(1)'}], {
            duration: 500,
            easing: 'linear',
            iterations: 1 });
    mySound.play();
    score();
}
function lionSound() {
    para.innerHTML = "ghraaaaaa ghraaaaaaaaaa.";
    var mySound1 = document.getElementById("mySound1");
    var lion = document.getElementById("lion");
    lion.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(3)' },
            { transform: 'scale(1)'}], {
            duration: 500,
            easing: 'linear',
            iterations: 1 });
    mySound1.play();
    score();
}

function dogSound() {
    para.innerHTML = "vooooooooook vooooooook.";
    var mySound2 = document.getElementById("mySound2");
    var dog = document.getElementById("dog");
    dog.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(3)' },
            { transform: 'scale(1)'}], {
            duration: 500,
            easing: 'linear',
            iterations: 1 });
    mySound2.play();
    score();
}

function elephantSound() {
    para.innerHTML = "reeeeeeeeee rreeeeeeeeee.";
    var mySound3 = document.getElementById("mySound3");
    var elephant = document.getElementById("elephant");
    elephant.animate([
            { transform: 'scale(1)' },
            { transform: 'scale(3)' },
            { transform: 'scale(1)'}], {
            duration: 500,
            easing: 'linear',
            iterations: 1 });
    mySound3.play();
    score();
}
