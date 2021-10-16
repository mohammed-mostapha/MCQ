
/* Physics 1-2*/

function resultph1_2() {
    var question1 = document.physics1form.question1.value,
    question2 = document.physics1form.question2.value,
    question3 = document.physics1form.question3.value,
    question4 = document.physics1form.question4.value,
    question5 = document.physics1form.question5.value,
    question6 = document.physics1form.question6.value,
    question7 = document.physics1form.question7.value,
    question8 = document.physics1form.question8.value,
    question9 = document.physics1form.question9.value,
    question10 = document.physics1form.question10.value,
 
    correct = 0;

    if( question1 == "compressive stress to volumetric strain" ) {
        correct++;
        document.querySelector('.q1').innerHTML = "1) " +  question1 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q1').innerHTML = "1) " + question1 + " <i class='fas fa-times'></i>" + "<br>" +  "  compressive stress to volumetric strain" + " <i class='fas fa-check'></i>"+ "<br>"
    }

    if( question2 == "They both displace the same quantity of water." ) {
        correct++;
        document.querySelector('.q2').innerHTML = "2) " + question2 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q2').innerHTML = "2) " +  question2 + " <i class='fas fa-times'></i>" + "<br>" + "  They both displace the same quantity of water." + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question3 == "Rigidity modulus" ) {
        correct++;
        document.querySelector('.q3').innerHTML = "3) " +  question3 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q3').innerHTML = "3) " +   question3 + " <i class='fas fa-times'></i>" + "<br>" + "  Rigidity modulus" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question4 == "Mercury barometer" ) {
        correct++;
        document.querySelector('.q4').innerHTML = "4) " +   question4 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q4').innerHTML = "4) " +   question4 + " <i class='fas fa-times'></i>" + "<br>" + "  Mercury barometer" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question5 == "Archimedes' Principle" ) {
        correct++;
        document.querySelector('.q5').innerHTML = "5) " +  question5 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q5').innerHTML = "5) " +  question5 + " <i class='fas fa-times'></i>" + "<br>" +  "  Archimedes' Principle" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question6 == "stress = constant x strain" ) {
        correct++;
        document.querySelector('.q6').innerHTML = "6) " + question6 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q6').innerHTML = "6) " + question6 + " <i class='fas fa-times'></i>" + "<br>" +  "  stress = constant x strain" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question7 == "YA = 1/2 YB" ) {
        correct++;
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-times'></i>" + "<br>" +  "  YA = 1/2 YB" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question8 == "600 000 N/m<sup>2</sup>" ) {
        correct++;
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-times'></i>" + "<br>" +  "  600 000 N/m<sup>2</sup>" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question9 == "the water level does not change." ) {
        correct++;
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-times'></i>" + "<br>" +  "  the water level does not change." + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question10 == "16 m/s" ) {
        correct++;
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-times'></i>" + "<br>" +  "  16 m/s" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    

    var messages = ["Great Job!", "That's just okay", "You really need to do better..."],
        images = ["../images/success.gif","../images/passed.png", "../images/mr.bean fail.gif"],
        range;

        if ( correct < 7 ) {
            range = 2;
        }

        if ( correct >= 7 && correct < 10 ) {
            range = 1;
        }

        if ( correct > 9 ) {
            range = 0;
        }
    
    document.getElementById('after-evaluation').style.display = "flex";
    document.getElementById('message').innerHTML = messages[range];
    document.getElementById('number_correct').innerHTML="You got " + correct + " correct.";
    document.getElementById('impression').src = images[range];

    
}


$('.evaluator').click(function() {
    $('form').css({'display': 'none'});
    $('html,body').css({'background': '#fff'});
    clearInterval(interval);
    
});



var counter = 0,
    timeLeft = 600;


function pad2(number) {   
     return (number < 10 ? '0' : '') + number
}



function convertSeconds(s) {
    var min = Math.floor(s / 60),
        sec = s % 60;
        return pad2(min) + ': ' + pad2(sec);
}



var ding;

function timerFinished() {
    ding = new Audio('../audio/ding.mp3');
    ding.play();
}

var interval;

function setup() {
   
    var timer = document.querySelector('#timer');
    timer.innerHTML = convertSeconds(timeLeft - counter);

     interval = setInterval (timeIt, 1000);

    function timeIt() {
        counter++;
        timer.innerHTML = convertSeconds(timeLeft - counter);

        if(counter == timeLeft) {
            timerFinished();
            clearInterval(interval);
            document.querySelector('form').style.display = 'none';
            document.querySelector('body').style.background = '#fff';
            result();
            
        }
    }
    
}



/* end physics 1-2*/