var questions = [
    {
        question: "What country is named for its location on the equator?",
        answers: ["Nigera", "Nicaragua", "Ecuador"],
        correct: "Ecuador",
    },
    {
        question: "What is the secret identity of the fictional superhero Batman?",
        answers: ["Clark Kent", "Tony Stark", "Bruce Wayne"],
        correct: "Bruce Wayne",
    },
    {
        question: "The first person shooter video game Doom was first released in what year?",
        answers: ["1993", "1995", "1997"],
        correct: "1993",
    },
    {
        question: "What ingredient is added to white sugar to make brown sugar?",
        answers: ["Cinnamon", "Syrup", "Molasses"],
        correct: "Molasses",
    },
];

var game = $(".quiz-area");

var timer = 0;

var trivia = {
    correct: 0,
    wrong: 0,
    count: 180,

    start: function(){
        timer = setInterval(trivia.countdown, 1000);
        $(".smaller-cont").prepend("<h3>Time Remaining: <span id='timer-number'> 180 </span> Seconds</h3>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            game.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
              game.append("<input type='radio' name='question-" + i +
              "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }
        game.append("<button id='done'>Submit</button>");
    }, //end start

    countdown: function(){
        
        trivia.count--;

        $("#timer-number").html(trivia.count);

        if (trivia.count === 0){
            console.log("game over");
            trivia.end();
        }
    }, //end countdown

    grade: function(){
        $.each($("input[name='question-0']:checked"), function(){
            if($(this).val() === questions[0].correct){
                trivia.correct++;
                console.log("Good");
            }
            else {
                trivia.wrong++;
                console.log("Bad");
            }
        });

        $.each($("input[name='question-1']:checked"), function(){
            if($(this).val() === questions[1].correct){
                trivia.correct++;
                console.log("Good");
            }
            else {
                trivia.wrong++;
                console.log("Bad");
            }
        });

        $.each($("input[name='question-2']:checked"), function(){
            if($(this).val() === questions[2].correct){
                trivia.correct++;
                console.log("Good");
            }
            else {
                trivia.wrong++;
                console.log("Bad");
            }
        });

        $.each($("input[name='question-3']:checked"), function(){
            if($(this).val() === questions[3].correct){
                trivia.correct++;
                console.log("Good");
            }
            else {
                trivia.wrong++;
                console.log("Bad");
            }
        });

        trivia.end();
    },//end finish

    end: function(){
    
    clearInterval(timer);

    $(".smaller-cont h2").remove();
    $(".smaller-cont h1").remove();
    $(".smaller-cont h3").remove();
    $(".smaller-cont p").remove();
    
    game.html("<h3>Done!</h3>");
    game.append("<h3>Correct Answers: " + this.correct + "</h3>");
    game.append("<h3>Incorrect Answers: " + this.wrong + "</h3>");
    game.append("<h3>Unanswered: " + (questions.length - (this.wrong + this.correct)) + "</h3>");
    
    },//end end

}//end trivia object

$(document).on("click", "#start", function(){
    trivia.start();
});

$(document).on("click", "#done", function(){
    trivia.end();
});