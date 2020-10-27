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

    startClick() {
       
        //toggle between background
        
        // SHOW THE BUTTONS ON START CLICK
        const hiddenButtons = (document.getElementsByClassName("all-btns"))
        for(let button of hiddenButtons){button.classList.remove("d-none")}
        

        // START PAGE SHOULD HIDE
        const hiddenStart = (document.getElementById("start-page"))
        hiddenStart.classList.add("d-none")

    }

    questionDisplay(){
        //pick random question and category
        let randomQuestion = Math.floor(Math.random() * this.questions.length);
        let questionPicked = this.questions[randomQuestion].ques;
        let categoryPicked = this.questions[randomQuestion].category;
        let answersPicked = this.questions[randomQuestion].ans;
        let correctAnswer = this.questions[randomQuestion].correct;

        // link answwers to buttons
        document.getElementById("btn-1").innerHTML = answersPicked[0]
        document.getElementById("btn-2").innerHTML = answersPicked[1]
        document.getElementById("btn-3").innerHTML = answersPicked[2]
        document.getElementById("btn-4").innerHTML = answersPicked[3]

        // take out question of array
        this.questions.splice(randomQuestion, 1)

        // show the question on the card
        document.getElementById("display-question").innerHTML = questionPicked
        
        
        // show category on card
        document.getElementById("category-card").innerHTML = categoryPicked
        return questionPicked + categoryPicked + correctAnswer
    }

    // check if clicked button is correct
    // increment counter 
    // increment wrong and correct internal counter
    // move to next question (call questionDisplay)
    isCorrect() {
        let wrongCount = 0;
        let correctCount = 0;

        if (answersPicked[i] === correctAnswer) {
            correctCount++
            return true
        } else {
            wrongCount++
            return false
        }

    }


    // progressDisplay() {
    //     for (let i = 1 ; i < 11; i++)
    //     document.getElementById("counter").innerHTML = `This is question: ${i}/10`
    // }

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


