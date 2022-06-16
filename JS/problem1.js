var buttons = document.querySelectorAll("button");//initialize variables
var goal = 21;
var clicks = 0;
var numClicks = 8;




buttons.forEach(function(b){//set up the use of the callback with buttons
let inputElem = document.getElementById("problem1");//access the html for each problem
let inputElem2 = document.getElementById("tries");
inputElem2.value = 8;//the number of tries
inputElem.value = 5;//the goal number

    b.addEventListener("click",function (event){//set up the event listener for the operational buttons
        if(b.id === "addition"){ //addition button
            clicks ++;//increase the number of clicks
            // console.log(inputElem.value)


            if(clicks <= numClicks){//shows the user the addition(operation) of the starting number while subtracting 1 from the tries
                inputElem.value = +inputElem.value   +4;
                inputElem2.value = inputElem2.value   -1;

            }


            if(inputElem.value == goal){//if with the addition button the goal is met/ show the next button congratulate them and take away any other operations
                document.getElementById("level2").style.display = "block";
                inputElem.value = "CONGRATS YOU DID IT!";
                inputElem.value += " Click on next for more!";
                document.getElementById("addition").style.display = "none";
                document.getElementById("subtraction").style.display = "none";

            }



            if(clicks > numClicks){//is the number of clicks is greater than the number of tries hide operations and let the user to either restart the level or go to the menu
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
                inputElem2.value = +inputElem2.value + -1;
            }


            if(inputElem.value == goal){
                document.getElementById("level2").style.display = "block";
                inputElem.value = 'CONGRATS YOU DID IT'
                inputElem.value += " Click on next for more!";
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