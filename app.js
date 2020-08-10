var myQuestions = [
    {
        question: "Full Form of RAM is?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random actual memory",
            "right access memory",
            "none of the above",
        ]
    },
    {
        question: "Full Form of CPU is?",
        answer: "central processing unit",
        options: [
            "central program unit",
            "central processing unit",
            "control panel unit",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "Full Form of LCD is?",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
    {
        question: "Full Form of SEO is?",
        answer: "none of the above",
        options: [
            "safe engine optimization",
            "secure engine optimization",
            "secret engine optimization",
            "none of the above",
        ]
    },
];

function checkUser(){

    var userName = document.getElementById("user");
    
    if(userName.value == "" || userName.value == " ")
    {
        alert("Username Cant be null");
    }
else{

        window.location.href="quiz.html";
        sessionStorage.setItem("name",userName.value);

}

}



var questionCounter = 0;
var score = 0;

function showQuestion(e){
        var questionElement = document.getElementById("questionElement");
        questionElement.innerHTML = myQuestions[e].question;

        var options = document.getElementsByClassName("options");
        for (var i = 0 ; i< options.length;i++)
        {
            options[i].innerHTML = myQuestions[e].options[i];
}

}



function nextQuestion (){
               validate(questionCounter);
               showResult();
               questionCounter++;
               if( questionCounter <= myQuestions.length-1){
                showQuestion(questionCounter);
            }
               
               removeClass();
              
}


function activeClass(e){
    removeClass();
    e.classList.add("active");          
}

function removeClass(){
              
    var active = document.getElementsByClassName("active"); 
                for (var i = 0 ; i< active.length;i++)
                {
                 active[i].classList.remove("active");
                }
                
}

function validate(e){

    var active = document.getElementsByClassName("active");
    if(active[0].innerHTML== myQuestions[e].answer){
        score += 10;
        console.log(score);
    }
}  

function showResult(){

        if (questionCounter == myQuestions.length-1)
        {
                alert("Your Result is "+score+" out of "+myQuestions.length*(10));
           

        }
      
}
