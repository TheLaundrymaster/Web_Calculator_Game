var buttons = document.querySelectorAll("button");
var goal = 34;
var clicks = 0;
var numClicks = 9;




buttons.forEach(function(b){
    let inputElem = document.getElementById("problem4");
    let tries = document.getElementById("tries");
    tries.value = 9;
    inputElem.value = 1;

    b.addEventListener("click",function (event){
        if(b.id === "subtraction"){
            clicks ++;

            if(clicks <= numClicks){
                inputElem.value = +inputElem.value + -8;
                tries.value = +tries.value + -1;
            }


            if(inputElem.value == goal){
                document.getElementById("level4").style.display = "block";
                inputElem.value = 'CONGRATS YOU DID IT'
                inputElem.value += " Click on next for more!";
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("addition").style.display = "none";
            }


            if(clicks > numClicks){
                inputElem.value = "Ran out of clicks."
                inputElem.value += " Click on restart to restart!"
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("addition").style.display = "none";

            }



        }
        if(b.id === "addition"){
            clicks ++;



            if(clicks <= numClicks){
                inputElem.value = +inputElem.value +  +3;
                tries.value = +tries.value   -1;

            }


            if(inputElem.value == goal){
                document.getElementById("level4").style.display = "block";
                inputElem.value = "CONGRATS YOU DID IT!";
                inputElem.value += " Click on next for more!";
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("addition").style.display = "none";

            }



            if(clicks > numClicks){
                inputElem.value = "Ran out of clicks.";
                inputElem.value += " Click on restart to restart!";
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("addition").style.display = "none";

            }

        }
        if(b.id === "multiply"){
            clicks ++;
            console.log(inputElem.value)

            if(clicks <= numClicks){
                inputElem.value = +inputElem.value  * 7;
                tries.value = +tries.value + -1;
            }


            if(inputElem.value == goal){
                document.getElementById("level4").style.display = "block";
                inputElem.value = 'CONGRATS YOU DID IT'
                inputElem.value += " Click on next for more!";
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("addition").style.display = "none";
            }


            if(clicks > numClicks){
                inputElem.value = "Ran out of clicks."
                inputElem.value += " Click on restart to restart!"
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("addition").style.display = "none";

            }



        }


    })
});