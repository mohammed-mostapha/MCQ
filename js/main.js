

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);



/*homepage*/


function toggleSidebar() {
    document.getElementById("sidebar-menu").classList.toggle('active');
    document.getElementById("body").classList.toggle('active');

  }
  
  
  $("#toggle-button").click(function(){
    $(this).toggleClass("active")
  });


/*end homepage*/







/* chapter14 */

function result() {
    var question1 = document.FMchapter14.question1.value,
     question2 = document.FMchapter14.question2.value,
     question3 = document.FMchapter14.question3.value,
     question4 = document.FMchapter14.question4.value,
     question5 = document.FMchapter14.question5.value,
     question6 = document.FMchapter14.question6.value,
     question7 = document.FMchapter14.question7.value,
     question8 = document.FMchapter14.question8.value,
     question9 = document.FMchapter14.question9.value,
     question10 = document.FMchapter14.question10.value,
 
    correct = 0;

    if( question1 == "600 000 N/m<sup>2</sup>" ) {
        correct++;
        document.querySelector('.q1').innerHTML = "1) " +  question1 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q1').innerHTML = "1) " + question1 + " <i class='fas fa-times'></i>" + "<br>" +  "  600 000 N/m<sup>2</sup>" + " <i class='fas fa-check'></i>"+ "<br>"
    }

    if( question2 == "1 800 ATM" ) {
        correct++;
        document.querySelector('.q2').innerHTML = "2) " + question2 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q2').innerHTML = "2) " +  question2 + " <i class='fas fa-times'></i>" + "<br>" + "  1 800 ATM" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question3 == "0.050" ) {
        correct++;
        document.querySelector('.q3').innerHTML = "3) " +  question3 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q3').innerHTML = "3) " +   question3 + " <i class='fas fa-times'></i>" + "<br>" + "  0.050" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question4 == "1.8 x 10<sup>7</sup> kg/m<sup>3" ) {
        correct++;
        document.querySelector('.q4').innerHTML = "4) " +   question4 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q4').innerHTML = "4) " +   question4 + " <i class='fas fa-times'></i>" + "<br>" + "  1.8 x 10<sup>7</sup> kg/m<sup>3" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question5 == "1.41 x 10<sup>-3</sup> kg/m<sup>3</sup>" ) {
        correct++;
        document.querySelector('.q5').innerHTML = "5) " +  question5 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q5').innerHTML = "5) " +  question5 + " <i class='fas fa-times'></i>" + "<br>" +  "  1.41 x 10<sup>-3</sup> kg/m<sup>3</sup>" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question6 == "20.4 ATM" ) {
        correct++;
        document.querySelector('.q6').innerHTML = "6) " + question6 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q6').innerHTML = "6) " + question6 + " <i class='fas fa-times'></i>" + "<br>" +  "  20.4 ATM" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question7 == "100 ATM" ) {
        correct++;
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-times'></i>" + "<br>" +  "  100 ATM" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question8 == "5.3 x 10<sup>18</sup>kg" ) {
        correct++;
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-times'></i>" + "<br>" +  "  5.3 x 10<sup>18</sup>kg" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question9 == "214 kg" ) {
        correct++;
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-times'></i>" + "<br>" +  "  214 kg" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question10 == "89%" ) {
        correct++;
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-times'></i>" + "<br>" +  "  89%" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    var messages = ["Great Job!", "That's just okay", "You really need to do better..."],
        images = ["images/success.gif","images/passed.png", "images/mr.bean fail.gif"],
        range;

        if ( correct < 5 ) {
            range = 2;
        }

        if ( correct > 4 && correct < 10 ) {
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
    timeLeft = 60;


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
    ding = new Audio('ding.mp3');
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



/* end chapter14 */



/* About */


$(window).on('load', function() {
    $('.handasa').addClass('animated-handasa');
    $('.bio-list').addClass('animated-bio-list');
});



/* end About */

