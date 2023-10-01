const questions = [
    {
        text: "1) What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correct: 0
    },
    {
        text: "2) What is the capital of india?",
        options: ["Delhi", "Hydarabad", "Agra", "New delhi"],
        correct: 3
    },
    {
        text: "3) What is the initial name of JS?",
        options: ["Java", "Mocha", "JavaScipt", "LiveScript"],
        correct: 1
    },
    {
        text: "4) JS stands for?",
        options: ["JavaScipt", "JavaScope", "JuneScipt", "JovoScope"],
        correct: 0
    },
    {
        text: "5) Js is used for what purpose in Web Development?",
        options: ["stucturing", "functionality", "styling", "None"],
        correct: 1
    },
    
// ... add more questions here
];




var currentQuestionIndex = 0;
var score = 0;
var timer; 
var countdownInterval;
var isAnswered = false;




function displayQuestion(index) {
    isAnswered = false;
    if (index==0){
        document.getElementById('next').style.display = "none";  
    }
    const question = questions[index];
    document.getElementById('question-text').textContent = question.text;
    const buttons = document.querySelectorAll('.answers button');
    for (let i = 0; i < buttons.length; i++) {
        
        buttons[i].textContent = question.options[i];
        
    }
    
    if (currentQuestionIndex < questions.length) {
    
        timer=setTimeout(nextQuestion,10000);
}
    
    startCountdown(10);
}






function checkAnswer(index) {

    if (countdownInterval) {
        clearInterval(countdownInterval);
}
    
    if (!isAnswered) {
    if (index === questions[currentQuestionIndex].correct) {
        score++;
    }

    isAnswered = true;  
}
    
    document.getElementById('next').textContent="next"
    

    document.getElementById('next').style.display = "block";  
}
    






function nextQuestion() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    if (timer) {
        clearTimeout(timer);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        console.log(currentQuestionIndex,questions.length);
        displayQuestion(currentQuestionIndex);
        console.log("hide 'nest' in nest question fun");
        document.getElementById('next').style.display = "none";  
    } 
    else if(currentQuestionIndex == questions.length) {
        
        
        console.log("show restart botton");
        console.log(currentQuestionIndex,questions.length);
        document.getElementById('next').style.display = "block";
        document.getElementById('next').textContent="restart";
        document.getElementById('question-text').textContent = 'Quiz completed! Your score: ' + score;
        document.getElementById('answers').style.display = "none";
        document.getElementById('countdown').style.display = "none";
    }
    else{
        console.log("entered restart function ");
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('answers').style.display = "block";
        displayQuestion(0);
    }        

    
}








function startCountdown(time) {
    document.getElementById('countdown').style.display = "block";
    document.getElementById("countdown").textContent = "Time Left : "+ time +"s";

    countdownInterval = setInterval(function() {
        time--;
        document.getElementById("countdown").textContent = "Time Left : "+ time +"s";
        if (time <= 0) {
            clearInterval(countdownInterval);
            nextQuestion();
        }
    }, 1000);
}

displayQuestion(0);  