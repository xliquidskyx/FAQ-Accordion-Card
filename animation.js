var questionContainer = document.querySelectorAll('.question-container');

questionContainer.forEach(function (element) {
    $(element).click(function () {
        var answer = $(this).children(".answer");
        var arrow = $(this).children(".arrow-down")
        var question = $(this).children(".question");
        
        if (answer.css("display") == 'none') { // flips arrow svg
            answer.css({
                "color": "hsl(240, 6%, 50%)"
            });
            arrow.css({
                "transform": "scaleY(-1)",
                "marginTop": "15px"
            });
            question.css({
                "color": "black",
                "fontWeight": "700"
            })

        } else {
            arrow.css({
                "transform": "scaleY(1)",
                "marginTop": "0"
            });
            question.css({
                "fontWeight": "400"
            })
        }

        answer.slideToggle();
    })
})