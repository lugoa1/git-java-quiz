//  function hideContent(){

//  let cycleContent = document.getElementById("button1")

//  cycleContent.on('click', function () {
//      document.getElementBy("center-content1").style.display = "hidden"
//    })};

// let firstChange = $("center-content1")
// let firstChange2 = $("center-content2")



// function hide(){
//     document.getElementById("center-content1").style.display = "hidden"
//    };

// function myFunction() {
//     var x = document.getElementById("center-content1");
//     if (x.style.display === "visible") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "hidden";
//     }
//   }



var timer = document.querySelector(".time");


var divMain = document.getElementById("#main");
 let text2 = document.getElementById("questions")

var secondsLeft = 60;


function setTime() {

  var timerInterval = setInterval(function () {
  
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds left!.";

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
       window.location.reload();
    }

  }, 1000);
}


function displayText() {
  var text = document.getElementById("questions");
  text.style.display = "block";
}


function scores() {
  let correctAns = document.getElementById("answer1")
  let scoreDisplay = document.getElementById("score")
  let correctAns2 = document.getElementById("answer4")
  let correctAns3 = document.getElementById("answer5")
  let score = 0
  correctAns2.addEventListener("click", function () {
    score+=2;
    scoreDisplay.innerHTML = "score" + "" + score;
    timer.textContent = secondsLeft + " " + "correct!"
    document.getElementById("answer4").disabled = true;
    document.getElementById("answer3").disabled = true;
    
  },{once : true})
  correctAns3.addEventListener("click", function () {
    score+= 3;
    scoreDisplay.innerHTML = "score" + "" + score;
    timer.textContent = secondsLeft + " " + "correct!"
    document.getElementById("answer5").disabled = true;
    document.getElementById("answer6").disabled = true;
  },{once : true})
  correctAns.addEventListener("click", function () {
    score += 1;
    scoreDisplay.innerHTML = "score" + "" + score;
    timer.textContent = secondsLeft + " " + "correct!"
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
   
  },{once : true})};

function wrongAns(){
let wrongAns = document.getElementById("answer2")
let wrongAns2 = document.getElementById("answer3")
let wrongAns3 = document.getElementById("answer6")
  wrongAns.addEventListener("click", function () {
  secondsLeft -= 4
  timer.textContent = secondsLeft + " " + "wrong answer!"
  document.getElementById("answer1").disabled = true;
 

},{once : true})
wrongAns2.addEventListener("click", function () {
  secondsLeft -= 4
  timer.textContent = secondsLeft + " " + "wrong answer!"
  document.getElementById("answer4").disabled = true;
})
wrongAns3.addEventListener("click", function () {
  secondsLeft -= 4
  timer.textContent = secondsLeft + " " + "wrong answer!"
  document.getElementById("answer6").disabled = true;
})}


let submitButton = document.getElementById("submit-button")  

var highscore = localStorage.getItem("myHighscore") || 0;


submitButton.addEventListener("click", function(){
  window.location.reload();
});
