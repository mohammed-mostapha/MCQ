var questions = [{
    prompt : "Whats the brand of you car? \n(a)Chevrolet \n (b)Mercedes \n (c)BMW",
    answer: "a"
},
{
    prompt: "Whats the color of you car? \n(a)Red \n (b)Green \n (c)blue",
    answer: "a"
},
{
    prompt: "Is your car capacity cylinder \n(a)1400 CC \n (b)1600 CC \n (c)1800 CC",
    answer: "b" 
}

];

var score = 0;


for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);

    if(response == questions[i].answer) {
        score++;
        alert('Correct');
    } else {
        alert('Wrong!');
    }

}

alert("you got " + score + "/" + questions.length);