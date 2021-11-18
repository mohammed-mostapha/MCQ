
/* Physics 1-2*/

function resultph1_midterm() {
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
    question21 = document.physics1form.question21.value,
    question22 = document.physics1form.question22.value,
    question23 = document.physics1form.question23.value,
    question24 = document.physics1form.question24.value,
    question25 = document.physics1form.question25.value,
    question26 = document.physics1form.question26.value,
    question27 = document.physics1form.question27.value,
    question28 = document.physics1form.question28.value,
    question29 = document.physics1form.question29.value,
    question30 = document.physics1form.question30.value,
    question31 = document.physics1form.question31.value,
    question32 = document.physics1form.question32.value,
    question33 = document.physics1form.question33.value,
    question34 = document.physics1form.question34.value,
    question35 = document.physics1form.question35.value,
    question36 = document.physics1form.question36.value,
    question37 = document.physics1form.question37.value,
    question38 = document.physics1form.question38.value,
    question39 = document.physics1form.question39.value,
    question40 = document.physics1form.question40.value,
    

 
    correct = 0;

    if( question1 == "the distance traveled by light in a vacuum" ) {
        correct++;
        document.querySelector('.q1').innerHTML = "1) " +  question1 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q1').innerHTML = "1) " + question1 + " <i class='fas fa-times'></i>" + "<br>" +  "  the distance traveled by light in a vacuum" + " <i class='fas fa-check'></i>"+ "<br>"
    }

    if( question2 == "greater than 6.5" ) {
        correct++;
        document.querySelector('.q2').innerHTML = "2) " + question2 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q2').innerHTML = "2) " +  question2 + " <i class='fas fa-times'></i>" + "<br>" + "  greater than 6.5" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question3 == "greater than 5.74" ) {
        correct++;
        document.querySelector('.q3').innerHTML = "3) " +  question3 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q3').innerHTML = "3) " +   question3 + " <i class='fas fa-times'></i>" + "<br>" + "  greater than 5.74" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question4 == "False" ) {
        correct++;
        document.querySelector('.q4').innerHTML = "4) " +   question4 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q4').innerHTML = "4) " +   question4 + " <i class='fas fa-times'></i>" + "<br>" + "  False" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question5 == "False" ) {
        correct++;
        document.querySelector('.q5').innerHTML = "5) " +  question5 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q5').innerHTML = "5) " +  question5 + " <i class='fas fa-times'></i>" + "<br>" +  "  False" + " <i class='fas fa-check'></i>" + "<br>"

    }

    if( question6 == "0.0000734" ) {
        correct++;
        document.querySelector('.q6').innerHTML = "6) " + question6 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q6').innerHTML = "6) " + question6 + " <i class='fas fa-times'></i>" + "<br>" +  "  0.0000734" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question7 == "2 m/s" ) {
        correct++;
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-times'></i>" + "<br>" +  "  2 m/s" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question8 == "none of these" ) {
        correct++;
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-times'></i>" + "<br>" +  "  none of these" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question9 == "1 m" ) {
        correct++;
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-times'></i>" + "<br>" +  "  1 m" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question10 == "7.86x10<sup>-7</sup>" ) {
        correct++;
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-times'></i>" + "<br>" +  "  7.86x10<sup>-7</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question11 == "3.142" ) {
        correct++;
        document.querySelector('.q11').innerHTML = "11) " + question11 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q11').innerHTML = "11) " + question11 + " <i class='fas fa-times'></i>" + "<br>" +  "  3.142" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    
    if( question12 == "True" ) {
        correct++;
        document.querySelector('.q12').innerHTML = "12) " + question12 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q12').innerHTML = "12) " + question12 + " <i class='fas fa-times'></i>" + "<br>" +  "  True" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question13 == "2.22x10<sup>10</sup> N/m<sup>2</sup>" ) {
        correct++;
        document.querySelector('.q13').innerHTML = "13) " + question13 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q13').innerHTML = "13) " + question13 + " <i class='fas fa-times'></i>" + "<br>" +  "  2.22x10<sup>10</sup> N/m<sup>2</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question14 == "the breaking stress (the tensile strength)" ) {
        correct++;
        document.querySelector('.q14').innerHTML = "14) " + question14 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q14').innerHTML = "14) " + question14 + " <i class='fas fa-times'></i>" + "<br>" +  "  the breaking stress (the tensile strength)" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question15 == "gases or liquids" ) {
        correct++;
        document.querySelector('.q15').innerHTML = "15) " + question15 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q15').innerHTML = "15) " + question15 + " <i class='fas fa-times'></i>" + "<br>" +  "  gases or liquids" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question16 == "SI system" ) {
        correct++;
        document.querySelector('.q16').innerHTML = "16) " + question16 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q16').innerHTML = "16) " + question16 + " <i class='fas fa-times'></i>" + "<br>" +  "  SI system" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question17 == "plastic material" ) {
        correct++;
        document.querySelector('.q17').innerHTML = "17) " + question17 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q17').innerHTML = "17) " + question17 + " <i class='fas fa-times'></i>" + "<br>" +  "  plastic material" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question18 == "the pressure on the bottom of each can is the same" ) {
        correct++;
        document.querySelector('.q18').innerHTML = "18) " + question18 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q18').innerHTML = "18) " + question18 + " <i class='fas fa-times'></i>" + "<br>" +  "  the pressure on the bottom of each can is the same" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question19 == "Pascal’s principle" ) {
        correct++;
        document.querySelector('.q19').innerHTML = "19) " + question19 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q19').innerHTML = "19) " + question19 + " <i class='fas fa-times'></i>" + "<br>" +  "  Pascal’s principle" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question20 == "100 N" ) {
        correct++;
        document.querySelector('.q20').innerHTML = "20) " + question20 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q20').innerHTML = "20) " + question20 + " <i class='fas fa-times'></i>" + "<br>" +  "  100 N" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question21 == "the water level in the pitcher remains the same" ) {
        correct++;
        document.querySelector('.q21').innerHTML = "21) " + question21 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q21').innerHTML = "21) " + question21 + " <i class='fas fa-times'></i>" + "<br>" +  "  the water level in the pitcher remains the same" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question22 == "the absolute pressure will be less than 2ρ" ) {
        correct++;
        document.querySelector('.q22').innerHTML = "22) " + question22 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q22').innerHTML = "22) " + question22 + " <i class='fas fa-times'></i>" + "<br>" +  "  the absolute pressure will be less than 2ρ" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question23 == "not change" ) {
        correct++;
        document.querySelector('.q23').innerHTML = "23) " + question23 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q23').innerHTML = "23) " + question23 + " <i class='fas fa-times'></i>" + "<br>" +  "  not change" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question24 == "the water level does not change" ) {
        correct++;
        document.querySelector('.q24').innerHTML = "24) " + question24 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q24').innerHTML = "24) " + question24 + " <i class='fas fa-times'></i>" + "<br>" +  "  the water level does not change" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question25 == "W = (ρ<sub>Fe</sub> - ρ<sub>fluid</sub>) gℓ<sup>3<sup>" ) {
        correct++;
        document.querySelector('.q25').innerHTML = "25) " + question25 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q25').innerHTML = "25) " + question25 + " <i class='fas fa-times'></i>" + "<br>" +  "  W = (ρ<sub>Fe</sub> - ρ<sub>fluid</sub>) gℓ<sup>3<sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question26 == "590 000N/m<sup>2</sup>" ) {
        correct++;
        document.querySelector('.q26').innerHTML = "26) " + question26 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q26').innerHTML = "26) " + question26 + " <i class='fas fa-times'></i>" + "<br>" +  "  590 000N/m<sup>2</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question27 == "less than the volume  of fresh water" ) {
        correct++;
        document.querySelector('.q27').innerHTML = "27) " + question27 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q27').innerHTML = "27) " + question27 + " <i class='fas fa-times'></i>" + "<br>" +  "  less than the volume  of fresh water" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question28 == "remains constant" ) {
        correct++;
        document.querySelector('.q28').innerHTML = "28) " + question28 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q28').innerHTML = "28) " + question28 + " <i class='fas fa-times'></i>" + "<br>" +  "  remains constant" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question29 == "199 N" ) {
        correct++;
        document.querySelector('.q29').innerHTML = "29) " + question29 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q29').innerHTML = "29) " + question29 + " <i class='fas fa-times'></i>" + "<br>" +  "  199 N" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question30 == "The pressure is the same at each of the labeled points" ) {
        correct++;
        document.querySelector('.q30').innerHTML = "30) " + question30 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q30').innerHTML = "30) " + question30 + " <i class='fas fa-times'></i>" + "<br>" +  "  The pressure is the same at each of the labeled points" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question31 == "the iron" ) {
        correct++;
        document.querySelector('.q31').innerHTML = "31) " + question31 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q31').innerHTML = "31) " + question31 + " <i class='fas fa-times'></i>" + "<br>" +  "  the iron" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question32 == "it does not change" ) {
        correct++;
        document.querySelector('.q32').innerHTML = "32) " + question32 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q32').innerHTML = "32) " + question32 + " <i class='fas fa-times'></i>" + "<br>" +  "  it does not change" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question33 == "decreases" ) {
        correct++;
        document.querySelector('.q33').innerHTML = "33) " + question33 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q33').innerHTML = "33) " + question33 + " <i class='fas fa-times'></i>" + "<br>" +  "  decreases" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question34 == "the ratio of the change in length to the original length" ) {
        correct++;
        document.querySelector('.q34').innerHTML = "34) " + question34 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q34').innerHTML = "34) " + question34 + " <i class='fas fa-times'></i>" + "<br>" +  "  the ratio of the change in length to the original length" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question35 == "ΔV<sub>2</sub> = 1/2ΔV<sub>1</sub>" ) {
        correct++;
        document.querySelector('.q35').innerHTML = "35) " + question35 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q35').innerHTML = "35) " + question35 + " <i class='fas fa-times'></i>" + "<br>" +  "  ΔV<sub>2</sub> = 1/2ΔV<sub>1</sub>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question36 == "2.94 x 10<sup>5</sup> Pa" ) {
        correct++;
        document.querySelector('.q36').innerHTML = "36) " + question36 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q36').innerHTML = "36) " + question36 + " <i class='fas fa-times'></i>" + "<br>" +  "  2.94 x 10<sup>5</sup> Pa" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question37 == "9.94 Km" ) {
        correct++;
        document.querySelector('.q37').innerHTML = "37) " + question37 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q37').innerHTML = "37) " + question37 + " <i class='fas fa-times'></i>" + "<br>" +  "  9.94 Km" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question38 == "ML<sup>-1</sup>T<sup>-2</sup>" ) {
        correct++;
        document.querySelector('.q38').innerHTML = "38) " + question38 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q38').innerHTML = "38) " + question38 + " <i class='fas fa-times'></i>" + "<br>" +  "  ML<sup>-1</sup>T<sup>-2</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question39 == "mgh" ) {
        correct++;
        document.querySelector('.q39').innerHTML = "39) " + question39 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q39').innerHTML = "39) " + question39 + " <i class='fas fa-times'></i>" + "<br>" +  "  mgh" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question40 == "mv<sup>2</sup> / r" ) {
        correct++;
        document.querySelector('.q40').innerHTML = "40) " + question40 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q40').innerHTML = "40) " + question40 + " <i class='fas fa-times'></i>" + "<br>" +  "  mv<sup>2</sup> / r" + " <i class='fas fa-check'></i>" + "<br>" 

    }

   
    var messages = ["Great Job!", "That's just okay", "You really need to do better..."],
        images = ["../images/success.gif","../images/passed.png", "../images/mr.bean fail.gif"],
        range;

        if ( correct < 26 ) {
            range = 2;
        }

        if ( correct >= 26 && correct < 33 ) {
            range = 1;
        }

        if ( correct > 33 ) {
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
    timeLeft = 3540;


function pad2(number) {   
     return (number < 10 ? '0' : '') + number
}



function convertSeconds(s) {
    var min = Math.floor(s / 59),
        sec = s % 59;
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