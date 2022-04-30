let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;
let quiz = [
    {
        question: "what does HTML stand for?" ,
        Option: [
            "Hyper Tag Markeup Language",
            "Hyper Text Markup Language",
            "Hyperlinks text Mark Language",
            "Hyperlinking Text Marking Language",
        ],
        answer: 2,
    },
    {
        question: "what does CSS stand for?" ,
        Option: [
            "Computing style sheet",
            "Creative style system",
            "cascading style sheet",
            "creative styling sheet",
        ],
        answer: 3,
    },
    {
        question: "where should a css file be referenced in a html file?" ,
        Option: [
            "before any HTML code",
            "after all HTML code",
            "inside the head section",
            "inside the body section",
        ],
        answer: 3,
    },
    {
        question: "select the correct HTML tag to make a text bold" ,
        Option: [
            "bo",
            "bb",
            "b",
            "bold",
        ],
        answer:3 ,
    },
    {
        question: "which is the correct css syntax?" ,
        Option: [
            "body{color:black}",
            "{body:color:black}",
            "{body:color =black{body}",
            "body:color:black",
        ],
        answer: 1,
    },
    {
        question: "which is the correct format for changing the background colour of a div in CSS?" ,
        Option: [
            "bg-color:red;",
            "bg:red;",
            "background-colour:red;",
            "background-color:red;",
        ],
        answer:4 ,
    },
    {
        question: "what is the correct format for allgning content to the center of the page in CSS?" ,
        Option: [
            "text-align:center;",
            "font-align:center;",
            "text:align-center;",
            "font:align-center;",
        ],
        answer:1 ,
    },
    {
        question: "in CSS,what is the correct option to select all the tags on the page?" ,
        Option: [
            "<p>[]",
            ".p[]",
            "#p[]",
            "*[]",
        ],
        answer: 4,
    },
    {
        question: "select the correct HTML tag to make a text italic" ,
        Option: [
            "italic",
            "||",
            "iT",
            "|",
        ],
        answer:4 ,
    },
    {
        question: "choose the correct HTML tag for the largest heading" ,
        Option: [
            "<heading>",
            "<h6>",
            "<head>",
            "<h1>",
        ],
        answer:2 ,
    },
    
]
let questions = quiz.sort(function () {
    return 0.5 - Math.random();
  });
  let totalquestion = questions.length;

$(function () {
  let totalTimer = 200; //200 secondes
  let min = 0;
  let sec = 0;
  let counter = 0;

let timer = setInterval(function () {
    counter++;
    min = Math.floor((totalTimer - counter) / 60);
    sec = totalTimer - min * 60 - counter;
    $("timerbox span").text(min + ":" + sec);
    var time = document.getElementById('time');
    console.log(time)
    time.innerText = `${min}:${sec}`
    if (counter == totalTimer) {
      alert("time's up . press ok to show the result");
      result();
      clearInterval(timer);
    }
  }, 1000); //timer set for 1 secondes interval

  //print questions
  printquestion(index);
});

//function to print question
function printquestion(i) {
  console.log(questions[0]);
  $(".questionsbox").text(questions[i].question);
  $(".optionbox span").eq(0).text(questions[i].Option[0]);
  $(".optionbox span").eq(1).text(questions[i].Option[1]);
  $(".optionbox span").eq(2).text(questions[i].Option[2]);
  $(".optionbox span").eq(3).text(questions[i].Option[3]);
}

//function to check answer
function checkanswer(option) {
  attempt++;
  let optionclikced = $(option).data("opt");
  //console.log(questions[index]);
  if (optionclikced == questions[index].answer) {
    $(option).addClass("right");
    score++;
  } 
  else {
    $(option).addClass("wrong");
    wrong++;
  }
  $(".scorebox span").text(score);
  $(".optionbox span").attr("onclick", "");
}

//function for the next question
function showNext() {
  if (index >= questions.length - 1) {
    showResult(0);
  }
  index++;
  $(".optionbox span").removeClass();
  $(".optionbox span").attr("onclick", "checkanswer(this)");
  printquestion(index);
}

//function for result
function showResult(j) {
  if (
    j == 1 &&
    index < questions.length - 1 &&
    !confirm(
      "quiz has not finished yet. press ok to skip quiz & get your score. "
    )
  ) {
    return 0;
  }
  result();
}

//result function
function result() {
  $("#questionscreen").hide();
  $("#resuletscreen").show();

  $("#totalquestion").text(totalquestion);
  $("#attemptquestion").text(attempt);
  $("#correctanswers").text(score);
  $("#wronganswers").text(wrong);
}
