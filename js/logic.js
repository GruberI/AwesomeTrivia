
class Trivia {
    constructor(questions){
        this.questions = questions;

        this.counterCorrect = 0
        this.counterWrong = 0
        this.correctAns = ''
        this.totalQuestions = 1
        
    }

    startClick() {
       
        const hiddenButtons = (document.getElementsByClassName("all-btns"))
        for(let button of hiddenButtons){button.classList.remove("d-none")}

        const hiddenStart = (document.getElementById("start-page"))
        hiddenStart.classList.add("d-none")
    }

    questionDisplay(){
        
        let randomQuestion = Math.floor(Math.random() * this.questions.length);
        let questionPicked = this.questions[randomQuestion].ques;
        let categoryPicked = this.questions[randomQuestion].category;
        let answersPicked = this.questions[randomQuestion].ans;
       
        this.correctAns = this.questions[randomQuestion].correct;

       
        document.getElementById("btn-1").innerHTML = answersPicked[0]
        document.getElementById("btn-2").innerHTML = answersPicked[1]
        document.getElementById("btn-3").innerHTML = answersPicked[2]
        document.getElementById("btn-4").innerHTML = answersPicked[3]

       
        this.questions.splice(randomQuestion, 1)

      
        document.getElementById("display-question").innerHTML = questionPicked
        
        
        switch(categoryPicked) {
            case 'Literature':
                
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

        
        document.getElementById("category-card").innerHTML = categoryPicked
        this.progressDisplay()
        this.resetButtons();

    }

    resetButtons() {
        let clickedButtons = document.getElementsByClassName("btn")
        for  ( var i = 0; i < clickedButtons.length; i++) {
                
                
             if (clickedButtons[i].className.includes("btn-danger")) {
                   
                clickedButtons[i].classList.remove("btn-danger")
                clickedButtons[i].classList.add("btn-light")
      
            } else if (clickedButtons[i].className.includes("btn-success")) {
                    
                clickedButtons[i].classList.remove("btn-success")
                clickedButtons[i].classList.add("btn-light")
                }
            }
        

    }

    
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

        
        const hiddenButtons = (document.getElementsByClassName("all-btns"));
        for(let button of hiddenButtons){button.classList.add("d-none")};
        

        
        const hiddenQuestion = (document.getElementById("questions-page"));
        hiddenQuestion.classList.add("d-none");

        
        const hiddenFinish = (document.getElementById("finish-page"));
        hiddenFinish.classList.remove("d-none");


        document.getElementById("counter-finish").innerHTML = `You answered ${this.counterCorrect} out of 10 correctly!`
        console.log(this.counterCorrect)



          if (this.counterCorrect >= 1 && this.counterCorrect <= 5) {
            document.getElementById("result-title").innerHTML = "&#129300 <br> Umm, you can do better!"
          } else if (this.counterCorrect >= 6 && this.counterCorrect < 8) {
            document.getElementById("result-title").innerHTML = "&#129299 <br>Not that bad...(but not great either)!"
          } else if (this.counterCorrect >= 8) {
            document.getElementById("result-title").innerHTML = "&#129321 <br>Wow, you must be a genius!"
          } else {
            document.getElementById("result-title").innerHTML = "&#128584 <br>Wow...not one, better go study!"
          }

      } 


    progressDisplay() {
        document.getElementById("counter").innerHTML = `Question: ${this.totalQuestions} / 10`
      
    }

}



