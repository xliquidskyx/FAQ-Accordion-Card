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
            question.css({
                "color": "black",
                "fontWeight": "700"
            })

            if (window.innerWidth < 1440) {
                arrow.css({
                    "transform": "scaleY(-1)",
                    "marginTop": "15px"
                });
            } else {
                arrow.css({
                    "transform": "scaleY(-1)",
                    "marginTop": "-35px"
                });
            }
            
        } else {

            if (window.innerWidth < 1440) {
                arrow.css({
                    "transform": "scaleY(1)",
                    "marginTop": "0"
                });
            } else {
                arrow.css({
                    "transform": "scaleY(1)",
                    "marginTop": "-45px"
                });
            }
            question.css({
                "fontWeight": "400"
            })
        }

        answer.slideToggle();
    })
})