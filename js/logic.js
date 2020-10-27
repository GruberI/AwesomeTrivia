//BUTTON START -> class Question

//class Question 
// - Will display a random quesiton from the array
// - Will show the 4 buttons with the answers on the bottom
// - Will display the counter set at 0 (counter will just say the number of the question)

class Trivia {
    constructor(questions){
        this.questions = questions;

        this.counterCorrect = 0
        this.counterWrong = 0
    }

    questionDisplay(){
        let randomQuestion = Math.floor(Math.random() * this.questions.length);
        let questionPicked = this.questions[randomQuestion];
        this.questions.splice(randomQuestion, 1)

        console.log(this.questions[randomQuestion].ques)

        return this.questions[randomQuestion].ques;
    
    }

}



// - METHOD TOGGLE CATEGORY 
//      - Will update category and background 



// - METHOD ANSWER
//      - Will update counter and move to the next question
//      - Will update internal correct/incorrect counter
//      - Will take out the question from the array, preventing it from being picked up again
//      - Will check if we are at end of game

// - END OF GAME METHOD
//      - Will display a different message depending on the grades
//      - Will display total counter
//      - Will give the option to restart


