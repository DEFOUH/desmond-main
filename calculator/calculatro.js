let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
///programing phone pannel
function myFunction() {
    var notifyPanel = document.getElementById("notify");
     notifyPanel.style.display = (notifyPanel.style.display === "block") ? "none" : "block";
   }


//programing the calculators numbers


function writeValue(param){
    var btn = document.getElementById("btn")

    var writein = document.getElementById('writein')

    var newValue = writein.value + param
    writein.value = newValue

    //alert(param)
}

function EvaluteA(){
    var writein = document.getElementById('writein')
    var answer = eval(writein.value)
    var answerDisplay = document.getElementById('answerDisplay')
    answerDisplay.value = answer

}
function clearInput() {
    document.getElementById('writein').value = '';
    document.getElementById('answerDisplay').value = '';
}

function deleteLastChar() {
    var writein = document.getElementById('writein');
    var currentValue = writein.value;
    var newValue = currentValue.slice(0, -1);
    writein.value = newValue;
}

function evaluateExpression() {
    var writein = document.getElementById('writein');
    var answerDisplay = document.getElementById('answerDisplay');
    var expression = writein.value;
    try {
      var answer = eval(expression);
      answerDisplay.value = answer;
    } catch (error) {
      answerDisplay.value = "Error";
    }
}
function writeValue(param) {
    var btn = document.getElementById("btn")
    var writein = document.getElementById('writein')
    var newValue = writein.value + param
    writein.value = newValue

    if (param == 'X') {
        var newValue = writein.value + '*'
        writein.value = newValue
    }
}

///programing the show and hide button




