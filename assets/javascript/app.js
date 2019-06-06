//on click events

$("#start").on("click", function () {
    game.start();
})


//questions and answers 

var questions = [{
    question: "What was Homer Fake I.D name?",
    answers: ["Brian McGee ", "Matt LeBlanc ", "John Stucky ", "Mc Loving "],
    correctAnswer: "Brian McGee "
}, {
    question: "What was the kname of the soap opera Moe apperedon?",
    answers: ["Search for the Sun ", "Apples ", "Friends ", "It Never Ends "],
    correctAnswer: "It Never Ends "
}, {
    question: "What country did Bart represent in the model UN club?",
    answers: ["New York ", "Mexico ", "Libya ", "Iraq "],
    correctAnswer: "Libya "
}, {
    question: "What is Bart's childhood toy named?",
    answers: ["Mr. Honeybunny ", "Winney the Poop ", "Radio Active Man ", "Ralph Wiggum "],
    correctAnswer: "Mr. Honeybunny "
}, {
    question: "On the Bouvier Family Quilt, What does Marge's patch say?",
    answers: ["High Flyer ", "keep on Trucking ", "Mage lovers Homer ", "Joeys Fan Club "],
    correctAnswer: "keep on Trucking "
}, {
    question: "What street do the Simpson's live on?",
    answers: ["Fiesta Lane ", "Chandler.Ave ", "Evergreen Terrace ", "Jefferson St. "],
    correctAnswer: "Evergreen Terrace "
}, {
    question: "What was Neds Flanders first wife's name?",
    answers: ["Maude ", "Rachel ", "Ms Hoover ", "Monica "],
    correctAnswer: "Maude "
}, {
    question: "What state is Springield in?",
    answers: ["Massachusetts", "Michigan ", "New York ", "Oregon "],
    correctAnswer: "Oregon "
}];

var questionconter = -1;


var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function () {
        game.counter;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questiojns[i].questions + '</h2>');
            ("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);

        }
    }
},


/*done: function(){
        if

        attr("disables",flase)

        else
            }
        });

        //finsh questions 1-8 and sub wrapper .append
