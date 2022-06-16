
function celebrate(){//gets called when the celebrate button gets pressed
    var words = document.getElementById("message");//set up dom manipulation
    var button = document.getElementById("end_button");
    var balloon = document.getElementById("balloon");
    var balloon2 = document.getElementById("balloon2");
    var video = document.getElementById("vid");



    const maxYposition1 = 400;//setup for the animation of moving balloons
    const maxYposition2 = 0;
    var pos = 0;
    var pos2 = 400;
    let posSpeed = 1;
    let posSpeed2 = 1;


    // document.body.style.backgroundImage = "url('https://www.pngarts.com/files/1/Celebration-Transparent-Background-PNG.png')";
    // document.body.style.backgroundSize = "100% 100%"
    // document.body.style.backgroundRepeat = "no-repeat"


    words.style.display = "block";//show the congraulatory words
    button.style.display = "none";//hide the button


    // balloon.style.display= "block";
    // balloon2.style.display ="block";


    setTimeout(function (){//asynchronous timeout to not have the page lag too much from the introduction of a new background (confetti)
            balloon.style.display= "block";
            balloon2.style.display ="block";
            document.body.style.backgroundImage = "url('https://purepng.com/public/uploads/large/celebration-confetti-1bp.png')";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.backgroundRepeat = "no-repeat";}
        , 1000)


    setTimeout(function (){//asynchronous timeout to set up the audio/video to come after the page is ready
        video.style.display ="block";}
        , 3000)



    function frame(){//found an example from https://www.codeblocq.com/2016/05/Two-Ways-of-Creating-an-Animation-Loop-in-JavaScript/
        pos = pos + posSpeed;//modified the second example
        if(pos > maxYposition1 || pos < 0){
            posSpeed = posSpeed * (-1);

        }
        balloon.style.top = pos + "px";
        window.requestAnimationFrame(frame);

    }
    window.requestAnimationFrame(frame);

    function frame2(){//reversed the example
        pos2 = pos2 - posSpeed2;
        if(pos2 < maxYposition2 || pos2 > 400){
            posSpeed2 = posSpeed2 * (-1);

        }
        balloon2.style.top = pos2 + "px";
        window.requestAnimationFrame(frame2);

    }
    window.requestAnimationFrame(frame2);










}