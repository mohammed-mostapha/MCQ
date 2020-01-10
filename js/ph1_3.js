
/* Physics 1-2*/

function resultph1_3() {
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
    question41 = document.physics1form.question41.value,
    question42 = document.physics1form.question42.value,
    question43 = document.physics1form.question43.value,
    question44 = document.physics1form.question44.value,
    question45 = document.physics1form.question45.value,
    question46 = document.physics1form.question46.value,
    question47 = document.physics1form.question47.value,
    question48 = document.physics1form.question48.value,
    question49 = document.physics1form.question49.value,
    question49 = document.physics1form.question49.value,
    question50 = document.physics1form.question50.value,
    question51 = document.physics1form.question51.value,
    question52 = document.physics1form.question52.value,
    question53 = document.physics1form.question53.value,
    question54 = document.physics1form.question54.value,
    question55 = document.physics1form.question55.value,
    question56 = document.physics1form.question56.value,
    question57 = document.physics1form.question57.value,
    question58 = document.physics1form.question58.value,
    question59 = document.physics1form.question59.value,
    question60 = document.physics1form.question60.value,
    question61 = document.physics1form.question61.value,
    question62 = document.physics1form.question62.value,
    question63 = document.physics1form.question63.value,
    question64 = document.physics1form.question64.value,
    question65 = document.physics1form.question65.value,
    question66 = document.physics1form.question66.value,
    question67 = document.physics1form.question67.value,
    question68 = document.physics1form.question68.value,
    question69 = document.physics1form.question69.value,
    question70 = document.physics1form.question70.value,
    question71 = document.physics1form.question71.value,
    question72 = document.physics1form.question72.value,
    question73 = document.physics1form.question73.value,
    question74 = document.physics1form.question74.value,
    question75 = document.physics1form.question75.value,
    question76 = document.physics1form.question76.value,
    question77 = document.physics1form.question77.value,
    question78 = document.physics1form.question78.value,

 
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

    if( question7 == "mgh" ) {
        correct++;
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q7').innerHTML = "7) " + question7 + " <i class='fas fa-times'></i>" + "<br>" +  "  mgh" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question8 == "mv" ) {
        correct++;
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q8').innerHTML = "8) " + question8 + " <i class='fas fa-times'></i>" + "<br>" +  "  mv" + " <i class='fas fa-check'></i>"+ "<br>"

    }

    if( question9 == "LT<sup>-3</sup>" ) {
        correct++;
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q9').innerHTML = "9) " + question9 + " <i class='fas fa-times'></i>" + "<br>" +  "  LT<sup>-3</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question10 == "mv<sup>2</sup>/r" ) {
        correct++;
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q10').innerHTML = "10) " + question10 + " <i class='fas fa-times'></i>" + "<br>" +  "  mv<sup>2</sup>/r" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question11 == "They both displace he same quantity of water" ) {
        correct++;
        document.querySelector('.q11').innerHTML = "11) " + question11 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q11').innerHTML = "11) " + question11 + " <i class='fas fa-times'></i>" + "<br>" +  "  They both displace he same quantity of water" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question12 == "the water level in tle pitcher remains the same" ) {
        correct++;
        document.querySelector('.q12').innerHTML = "12) " + question12 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q12').innerHTML = "12) " + question12 + " <i class='fas fa-times'></i>" + "<br>" +  "  the water level in tle pitcher remains the same" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question13 == "the absolute pressure will be less than 2ρ" ) {
        correct++;
        document.querySelector('.q13').innerHTML = "13) " + question13 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q13').innerHTML = "13) " + question13 + " <i class='fas fa-times'></i>" + "<br>" +  "  the absolute pressure will be less than 2ρ" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question14 == "not change" ) {
        correct++;
        document.querySelector('.q14').innerHTML = "14) " + question14 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q14').innerHTML = "14) " + question14 + " <i class='fas fa-times'></i>" + "<br>" +  "  not change" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question15 == "the water level does not change" ) {
        correct++;
        document.querySelector('.q15').innerHTML = "15) " + question15 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q15').innerHTML = "15) " + question15 + " <i class='fas fa-times'></i>" + "<br>" +  "  the water level does not change" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question16 == "W = (ρ<sub>Fe</sub> - ρ<sub>fluid</sub>) gℓ<sup>3<sup>" ) {
        correct++;
        document.querySelector('.q16').innerHTML = "16) " + question16 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q16').innerHTML = "16) " + question16 + " <i class='fas fa-times'></i>" + "<br>" +  "  W = (ρ<sub>Fe</sub> - ρ<sub>fluid</sub>) gℓ<sup>3<sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question17 == "590 000N/m<sup>2</sup>" ) {
        correct++;
        document.querySelector('.q17').innerHTML = "17) " + question17 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q17').innerHTML = "17) " + question17 + " <i class='fas fa-times'></i>" + "<br>" +  "  590 000N/m<sup>2</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question18 == "less than the volume  of fresh water" ) {
        correct++;
        document.querySelector('.q18').innerHTML = "18) " + question18 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q18').innerHTML = "18) " + question18 + " <i class='fas fa-times'></i>" + "<br>" +  "  less than the volume  of fresh water" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question19 == "remains constant" ) {
        correct++;
        document.querySelector('.q19').innerHTML = "19) " + question19 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q19').innerHTML = "19) " + question19 + " <i class='fas fa-times'></i>" + "<br>" +  "  remains constant" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question20 == "7.25 x 10<sup>3</sup> kg/m<sup>3</sup>" ) {
        correct++;
        document.querySelector('.q20').innerHTML = "20) " + question20 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q20').innerHTML = "20) " + question20 + " <i class='fas fa-times'></i>" + "<br>" +  "  7.25 x 10<sup>3</sup> kg/m<sup>3</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question21 == "6.58 cm" ) {
        correct++;
        document.querySelector('.q21').innerHTML = "21) " + question21 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q21').innerHTML = "21) " + question21 + " <i class='fas fa-times'></i>" + "<br>" +  "  6.58 cm" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question22 == "1100 kg/m<sup>3</sup>" ) {
        correct++;
        document.querySelector('.q22').innerHTML = "22) " + question22 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q22').innerHTML = "22) " + question22 + " <i class='fas fa-times'></i>" + "<br>" +  "  1100 kg/m<sup>3</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question23 == "175 m/s" ) {
        correct++;
        document.querySelector('.q23').innerHTML = "23) " + question23 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q23').innerHTML = "23) " + question23 + " <i class='fas fa-times'></i>" + "<br>" +  "  175 m/s" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question24 == "10.6 m/s" ) {
        correct++;
        document.querySelector('.q24').innerHTML = "24) " + question24 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q24').innerHTML = "24) " + question24 + " <i class='fas fa-times'></i>" + "<br>" +  "  10.6 m/s" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question25 == "199 N" ) {
        correct++;
        document.querySelector('.q25').innerHTML = "25) " + question25 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q25').innerHTML = "25) " + question25 + " <i class='fas fa-times'></i>" + "<br>" +  "  199 N" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question26 == "The pressure is the same at each of the labeled points" ) {
        correct++;
        document.querySelector('.q26').innerHTML = "26) " + question26 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q26').innerHTML = "26) " + question26 + " <i class='fas fa-times'></i>" + "<br>" +  "  The pressure is the same at each of the labeled points" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question27 == "the iron" ) {
        correct++;
        document.querySelector('.q27').innerHTML = "27) " + question27 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q27').innerHTML = "27) " + question27 + " <i class='fas fa-times'></i>" + "<br>" +  "  the iron" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question28 == "it does not change" ) {
        correct++;
        document.querySelector('.q28').innerHTML = "28) " + question28 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q28').innerHTML = "28) " + question28 + " <i class='fas fa-times'></i>" + "<br>" +  "  it does not change" + " <i class='fas fa-check'></i>" + "<br>" 

    }



    if( question29 == "decreases" ) {
        correct++;
        document.querySelector('.q29').innerHTML = "29) " + question29 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q29').innerHTML = "29) " + question29 + " <i class='fas fa-times'></i>" + "<br>" +  "  decreases" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question30 == "the ratio of the change in length to the original length" ) {
        correct++;
        document.querySelector('.q30').innerHTML = "30) " + question30 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q30').innerHTML = "30) " + question30 + " <i class='fas fa-times'></i>" + "<br>" +  "  the ratio of the change in length to the original length" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question31 == "ΔV<sub>2</sub> = 1/2ΔV<sub>1</sub>" ) {
        correct++;
        document.querySelector('.q31').innerHTML = "31) " + question31 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q31').innerHTML = "31) " + question31 + " <i class='fas fa-times'></i>" + "<br>" +  "  ΔV<sub>2</sub> = 1/2ΔV<sub>1</sub>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question32 == "2.94 x 10<sup>5</sup> Pa" ) {
        correct++;
        document.querySelector('.q32').innerHTML = "32) " + question32 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q32').innerHTML = "32) " + question32 + " <i class='fas fa-times'></i>" + "<br>" +  "  2.94 x 10<sup>5</sup> Pa" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question33 == "9.94 Km" ) {
        correct++;
        document.querySelector('.q33').innerHTML = "33) " + question33 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q33').innerHTML = "33) " + question33 + " <i class='fas fa-times'></i>" + "<br>" +  "  9.94 Km" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    if( question34 == "ML<sup>-1</sup>T<sup>-2</sup>" ) {
        correct++;
        document.querySelector('.q34').innerHTML = "34) " + question34 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q34').innerHTML = "34) " + question34 + " <i class='fas fa-times'></i>" + "<br>" +  "  ML<sup>-1</sup>T<sup>-2</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question35 == "mgh" ) {
        correct++;
        document.querySelector('.q35').innerHTML = "35) " + question35 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q35').innerHTML = "35) " + question35 + " <i class='fas fa-times'></i>" + "<br>" +  "  mgh" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question36 == "mv<sup>2</sup> / r" ) {
        correct++;
        document.querySelector('.q36').innerHTML = "36) " + question36 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q36').innerHTML = "36) " + question36 + " <i class='fas fa-times'></i>" + "<br>" +  "  mv<sup>2</sup> / r" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question37 == "mat?" ) {
        correct++;
        document.querySelector('.q37').innerHTML = "37) " + question37 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q37').innerHTML = "37) " + question37 + " <i class='fas fa-times'></i>" + "<br>" +  "  mat?" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question38 == "the zeroth law of thermodynamics" ) {
        correct++;
        document.querySelector('.q38').innerHTML = "38) " + question38 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q38').innerHTML = "38) " + question38 + " <i class='fas fa-times'></i>" + "<br>" +  "  the zeroth law of thermodynamics" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question39 == "be in thermal equilibrium" ) {
        correct++;
        document.querySelector('.q39').innerHTML = "39) " + question39 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q39').innerHTML = "39) " + question39 + " <i class='fas fa-times'></i>" + "<br>" +  "  be in thermal equilibrium" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question40 == "a difference of 9 Fahrenheit scale" ) {
        correct++;
        document.querySelector('.q40').innerHTML = "40) " + question40 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q40').innerHTML = "40) " + question40 + " <i class='fas fa-times'></i>" + "<br>" +  "  a difference of 9 Fahrenheit scale" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question41 == "54.6" ) {
        correct++;
        document.querySelector('.q41').innerHTML = "41) " + question41 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q41').innerHTML = "41) " + question41 + " <i class='fas fa-times'></i>" + "<br>" +  "  54.6" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question42 == "232.15" ) {
        correct++;
        document.querySelector('.q42').innerHTML = "42) " + question42 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q42').innerHTML = "42) " + question42 + " <i class='fas fa-times'></i>" + "<br>" +  "  232.15" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question43 == "-12.3&#8446;" ) {
        correct++;
        document.querySelector('.q43').innerHTML = "43) " + question43 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q43').innerHTML = "43) " + question43 + " <i class='fas fa-times'></i>" + "<br>" +  "  -12.3&#8446;" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question44 == "5.0" ) {
        correct++;
        document.querySelector('.q44').innerHTML = "44) " + question44 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q44').innerHTML = "44) " + question44 + " <i class='fas fa-times'></i>" + "<br>" +  "  5.0" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question45 == "39" ) {
        correct++;
        document.querySelector('.q45').innerHTML = "45) " + question45 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q45').innerHTML = "45) " + question45 + " <i class='fas fa-times'></i>" + "<br>" +  "  39" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question46 == "4" ) {
        correct++;
        document.querySelector('.q46').innerHTML = "46) " + question46 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q46').innerHTML = "46) " + question46 + " <i class='fas fa-times'></i>" + "<br>" +  "  4" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question47 == "4 atm" ) {
        correct++;
        document.querySelector('.q47').innerHTML = "47) " + question47 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q47').innerHTML = "47) " + question47 + " <i class='fas fa-times'></i>" + "<br>" +  "  4 atm" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question48 == "8" ) {
        correct++;
        document.querySelector('.q48').innerHTML = "48) " + question48 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q48').innerHTML = "48) " + question48 + " <i class='fas fa-times'></i>" + "<br>" +  "  8" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question49 == "T<sub>B</sub> = T<sub>A</sub> = T<sub>o'</sub>" ) {
        correct++;
        document.querySelector('.q49').innerHTML = "49) " + question49 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q49').innerHTML = "49) " + question49 + " <i class='fas fa-times'></i>" + "<br>" +  "  T<sub>B</sub> = T<sub>A</sub> = T<sub>o'</sub>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question50 == "The change in weight at constant pressure and volume" ) {
        correct++;
        document.querySelector('.q50').innerHTML = "50) " + question50 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q50').innerHTML = "50) " + question50 + " <i class='fas fa-times'></i>" + "<br>" +  "  The change in weight at constant pressure and volume" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question51 == "have any of the properties listed above" ) {
        correct++;
        document.querySelector('.q51').innerHTML = "51) " + question51 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q51').innerHTML = "51) " + question51 + " <i class='fas fa-times'></i>" + "<br>" +  "  have any of the properties listed above" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question52 == "All the corrections above are required" ) {
        correct++;
        document.querySelector('.q52').innerHTML = "52) " + question52 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q52').innerHTML = "52) " + question52 + " <i class='fas fa-times'></i>" + "<br>" +  "  All the corrections above are required" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question53 == "20" ) {
        correct++;
        document.querySelector('.q53').innerHTML = "53) " + question53 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q53').innerHTML = "53) " + question53 + " <i class='fas fa-times'></i>" + "<br>" +  "  20" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question54 == "210" ) {
        correct++;
        document.querySelector('.q54').innerHTML = "54) " + question54 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q54').innerHTML = "54) " + question54 + " <i class='fas fa-times'></i>" + "<br>" +  "  210" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question55 == "is the area under the curve of a PV diagram" ) {
        correct++;
        document.querySelector('.q55').innerHTML = "55) " + question55 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q55').innerHTML = "55) " + question55 + " <i class='fas fa-times'></i>" + "<br>" +  "  is the area under the curve of a PV diagram" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question56 == "0" ) {
        correct++;
        document.querySelector('.q56').innerHTML = "56) " + question56 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q56').innerHTML = "56) " + question56 + " <i class='fas fa-times'></i>" + "<br>" +  "  0" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question57 == "no heat is transferred between a system and its surroundings" ) {
        correct++;
        document.querySelector('.q57').innerHTML = "57) " + question57 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q57').innerHTML = "57) " + question57 + " <i class='fas fa-times'></i>" + "<br>" +  "  no heat is transferred between a system and its surroundings" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question58 == "the temperature remains constant" ) {
        correct++;
        document.querySelector('.q58').innerHTML = "58) " + question58 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q58').innerHTML = "58) " + question58 + " <i class='fas fa-times'></i>" + "<br>" +  "  the temperature remains constant" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question59 == "the pressure remains constant" ) {
        correct++;
        document.querySelector('.q59').innerHTML = "59) " + question59 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q59').innerHTML = "59) " + question59 + " <i class='fas fa-times'></i>" + "<br>" +  "  the pressure remains constant" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question60 == "the volume remains constant" ) {
        correct++;
        document.querySelector('.q60').innerHTML = "60) " + question60 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q60').innerHTML = "60) " + question60 + " <i class='fas fa-times'></i>" + "<br>" +  "  the volume remains constant" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question61 == "2.5 x 10<sup>4</sub> J" ) {
        correct++;
        document.querySelector('.q61').innerHTML = "61) " + question61 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q61').innerHTML = "61) " + question61 + " <i class='fas fa-times'></i>" + "<br>" +  "  2.5 x 10<sup>4</sub> J" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question62 == "7.2 x 10<sup>7</sup>" ) {
        correct++;
        document.querySelector('.q62').innerHTML = "62) " + question62 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q62').innerHTML = "62) " + question62 + " <i class='fas fa-times'></i>" + "<br>" +  "  7.2 x 10<sup>7</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question63 == "3.4 x 10<sup>5</sup>" ) {
        correct++;
        document.querySelector('.q63').innerHTML = "63) " + question63 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q63').innerHTML = "63) " + question63 + " <i class='fas fa-times'></i>" + "<br>" +  "  3.4 x 10<sup>5</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question64 == "the object is at a lower temperature than your hand" ) {
        correct++;
        document.querySelector('.q64').innerHTML = "64) " + question64 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q64').innerHTML = "64) " + question64 + " <i class='fas fa-times'></i>" + "<br>" +  "  the object is at a lower temperature than your hand" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question65 == "The quantity of thermal energy exchanged by two  bodies in contact  is directly proportional to the difference in their temperatures" ) {
        correct++;
        document.querySelector('.q65').innerHTML = "65) " + question65 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q65').innerHTML = "65) " + question65 + " <i class='fas fa-times'></i>" + "<br>" +  "  The quantity of thermal energy exchanged by two  bodies in contact  is directly proportional to the difference in their temperatures" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question66 == "An isothermal compression of an ideal gas" ) {
        correct++;
        document.querySelector('.q66').innerHTML = "66) " + question66 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q66').innerHTML = "66) " + question66 + " <i class='fas fa-times'></i>" + "<br>" +  "  An isothermal compression of an ideal gas" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question67 == "3.01 x 10<sup>6</sup>" ) {
        correct++;
        document.querySelector('.q67').innerHTML = "67) " + question67 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q67').innerHTML = "67) " + question67 + " <i class='fas fa-times'></i>" + "<br>" +  "  3.01 x 10<sup>6</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question68 == "No worK is done on or by the gas when the volume remains constant" ) {
        correct++;
        document.querySelector('.q68').innerHTML = "68) " + question68 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q68').innerHTML = "68) " + question68 + " <i class='fas fa-times'></i>" + "<br>" +  "  No worK is done on or by the gas when the volume remains constant" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question69 == "PV is constant" ) {
        correct++;
        document.querySelector('.q69').innerHTML = "69) " + question69 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q69').innerHTML = "69) " + question69 + " <i class='fas fa-times'></i>" + "<br>" +  "  PV is constant" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question70 == "work is done by a gas at constant pressure" ) {
        correct++;
        document.querySelector('.q70').innerHTML = "70) " + question70 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q70').innerHTML = "70) " + question70 + " <i class='fas fa-times'></i>" + "<br>" +  "  work is done by a gas at constant pressure" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question71 == "all of the above can occur" ) {
        correct++;
        document.querySelector('.q71').innerHTML = "71) " + question71 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q71').innerHTML = "71) " + question71 + " <i class='fas fa-times'></i>" + "<br>" +  "  all of the above can occur" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question72 == "its transmitting medium" ) {
        correct++;
        document.querySelector('.q72').innerHTML = "72) " + question72 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q72').innerHTML = "72) " + question72 + " <i class='fas fa-times'></i>" + "<br>" +  "  its transmitting medium" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question73 == "1.5m" ) {
        correct++;
        document.querySelector('.q73').innerHTML = "73) " + question73 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q73').innerHTML = "73) " + question73 + " <i class='fas fa-times'></i>" + "<br>" +  "  1.5m" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question74 == "4.3" ) {
        correct++;
        document.querySelector('.q74').innerHTML = "74) " + question74 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q74').innerHTML = "74) " + question74 + " <i class='fas fa-times'></i>" + "<br>" +  "  4.3" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question75 == "2.69 x 10<sup>3</sup>" ) {
        correct++;
        document.querySelector('.q75').innerHTML = "75) " + question75 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q75').innerHTML = "75) " + question75 + " <i class='fas fa-times'></i>" + "<br>" +  "  2.69 x 10<sup>3</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question76 == "2.7 x 10<sup>-2</sup>" ) {
        correct++;
        document.querySelector('.q76').innerHTML = "76) " + question76 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q76').innerHTML = "76) " + question76 + " <i class='fas fa-times'></i>" + "<br>" +  "  2.7 x 10<sup>-2</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question77 == "1.8 x 10<sup>-7</sup>" ) {
        correct++;
        document.querySelector('.q77').innerHTML = "77) " + question77 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q77').innerHTML = "77) " + question77 + " <i class='fas fa-times'></i>" + "<br>" +  "  1.8 x 10<sup>-7</sup>" + " <i class='fas fa-check'></i>" + "<br>" 

    }

    if( question78 == "6 x 10<sup>14</sup> Hz" ) {
        correct++;
        document.querySelector('.q78').innerHTML = "78) " + question78 + " <i class='fas fa-check'></i>";
    }else {
        document.querySelector('.q78').innerHTML = "78) " + question78 + " <i class='fas fa-times'></i>" + "<br>" +  "  6 x 10<sup>14</sup> Hz" + " <i class='fas fa-check'></i>" + "<br>" 

    }


    

    var messages = ["Great Job!", "That's just okay", "You really need to do better..."],
        images = ["../images/success.gif","../images/passed.png", "../images/mr.bean fail.gif"],
        range;

        if ( correct < 39 ) {
            range = 2;
        }

        if ( correct >= 39 && correct < 78 ) {
            range = 1;
        }

        if ( correct > 77 ) {
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
    timeLeft = 5290;


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