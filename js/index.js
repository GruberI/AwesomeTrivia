// questions and answers object
var questions = [{
    ques: "In which US city was the first Starbucks open?",
    ans: ["New York", "Miami", "Seattle", "San Francisco"],
    correct: "Seattle",
    category: "Food and Drink"
},
{
    ques: "What is the term for dry Champagne?",
    ans: ["Pinot Noir", "Chardonnay", "Sauvignon Blanc", "Brut"],
    correct: "Brut",
    category: "Food and Drink"
},
{
    ques: "In Greek mythology who defeat the Minotaur?",
    ans: ["Artemis", "Theseus", "Perseus", "Hector"],
    correct: "Theseus",
    category: "General Knowledge"
},
{
    ques: "Based on average depth, which ocean is the deepest?",
    ans: ["Pacific", "Atlantic", "Frank", "Arctic"],
    correct: "Pacific",
    category: "General Knowledge"
},
{
    ques: "Who was the lead in Mad Max: Fury Road?",
    ans: ["Joaquin Phoenix", "Scarlett Johansson", "Margot Robbie ", "Charlize Theron"],
    correct: "Charlize Theron",
    category: "Films"
},
{
    ques: "In The Wizard of Oz (1939), what was used to simulate snow during the poppy scene?",
    ans: ["Coconut Flakes", "Asbestos", "Cornflakes", "Powdered Sugar"],
    correct: "Asbestos",
    category: "Films"
},
{
    ques: "What is Earth's largest continent?",
    ans: ["Asia", "Africa", "Europe", "Antarctica"],
    correct: "Asia",
    category: "Science and Geography"
},
{
    ques: "What is the largest country in South America?",
    ans: ["Peru", "Columbia", "Chile", "Brazil"],
    correct: "Brazil",
    category: "Science and Geography"
},
{
    ques: "What is the name of Fern's pig in 'Charlotte's Web'?",
    ans: ["Babe", "Wilbur", "Pumbaa", "Peppa Pig"],
    correct: "Wilbur",
    category: "Literature"
},
{
    ques: "Name the cities to which the title 'A Tale of Two Cities' refers.",
    ans: ["London & Paris", "Minneapolis & Saint Paul", "Amsterdam & Brussels", "Shanghai & Seoul"],
    correct: "London & Paris",
    category: "Literature"
},
{
    ques: "What 1981 Stephen King novel is about a rabid dog?",
    ans: ["Old Yeller", "It", "Horns", "Cujo"],
    correct: "Cujo",
    category: "Literature"
}
] 

//create Trivia class w/ Methods

//Event listener?

<<<<<<< HEAD
// btn-success.addEventListener('click', () => {
    // if (btnLeft.innerHTML === "START"){
    //   chronometer.startClick(printTime);
    //   setStopBtn();
    //   setSplitBtn();

// class Trivia {
//     constructor(questions){
//         this.questions = questions;

//         this.counterCorrect = 0
//         this.counterWrong = 0
//     }

//     startClick() {
//         //show hidden buttons
//         //question display
//         //toggle between background
//         document.getElementsByClassName("all-btns").setClass.remove("d-none")
//         console.log(document.getElementsByClassName("all-btns"))
=======
    startClick() {
        //show hidden buttons
        //question display

    }
>>>>>>> 67a45249d2551ac9869a26d94a10014c5c1ed5d7

//         document.getElementById("start-page").setClass.add("d-none")
        
//     }

//     //getting the random question
//     questionDisplay(){
//         let randomQuestion = Math.floor(Math.random() * this.questions.length);
//         let questionPicked = this.questions[randomQuestion].ques;
//         this.questions.splice(randomQuestion, 1)

//         // console.log(this.questions[randomQuestion].ques)

//         return questionPicked
    
//     }

// }

const triviaGame = new Trivia(questions);

const btnStart = document.getElementById('btn-start');

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');

btnStart.addEventListener('click', function() {
    triviaGame.startClick();
    triviaGame.questionDisplay();
    // triviaGame.progressDisplay();

    
});

btn1.addEventListener('click', function() {
    if (triviaGame.isCorrect(btn1.innerHTML)) {
        //change button to green
        btn1.classList.remove("btn-light")
        btn1.classList.add("btn-success")
    } else {
        //change button to red
        btn1.classList.remove("btn-light")
        btn1.classList.add("btn-danger")
    }
    //set timeout 1 sec
    //cal questionDisplay
    triviaGame.questionDisplay();
})

btn2.addEventListener('click', function() {
    console.log(btn2.innerHTML)
    if (triviaGame.isCorrect(btn2.innerHTML)) {
        //change button to green  
        btn2.classList.remove("btn-light")
        btn2.classList.add("btn-success")
    } else {
        //change button to red
        btn2.classList.remove("btn-light")
        btn2.classList.add("btn-danger")
    }
    //set timeout 1 sec
    //cal questionDisplay
    triviaGame.questionDisplay();
})

btn3.addEventListener('click', function() {
    if (triviaGame.isCorrect(btn3.innerHTML)) {
        //change button to green
        btn3.classList.remove("btn-light")
        btn3.classList.add("btn-success")
    } else {
        //change button to red
        btn3.classList.remove("btn-light")
        btn3.classList.add("btn-danger")
    }
    //set timeout 1 sec
    //cal questionDisplay
    triviaGame.questionDisplay();
})

btn4.addEventListener('click', function() {
    if (triviaGame.isCorrect(btn4.innerHTML)) {
        //change button to green
        btn4.classList.remove("btn-light")
        btn4.classList.add("btn-success")
    } else {
        //change button to red
        btn4.classList.remove("btn-light")
        btn4.classList.add("btn-danger")
    }
    //set timeout 1 sec
    //cal questionDisplay
    triviaGame.questionDisplay();
})