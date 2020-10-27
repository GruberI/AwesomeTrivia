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
    ques: "Who was the lead in Mad Max: Furry Road?",
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
class Trivia {
    constructor(questions){
        this.questions = questions;

        this.counterCorrect = 0
        this.counterWrong = 0
    }

    startClick() {
        //show hidden buttons
        //question display
        //toggle between background
    }

    //getting the random question
    questionDisplay(){
        let randomQuestion = Math.floor(Math.random() * this.questions.length);
        let questionPicked = this.questions[randomQuestion];
        this.questions.splice(randomQuestion, 1)

        console.log(this.questions[randomQuestion].ques)

        return this.questions[randomQuestion].ques;
    
    }

}

const triviaGame = new Trivia(questions);

triviaGame.questionDisplay()


