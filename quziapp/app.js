
function signup() {
  var name1 = document.getElementById("Name").value;
  console.log(name1)
  var email = document.getElementById("Email").value;
  console.log(email)
  var pass = document.getElementById("pass").value;
  console.log(pass)
  var username=window.localStorage.setItem("name", name1);
  window.localStorage.setItem("email", email);
  window.localStorage.setItem("password", pass);

  var filter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var a = !filter.test(email);
  console.log(a)
  if (!filter.test(email)) {
    swal("Oops!", "Please provide valid email!");
    email.focus;
    return false;
  }

  if (pass === "") {
    swal("Oops!", "Please Entered password!");
  }
  else if (pass.length < 8) {
    swal("Oops!", "Password Length Greater then 8");
  }
  var confirmpass = document.getElementById("confirmpass").value;
  console.log(confirmpass)
  if (pass === confirmpass && pass.length > 8 && pass != "" && a === false) {
    window.location.href = "login.html"
  }
  else if (pass != confirmpass) {
    swal("Oops!", "Password Not Matched!");
  }
}





function loginbtn() {
  window.location.href = "login.html"

}
function startquiz() {
  window.location.href = "startquiz.html"
}
function signupbtn() {
  window.location.href = "index.html"
}
function loginpagebtn() {
  var emaillog = document.getElementById("Email-log").value;
  console.log(emaillog)
  var passlog = document.getElementById("pass-log").value;
  console.log(passlog)
  if (emaillog != window.localStorage.getItem("email")) {
    swal("Oops!", "Wrong Email or Password");
    
  }
  if (passlog === window.localStorage.getItem("password") && emaillog===window.localStorage.getItem("email")   ) {
    window.location.href = "quizes.html"
  }
  else {
    swal("Oops!", "Wrong Email or Password");
  }

}





let questions = [
  {
    Question: "What do you understand by HTML",
    op1: "HTML describes the structure of a webpage",
    op2: "HTML is the standard markup language mainly used to create web pages",
    op3: "All of the above",
    answer: "All of the above",


  },
  {
    Question: "Who is the father of HTML?",
    op1: "Rasmus Lerdorf",
    op2: "Tim Berners-Lee",
    op3: "Brendan Eich",
    answer: "Tim Berners-Lee",


  },
  {
    Question: "HTML stands for ___?",
    op1: "HyperText Marking Language",
    op2: "HyperText Machine Language",
    op3: "HyperText Marking Language",
    answer: "HyperText Marking Language",


  },
  {
    Question: "Which is used to read an HTML page and render it?",
    op1: "Web network",
    op2: "Web server",
    op3: "Web browser",
    answer: "Web browser",


  },
  {
    Question: "Which tag is used for inserting the largest heading in HTML?",
    op1: "h1",
    op2: "heading",
    op3: "h6",
    answer: "h1",


  },
  {
    Question: "Which is used to create Web Pages ?",
    op1: "HTML",
    op2: "C++",
    op3: "JVM",
    answer: "HTML",


  },
  {
    Question: "HTML is a set of markup ___.",
    op1: "tags",
    op2: "sets",
    op3: "none of the above",
    answer: "tags",


  },
  {
    Question: " HTML tags are used to describe document ___.",
    op1: "definition",
    op2: "language",
    op3: "content",
    answer: "content",


  },
  {
    Question: "HTML program is saved using ___ extension.",
    op1: ".html",
    op2: ".htnl",
    op3: ".htmn",
    answer: ".html",


  },
  {
    Question: "HTML program can be read and rendered by ___.",
    op1: "Compiler",
    op2: "Web Browser",
    op3: "Interpreter",
    answer: "Web Browser",


  },
  {
    Question: "HTML program can be read and rendered by ___.",
    op1: "Compiler",
    op2: "Web Browser",
    op3: "Interpreter",
    answer: "Web Browser",


  },


]

document.getElementById("quiz-div").innerHTML = `

<h1 class="question animate__animated animate__backInRight">Q:1   ${questions[0].Question}</h1>

<div class="form-check animate__animated animate__backInLeft ">
<label class="form-check-label"  for="flexRadioDefault1">
<input class="form-check-input" value="${questions[0].op1}" type="radio" name="flexRadioDefault" id="option1">

  ${questions[0].op1}
</label>
</div>

<div class="form-check animate__animated animate__backInLeft">
<input class="form-check-input" value="${questions[0].op2}" type="radio" name="flexRadioDefault" id="option2" >
<label class="form-check-label" id="op1" for="flexRadioDefault2">
 ${questions[0].op2}
</label>
</div>
<div class="form-check animate__animated animate__backInLeft">
<input class="form-check-input" value="${questions[0].op3}" type="radio" name="flexRadioDefault" id="option3" >
<label class="form-check-label"  for="flexRadioDefault2">
${questions[0].op3}
</label>
</div>
<div class="next animate__animated animate__backInRight"><button  onclick="nextQuestion()" class="button start-quiz next-btn">Next</button></div>

`
var res=0;
var mark=0;
var questionCount = 1;
function nextQuestion() {
  
  if(questionCount>=questions.length-1){
    console.log(questions.length)
    window.location.href= "success.html"
  }

  var questionsList = questions[questionCount];
  if (questionCount < questions.length) {
    questionCount++;
    var select=questions[res].answer
    console.log(questions[res].answer)
   

    

    var answers = document.querySelectorAll(".form-check-input")
    console.log(answers)
    for (i = 0; i < answers.length; i++) {
      for(i=0;i<answers.length;i++){
      if (answers[i].checked) {
        var a=answers[i].id
        console.log(a)
        var select=document.getElementById(a).value
        console.log(select)
        
        if(select===questions[res].answer){
          mark++;
          console.log(mark)
        }
        res++;
      }
      
        
      }
      
     window.localStorage.setItem("mark",mark)
     
    document.getElementById("quiz-div").innerHTML = ` 
    <h1 class="question  ">Q:${questionCount}   ${questionsList.Question}</h1>
    <div class="form-check">
    <label class="form-check-label"  for="flexRadioDefault1">
<input class="form-check-input" value="${questionsList.op1}"  type="radio" name="flexRadioDefault" id="option1" required>

  ${questionsList.op1}
</label>
</div>

<div class="form-check">
<input class="form-check-input" value="${questionsList.op2}" type="radio"  name="flexRadioDefault" id="option2" >
<label class="form-check-label"  id="op1" for="flexRadioDefault2">
${questionsList.op2}
</label>
</div>
<div class="form-check">
<input class="form-check-input" value="${questionsList.op3}"  type="radio" name="flexRadioDefault" id="option3" >
<label class="form-check-label"  for="flexRadioDefault2">
${questionsList.op3}
</label>
</div>
<div class="next"><button type="submit" id="btn" onclick="nextQuestion()" class="button start-quiz next-btn">Next</button></div>

    `

  }




}
}

//Result page
