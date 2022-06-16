var buttons = document.querySelectorAll("button");
var goal = 11;
var clicks = 0;
var numClicks = 7;




buttons.forEach(function(b){
    let inputElem = document.getElementById("problem3");
    let tries = document.getElementById("tries");
    tries.value = 7;
    inputElem.value = 20;

    b.addEventListener("click",function (event){
        if(b.id === "subtraction"){
            clicks ++;

            if(clicks <= numClicks){
                inputElem.value = +inputElem.value + -7;
                tries.value = +tries.value + -1;
            }


            if(inputElem.value == goal){
                document.getElementById("level3").style.display = "block";
                inputElem.value = 'CONGRATS YOU DID IT'
                inputElem.value += " Click on next for more!";
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("subtraction2").style.display = "none";
            }


            if(clicks > numClicks){
                inputElem.value = "Ran out of clicks."
                inputElem.value += " Click on restart to restart!"
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("subtraction2").style.display = "none";

            }



        }
        if(b.id === "subtraction2"){
            clicks ++;



            if(clicks <= numClicks){
                inputElem.value = +inputElem.value +  -11;
                tries.value = +tries.value   -1;

            }


            if(inputElem.value == goal){
                document.getElementById("level3").style.display = "block";
                inputElem.value = "CONGRATS YOU DID IT!";
                inputElem.value += " Click on next for more!";
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("subtraction2").style.display = "none";

            }



            if(clicks > numClicks){
                inputElem.value = "Ran out of clicks.";
                inputElem.value += " Click on restart to restart!";
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("subtraction2").style.display = "none";

            }

        }
        if(b.id === "multiply"){
            clicks ++;
            console.log(inputElem.value)

            if(clicks <= numClicks){
                inputElem.value = +inputElem.value  * 2;
                tries.value = +tries.value + -1;
            }


            if(inputElem.value == goal){
                document.getElementById("level3").style.display = "block";
                inputElem.value = 'CONGRATS YOU DID IT'
                inputElem.value += " Click on next for more!";
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("subtraction2").style.display = "none";
            }


            if(clicks > numClicks){
                inputElem.value = "Ran out of clicks."
                inputElem.value += " Click on restart to restart!"
                document.getElementById("multiply").style.display = "none";
                document.getElementById("subtraction").style.display = "none";
                document.getElementById("subtraction2").style.display = "none";

            }



        }


    })
});