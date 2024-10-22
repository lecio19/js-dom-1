const myButton = document.getElementById("switchLamp");
const myDiv = document.getElementById("image-container");

myButton.addEventListener('click', function () {
    if(myDiv.classList.contains("off")){
        myDiv.classList.add('on');
        myDiv.classList.remove('off');
        myDiv.style.backgroundImage = "url('../yellow_lamp.png')"
        myButton.innerText="Spegni";
    }
    else {
        myDiv.classList.add('off');
        myDiv.classList.remove('on');
        myDiv.style.backgroundImage = "url('../white_lamp.png')"
        myButton.innerText="Accendi";
    }
});