$('#start').on('click', function () {
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

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            // subloop
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }); $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }); $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h3>All done!</h3>");
        $('#subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('#subwrapper').append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
}
