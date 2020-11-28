
/* Physics 1_4*/

function resultph1_4() {
    var question1 = document.physics1form.question1.value,
    question2 = document.physics1form.question2.value,
    question3 = document.physics1form.question3.value,
    question4 = document.physics1form.question4.value,
    question5 = document.physics1form.question5.value,
    question6 = document.physics1form.question6.value,
    question10 = document.physics1form.question10.value,
    question7 = document.physics1form.question7.value,
    question8 = document.physics1form.question8.value,
    question10 = document.physics1form.question10.value,
    question10 = document.physics1form.question10.value,
    question11 = document.physics1form.question11.value,
    question12 = document.physics1form.question12.value,
    question13 = document.physics1form.question13.value,
    question14 = document.physics1form.question14.value,
    question15 = document.physics1form.question15.value,
    question16 = document.physics1form.question16.value,
    question18 = document.physics1form.question18.value,
    question20 = document.physics1form.question20.value,
    question21 = document.physics1form.question21.value,
    question22 = document.physics1form.question22.value,
    question23 = document.physics1form.question23.value,
    question24 = document.physics1form.question24.value,
    question25 = document.physics1form.question25.value,
    question26 = document.physics1form.question26.value,
    question2 = document.physics1form.question2.value,
    question3 = document.physics1form.question3.value,
    question4 = document.physics1form.question4.value,
    question5 = document.physics1form.question5.value,
    question6 = document.physics1form.question6.value,
    question10 = document.physics1form.question10.value,
    question34 = document.physics1form.question34.value,
    question35 = document.physics1form.question35.value,
    question36 = document.physics1form.question36.value,
    question38 = document.physics1form.question38.value,
    question40 = document.physics1form.question40.value,
   

 
    correct = 0;

   
    if( question1 == "the iron" ) {
        correct++;
        document.querySelector('.q1').innerHTML = "1) " + question1 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q1').innerHTML = "1) " + question1 + " <i class='fas fa-times'></i>" + "<br>" +  "  the iron" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question2 == "it does not change" ) {
        correct++;
        document.querySelector('.q2').innerHTML = "2) " + question2 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q2').innerHTML = "2) " + question2 + " <i class='fas fa-times'></i>" + "<br>" +  "  it does not change" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question3 == "decreases" ) {
        correct++;
        document.querySelector('.q3').innerHTML = "3) " + question3 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q3').innerHTML = "3) " + question3 + " <i class='fas fa-times'></i>" + "<br>" +  "  decreases" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question4 == "the ratio of the change in length to the original length" ) {
        correct++;
        document.querySelector('.q4').innerHTML = "4) " + question4 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q4').innerHTML = "4) " + question4 + " <i class='fas fa-times'></i>" + "<br>" +  "  the ratio of the change in length to the original length" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question5 == "ΔV<sub>2</sub> = 1/2ΔV<sub>1</sub>" ) {
        correct++;
        document.querySelector('.q5').innerHTML = "5) " + question5 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q5').innerHTML = "5) " + question5 + " <i class='fas fa-times'></i>" + "<br>" +  "  ΔV<sub>2</sub> = 1/2ΔV<sub>1</sub>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question6 == "2.94 x 10<sup>5</sup> Pa" ) {
        correct++;
        document.querySelector('.q6').innerHTML = "6) " + question6 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q6').innerHTML = "6) " + question6 + " <i class='fas fa-times'></i>" + "<br>" +  "  2.94 x 10<sup>5</sup> Pa" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question7 == "9.94 Km" ) {
        correct++;
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-times'></i>" + "<br>" +  "  9.94 Km" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question8 == "2 m/s" ) {
        correct++;
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-times'></i>" + "<br>" +  "  2 m/s" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question9 == "none of these" ) {
        correct++;
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-times'></i>" + "<br>" +  "  none of these" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question10 == "1 m" ) {
        correct++;
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-times'></i>" + "<br>" +  "  1 m" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question11 == "7.86x10<sup>-7</sup>" ) {
        correct++;
        document.querySelector('.q11').innerHTML = "11) " + question11 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q11').innerHTML = "11) " + question11 + " <i class='fas fa-times'></i>" + "<br>" +  "  7.86x10<sup>-7</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question12 == "3.142" ) {
        correct++;
        document.querySelector('.q12').innerHTML = "12) " + question12 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q12').innerHTML = "12) " + question12 + " <i class='fas fa-times'></i>" + "<br>" +  "  3.142" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question13 == "True" ) {
        correct++;
        document.querySelector('.q13').innerHTML = "13) " + question13 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q13').innerHTML = "13) " + question13 + " <i class='fas fa-times'></i>" + "<br>" +  "  True" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question14 == "2.22x10<sup>10</sup> N/m<sup>2</sup>" ) {
        correct++;
        document.querySelector('.q14').innerHTML = "14) " + question14 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q14').innerHTML = "14) " + question14 + " <i class='fas fa-times'></i>" + "<br>" +  "  2.22x10<sup>10</sup> N/m<sup>2</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question15 == "Yield point" ) {
        correct++;
        document.querySelector('.q15').innerHTML = "15) " + question15 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q15').innerHTML = "15) " + question15 + " <i class='fas fa-times'></i>" + "<br>" +  "  Yield point" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question16 == "gases or liquids" ) {
        correct++;
        document.querySelector('.q16').innerHTML = "16) " + question16 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q16').innerHTML = "16) " + question16 + " <i class='fas fa-times'></i>" + "<br>" +  "  gases or liquids" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question17 == "SI system" ) {
        correct++;
        document.querySelector('.q17').innerHTML = "17) " + question17 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q17').innerHTML = "17) " + question17 + " <i class='fas fa-times'></i>" + "<br>" +  "  SI system" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question18 == "plastic material" ) {
        correct++;
        document.querySelector('.q18').innerHTML = "18) " + question18 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q18').innerHTML = "18) " + question18 + " <i class='fas fa-times'></i>" + "<br>" +  "  plastic material" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question19 == "add atmospheric pressure" ) {
        correct++;
        document.querySelector('.q19').innerHTML = "19) " + question19 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q19').innerHTML = "19) " + question19 + " <i class='fas fa-times'></i>" + "<br>" +  "  add atmospheric pressure" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question20 == "pressure is the same at the same level" ) {
        correct++;
        document.querySelector('.q20').innerHTML = "20) " + question20 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q20').innerHTML = "20) " + question20 + " <i class='fas fa-times'></i>" + "<br>" +  "  pressure is the same at the same level" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question21 == "the pressure on the bottom of each can is the same" ) {
        correct++;
        document.querySelector('.q21').innerHTML = "21) " + question21 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q21').innerHTML = "21) " + question21 + " <i class='fas fa-times'></i>" + "<br>" +  "  the pressure on the bottom of each can is the same" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question22 == "5.1 x 10<sup>-2</sup> m<sup>3</sup>" ) {
        correct++;
        document.querySelector('.q22').innerHTML = "22) " + question22 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q22').innerHTML = "22) " + question22 + " <i class='fas fa-times'></i>" + "<br>" +  "  5.1 x 10<sup>-2</sup> m<sup>3</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    if( question23 == "None of the above is true" ) {
        correct++;
        document.querySelector('.q23').innerHTML = "23) " + question23 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q23').innerHTML = "23) " + question23 + " <i class='fas fa-times'></i>" + "<br>" +  "  None of the above is true" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question24 == "Pascal’s principle" ) {
        correct++;
        document.querySelector('.q24').innerHTML = "24) " + question24 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q24').innerHTML = "24) " + question24 + " <i class='fas fa-times'></i>" + "<br>" +  "  Pascal’s principle" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question25 == "100 N" ) {
        correct++;
        document.querySelector('.q25').innerHTML = "25) " + question25 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q25').innerHTML = "25) " + question25 + " <i class='fas fa-times'></i>" + "<br>" +  "  100 N" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question26 == "Poiseuille’s law" ) {
        correct++;
        document.querySelector('.q26').innerHTML = "26) " + question26 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q26').innerHTML = "26) " + question26 + " <i class='fas fa-times'></i>" + "<br>" +  "  Poiseuille’s law" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question27 == "True" ) {
        correct++;
        document.querySelector('.q27').innerHTML = "27) " + question27 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q27').innerHTML = "27) " + question27 + " <i class='fas fa-times'></i>" + "<br>" +  "  True" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question28 == "Not change" ) {
        correct++;
        document.querySelector('.q28').innerHTML = "28) " + question28 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q28').innerHTML = "28) " + question28 + " <i class='fas fa-times'></i>" + "<br>" +  "  Not change" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question29 == "True" ) {
        correct++;
        document.querySelector('.q29').innerHTML = "29) " + question29 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q29').innerHTML = "29) " + question29 + " <i class='fas fa-times'></i>" + "<br>" +  "  True" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question30 == "5.12 m/s" ) {
        correct++;
        document.querySelector('.q30').innerHTML = "30) " + question30 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q30').innerHTML = "30) " + question30 + " <i class='fas fa-times'></i>" + "<br>" +  "  5.12 m/s" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question31 == "23.8 m/s" ) {
        correct++;
        document.querySelector('.q31').innerHTML = "31) " + question31 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q31').innerHTML = "31) " + question31 + " <i class='fas fa-times'></i>" + "<br>" +  "  23.8 m/s" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question32 == "True" ) {
        correct++;
        document.querySelector('.q32').innerHTML = "32) " + question32 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q32').innerHTML = "32) " + question32 + " <i class='fas fa-times'></i>" + "<br>" +  "  True" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question33 == "0.3m" ) {
        correct++;
        document.querySelector('.q33').innerHTML = "33) " + question33 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q33').innerHTML = "33) " + question33 + " <i class='fas fa-times'></i>" + "<br>" +  "  0.3m" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question34 == "1 kg/ m . s<sup>2</sup>" ) {
        correct++;
        document.querySelector('.q34').innerHTML = "34) " + question34 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q34').innerHTML = "34) " + question34 + " <i class='fas fa-times'></i>" + "<br>" +  "  1 kg/ m . s<sup>2</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question35 == "Barometers measure absolute pressure and manometers measure gauge pressure" ) {
        correct++;
        document.querySelector('.q35').innerHTML = "35) " + question35 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q35').innerHTML = "35) " + question35 + " <i class='fas fa-times'></i>" + "<br>" +  "  Barometers measure absolute pressure and manometers measure gauge pressure" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question36 == "πR<sup>2</sup>p" ) {
        correct++;
        document.querySelector('.q36').innerHTML = "36) " + question36 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q36').innerHTML = "36) " + question36 + " <i class='fas fa-times'></i>" + "<br>" +  "  πR<sup>2</sup>p" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question37 == "None of the above is true" ) {
        correct++;
        document.querySelector('.q37').innerHTML = "37) " + question37 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q37').innerHTML = "37) " + question37 + " <i class='fas fa-times'></i>" + "<br>" +  "  None of the above is true" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question38 == "mass" ) {
        correct++;
        document.querySelector('.q38').innerHTML = "38) " + question38 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q38').innerHTML = "38) " + question38 + " <i class='fas fa-times'></i>" + "<br>" +  "  mass" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question39 == "energy" ) {
        correct++;
        document.querySelector('.q39').innerHTML = "39) " + question39 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q39').innerHTML = "39) " + question39 + " <i class='fas fa-times'></i>" + "<br>" +  "  energy" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question40 == "Is zero" ) {
        correct++;
        document.querySelector('.q40').innerHTML = "40) " + question40 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q40').innerHTML = "40) " + question40 + " <i class='fas fa-times'></i>" + "<br>" +  "  Is zero" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    


    var messages = ["Great Job!", "That's just okay", "You really need to do better..."],
        images = ["../images/success.gif","../images/passed.png", "../images/mr.bean fail.gif"],
        range;

        if ( correct < 30 ) {
            range = 2;
        }

        if ( correct >= 30 && correct < 40 ) {
            range = 1;
        }

        if ( correct > 39 ) {
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
    timeLeft = 3600;


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



/* end physics 1_4*/