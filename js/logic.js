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
        this.correctAns = ''
        this.totalQuestions = 1
        
    }

    startClick() {
       
        // SHOW THE BUTTONS ON START CLICK
        const hiddenButtons = (document.getElementsByClassName("all-btns"))
        for(let button of hiddenButtons){button.classList.remove("d-none")}
        

        // START PAGE SHOULD HIDE
        const hiddenStart = (document.getElementById("start-page"))
        hiddenStart.classList.add("d-none")

        //FINISH PAGE
        // const hiddenFinish = (document.getElementById("finish-page"))
        // hiddenFinish.classList.add("d-none")

    }

    questionDisplay(){
        //pick random question and category
        let randomQuestion = Math.floor(Math.random() * this.questions.length);
        let questionPicked = this.questions[randomQuestion].ques;
        let categoryPicked = this.questions[randomQuestion].category;
        let answersPicked = this.questions[randomQuestion].ans;
        // let correctAnswer = this.questions[randomQuestion].correct;
        this.correctAns = this.questions[randomQuestion].correct;

        // link answers to buttons
        document.getElementById("btn-1").innerHTML = answersPicked[0]
        document.getElementById("btn-2").innerHTML = answersPicked[1]
        document.getElementById("btn-3").innerHTML = answersPicked[2]
        document.getElementById("btn-4").innerHTML = answersPicked[3]

        // take out question of array
        this.questions.splice(randomQuestion, 1)

        // show the question on the card
        document.getElementById("display-question").innerHTML = questionPicked
        
        // change background for each question
        switch(categoryPicked) {
            case 'Literature':
                // document.getElementById("body").classList.remove
                document.getElementById("body").classList = ''
                document.getElementById("body").classList.add("background-literature") 
                break;
            case 'General Knowledge':
                document.getElementById("body").classList = ''
                document.getElementById("body").classList.add("background-knowledge") 
                break;
            case 'Food and Drink':
                document.getElementById("body").classList = ''
                document.getElementById("body").classList.add("background-food") 
                break;
            case 'Science and Geography':
                document.getElementById("body").classList = ''
                document.getElementById("body").classList.add("background-science") 
                break;
            case 'Films':
                document.getElementById("body").classList = ''
                document.getElementById("body").classList.add("background-films") 
                break;
        }

        // show category on card
        document.getElementById("category-card").innerHTML = categoryPicked
        this.progressDisplay()
        this.resetButtons();

        // return questionPicked + categoryPicked 

    }

    

    resetButtons() {
        
           
            let clickedButtons = document.getElementsByClassName("btn")
            for  ( var i = 0; i < clickedButtons.length; i++) {
                
                
                if (clickedButtons[i].className.includes("btn-danger")) {
                    // console.log(clickedButtons[i].classList.remove("btn-danger"))
                    // return clickedButtons.className = "btn btn-light ans-btn"
                    clickedButtons[i].classList.remove("btn-danger")
                    clickedButtons[i].classList.add("btn-light")
                    
                    // return clickedButtons[i].className.split("btn-danger")

                } else if (clickedButtons[i].className.includes("btn-success")) {
                    // console.log(clickedButtons[i].classList.remove("btn-success"))
                    // return clickedButtons.className = "btn btn-light ans-btn"
                    clickedButtons[i].classList.remove("btn-success")
                    clickedButtons[i].classList.add("btn-light")
                }
            }
        

    }

    // check if clicked button is correct
    // increment counter 
    // increment wrong and correct internal counter
    // move to next question (call questionDisplay)
    isCorrect(content) {

        if (content === this.correctAns) {
            this.counterCorrect++
            return true
        } else {
            this.counterWrong++
            return false
        }

    }

    isFinished() {
        if (this.totalQuestions === 10){
          return true;
        } else {
          return false;
        }
      }

      notFinished() {
        if (this.totalQuestions < 10)
            return true;
        else {
            return false;
        }
    }

      gameEnd(){

        // Hide THE BUTTONS ON START CLICK
        const hiddenButtons = (document.getElementsByClassName("all-btns"));
        for(let button of hiddenButtons){button.classList.add("d-none")};
        

        // Question page should hide
        const hiddenQuestion = (document.getElementById("questions-page"));
        hiddenQuestion.classList.add("d-none");

        //show finish page
        const hiddenFinish = (document.getElementById("finish-page"));
        hiddenFinish.classList.remove("d-none");


        document.getElementById("counter-finish").innerHTML = `You answered ${this.counterCorrect} out of 10 correctly!`
        console.log(this.counterCorrect)



          if (this.counterCorrect >= 1 && this.counterCorrect <= 5) {
            document.getElementById("result-title").innerHTML = "Umm, not so good. You can do better!"
          } else if (this.counterCorrect >= 6 && this.counterCorrect < 8) {
            document.getElementById("result-title").innerHTML = "Not that bad...(but not great either)..."
          } else if (this.counterCorrect >= 8) {
            document.getElementById("result-title").innerHTML = "Wow, you must be a genius!"
          } else {
            document.getElementById("result-title").innerHTML = "Wow...not one, better go study!"
          }

      } 


    progressDisplay() {
        document.getElementById("counter").innerHTML = `Question: ${this.totalQuestions} / 10`
        // console.log(this.counterCorrect)
    }

    restart(){
        this.counterCorrect = 0;
        this.counterWrong = 0;
        this.totalQuestions = 1;
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


