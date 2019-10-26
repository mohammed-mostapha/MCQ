

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







/* Physics 1 */

function result() {
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
    question11 = document.physics1form.question11.value,
    question12 = document.physics1form.question12.value,
    question13 = document.physics1form.question13.value,
    question14 = document.physics1form.question14.value,
    question15 = document.physics1form.question15.value,
    question16 = document.physics1form.question16.value,
    question17 = document.physics1form.question17.value,
    question18 = document.physics1form.question18.value,
    question19 = document.physics1form.question19.value,
    question20 = document.physics1form.question20.value,
 
    correct = 0;

    if( question1 == "the distance traveled by light in a vacuum" ) {
        correct++;
        document.querySelector('.q1').innerHTML = "1) " +  question1 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q1').innerHTML = "1) " + question1 + " <i class='fas fa-times'></i>" + "<br>" +  "  the distance traveled by light in a vacuum" + " <i class='fas fa-check'></i>"+ "<br>"
    }

    if( question2 == "the frequency of radiation emitted by cesium aroms" ) {
        correct++;
        document.querySelector('.q2').innerHTML = "2) " + question2 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q2').innerHTML = "2) " +  question2 + " <i class='fas fa-times'></i>" + "<br>" + "  the frequency of radiation emitted by cesium aroms" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question3 == "the mass of a particular object kept in France" ) {
        correct++;
        document.querySelector('.q3').innerHTML = "3) " +  question3 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q3').innerHTML = "3) " +   question3 + " <i class='fas fa-times'></i>" + "<br>" + "  the mass of a particular object kept in France" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question4 == "less than 125" ) {
        correct++;
        document.querySelector('.q4').innerHTML = "4) " +   question4 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q4').innerHTML = "4) " +   question4 + " <i class='fas fa-times'></i>" + "<br>" + "  less than 125" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question5 == "greater than 15" ) {
        correct++;
        document.querySelector('.q5').innerHTML = "5) " +  question5 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q5').innerHTML = "5) " +  question5 + " <i class='fas fa-times'></i>" + "<br>" +  "  greater than 15" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question6 == "false" ) {
        correct++;
        document.querySelector('.q6').innerHTML = "6) " + question6 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q6').innerHTML = "6) " + question6 + " <i class='fas fa-times'></i>" + "<br>" +  "  false" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question7 == "1.3" ) {
        correct++;
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-times'></i>" + "<br>" +  "  1.3" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question8 == "4.8 x 10<sup>-4</sup>" ) {
        correct++;
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-times'></i>" + "<br>" +  "  4.8 x 10<sup>-4</sup>" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question9 == "0.348" ) {
        correct++;
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-times'></i>" + "<br>" +  "  0.348" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question10 == "4 x 10<sup>-5</sup>cm" ) {
        correct++;
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-times'></i>" + "<br>" +  "  4 x 10<sup>-5</sup>cm" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question11 == "3.5 x 10<sup>2</sup>" ) {
        correct++;
        document.querySelector('.q11').innerHTML = "11) " + question11 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q11').innerHTML = "11) " + question11 + " <i class='fas fa-times'></i>" + "<br>" +  "  3.5 x 10<sup>2</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question12 == "7.26 x 10<sup>3</sup> kg/m<sup>3</sup>" ) {
        correct++;
        document.querySelector('.q12').innerHTML = "12) " + question12 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q12').innerHTML = "12) " + question12 + " <i class='fas fa-times'></i>" + "<br>" +  "  7.26 x 10<sup>3</sup> kg/m<sup>3</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question13 == 0.0012 ) {
        correct++;
        document.querySelector('.q13').innerHTML = "13) " + question13 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q13').innerHTML = "13) " + question13 + " <i class='fas fa-times'></i>" + "<br>" +  ' ' + 0.0012 + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question14 == 0.0000735 ) {
        correct++;
        document.querySelector('.q14').innerHTML = "14) " + question14 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q14').innerHTML = "14) " + question14 + " <i class='fas fa-times'></i>" + "<br>" + ' ' + 0.0000735 + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question15 == "1.776 x 10<sup>-4</sup>" ) {
        correct++;
        document.querySelector('.q15').innerHTML = "15) " + question15 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q15').innerHTML = "15) " + question15 + " <i class='fas fa-times'></i>" + "<br>" +  " 1.776 x 10<sup>-4</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question16 == "3.25 x 10<sup>-10</sup>" ) {
        correct++;
        document.querySelector('.q16').innerHTML = "16) " + question16 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q16').innerHTML = "16) " + question16 + " <i class='fas fa-times'></i>" + "<br>" +  "  3.25 x 10<sup>-10</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question17 == "4 significant figures" ) {
        correct++;
        document.querySelector('.q17').innerHTML = "17) " + question17 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q17').innerHTML = "17) " + question17 + " <i class='fas fa-times'></i>" + "<br>" +  "  4 significant figures" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question18 == 0.91 ) {
        correct++;
        document.querySelector('.q18').innerHTML = "1) " + question18 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q18').innerHTML = "18) " + question18 + " <i class='fas fa-times'></i>" + "<br>" +  " " + 0.91 + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question19 == 1133 ) {
        correct++;
        document.querySelector('.q19').innerHTML = "19) " + question19 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q19').innerHTML = "19) " + question19 + " <i class='fas fa-times'></i>" + "<br>" +  " " + 1133 + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question20 == 7.6 ) {
        correct++;
        document.querySelector('.q20').innerHTML = "20) " + question20 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q20').innerHTML = "20) " + question20 + " <i class='fas fa-times'></i>" + "<br>" +  " " + 7.6 + " <i class='fas fa-check'></i>" + "<br>" 

    }

    var messages = ["Great Job!", "That's just okay", "You really need to do better..."],
        images = ["../images/success.gif","../images/passed.png", "../images/mr.bean fail.gif"],
        range;

        if ( correct < 14 ) {
            range = 2;
        }

        if ( correct >= 14 && correct < 20 ) {
            range = 1;
        }

        if ( correct > 19 ) {
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
    timeLeft = 1200;


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



/* end physics 1 */



/* About */


$(window).on('load', function() {
    $('.handasa').addClass('animated-handasa');
    $('.bio-list').addClass('animated-bio-list');
});



/* end About */



/* Later */

   
    var flashing = function(){
        $('.later').toggleClass('flashing');
}

    $('.contain-later button').click(function() {
        
        window.setInterval(flashing, 800);
        $('.contain-later button').attr("disabled", true);
        
        
    });






/* end Later */