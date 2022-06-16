var buttons = document.querySelectorAll("button");
var goal = 19;
var clicks = 0;
var numClicks = 8;




buttons.forEach(function(b){
    let inputElem = document.getElementById("problem2");
    let tries = document.getElementById("tries");
    tries.value = 8;
    inputElem.value = 2;

    b.addEventListener("click",function (event){
        if(b.id === "addition"){
            clicks ++;



            if(clicks <= numClicks){
                inputElem.value = +inputElem.value   +8;
                tries.value = tries.value   -1;

            }


            if(inputElem.value == goal){
                document.getElementById("level3").style.display = "block";
                inputElem.value = "CONGRATS YOU DID IT!";
                inputElem.value += " Click on next for more!";
                document.getElementById("addition").style.display = "none";
                document.getElementById("subtraction").style.display = "none";

            }



            if(clicks > numClicks){
                inputElem.value = "Ran out of clicks.";
                inputElem.value += " Click on restart to restart!";
                document.getElementById("addition").style.display = "none";
                document.getElementById("subtraction").style.display = "none";

            }

        }
        if(b.id === "subtraction"){
            clicks ++;

            if(clicks <= numClicks){
                inputElem.value = +inputElem.value + -5;
                tries.value = +tries.value + -1;
            }


            if(inputElem.value == goal){
                document.getElementById("level3").style.display = "block";
                inputElem.value = 'CONGRATS YOU DID IT'
                inputElem.value += " Click on next for more!";
                document.getElementById("level2").style.display = "block";
                document.getElementById("addition").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
            }


            if(clicks > numClicks){
                inputElem.value = "Ran out of clicks."
                inputElem.value += " Click on restart to restart!"
                document.getElementById("addition").style.display = "none";
                document.getElementById("subtraction").style.display = "none";

            }



        }




    })
});