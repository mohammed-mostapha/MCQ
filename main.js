// function check() {

//     var question1 = document.quiz.question1.value,
//         question2 = document.quiz.question2.value,
//         question3 = document.quiz.question3.value,
        
//         correct = 0;

//         if( question1 == "Providence" ) {
//             correct++;
//         }

        
//         if( question2 == "Hartford" ) {
//             correct++;
//         }

        
//         if( question3 == "Albany" ) {
//             correct++;
//         }



//         var messages = ["Great Job!", "That's just okay", "You really need to do better..."],
//         images = ["images/success.gif","images/passed.png", "images/mr.bean fail.gif"],
//         range;

//         if ( correct < 1 ) {
//             range = 2;
//         }

//         if ( correct > 0 && correct < 3 ) {
//             range = 1;
//         }

//         if ( correct > 2 ) {
//             range = 0;
//         }



//     document.getElementById('after_submit').style.visibility = "visible";
//     document.getElementById('message').innerHTML = messages[range];
//     document.getElementById('number_correct').innerHTML="You got" + correct + " correct.";
//     document.getElementById('impression').src = images[range];
// }


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
    }

    if( question2 == "1 800 ATM" ) {
        correct++;
    }

    if( question3 == "0.050" ) {
        correct++;
    }

    if( question4 == "1.8 x 10<sup>7</sup> kg/m<sup>3" ) {
        correct++;
    }

    if( question5 == "1.41 x 10<sup>-3</sup> kg/m<sup>3</sup>" ) {
        correct++;
    }

    if( question6 == "20.4 ATM" ) {
        correct++;
    }

    if( question7 == "100 ATM" ) {
        correct++;
    }

    if( question8 == "5.3 x 10<sup>18</sup>kg" ) {
        correct++;
    }

    if( question9 == "214 kg" ) {
        correct++;
    }

    if( question10 == "89%" ) {
        correct++;
    }

    var messages = ["Great Job!", "That's just okay", "You really need to do better..."],
        images = ["images/success.gif","images/passed.png", "images/mr.bean fail.gif"],
        range;

        if ( correct < 5 ) {
            range = 2;
        }

        if ( correct > 0 && correct < 10 ) {
            range = 1;
        }

        if ( correct > 9 ) {
            range = 0;
        }

    document.getElementById('after_submit').style.display = "block";
    document.getElementById('message').innerHTML = messages[range];
    document.getElementById('number_correct').innerHTML="You got " + correct + " correct.";
    document.getElementById('impression').src = images[range];

    
}


$('.evaluator').click(function() {
    $('form').css({'display': 'none'});
    $('html,body').css({'background': '#fff'});
});




