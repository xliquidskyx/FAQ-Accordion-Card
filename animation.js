var questionTextContent = document.querySelectorAll('.question');
var questionContainer;

questionTextContent.forEach(function (element) {
    element.addEventListener('click', function () {
        questionContainer = event.target.parentElement.id;
        console.log(questionContainer);
    } )
})