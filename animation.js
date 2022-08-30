var questionContainer = document.querySelectorAll('.question-container');

questionContainer.forEach(function (element) {
    $(element).click(function () {
        var answer = $(this).children(".answer");
        var arrow = $(this).children(".arrow-down")
        
        if (answer.css("display") == 'none') { // flips arrow svg
            arrow.css({
                "transform": "scaleY(-1)",
                "marginTop": "15px"
            });
        } else {
            arrow.css({
                "transform": "scaleY(1)",
                "marginTop": "0"
            });
        }

        answer.slideToggle();
    })
})