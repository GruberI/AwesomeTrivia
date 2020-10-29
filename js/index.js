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
    ans: ["Peru", "Colombia", "Chile", "Brazil"],
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
    ans: ["London and Paris", "Minneapolis and Saint Paul", "Amsterdam and Brussels", "Shanghai and Seoul"],
    correct: "London and Paris",
    category: "Literature"
},
{
    ques: "What 1981 Stephen King novel is about a rabid dog?",
    ans: ["Old Yeller", "It", "Horns", "Cujo"],
    correct: "Cujo",
    category: "Literature"
},
{
    ques: "What year was the first model of the iPhone released?",
    ans: ["2005", "2007", "2009", "Taco"],
    correct: "2007",
    category: "General Knowledge"
},
{
    ques: "What was Superman's birth name?",
    ans: ["Alfred", "Clark Kent", "Ra's al Ghul", "Kal-El"],
    correct: "Kal-El",
    category: "General Knowledge"
},
{
    ques: "What part of the atom has no electric charge?",
    ans: ["Neutron", "Proton", "Electron", "Isotope"],
    correct: "Neutron",
    category: "Science and Geography"
},
{
    ques: "Who discovered penicillin?",
    ans: ["Louis Pasteur", "Robert Koch", "Alexander Fleming", "Marie Curie"],
    correct: "Alexander Fleming",
    category: "Science and Geography"
},
{
    ques: "Which country invented tea?",
    ans: ["India", "England", "China", "Japan"],
    correct: "China",
    category: "Food and Drink"
},
{
    ques: "Which kind of alcohol is Russia is notoriously known for?",
    ans: ["Champagne", "Vodka", "Tequila", "Beer"],
    correct: "Vodka",
    category: "Food and Drink"
},
{
    ques: "Name That Author: Who wrote The Iliad?",
    ans: ["Euripides", "Beowulf", "Homer", "Virgil"],
    correct: "Homer",
    category: "Literature"
},
{
    ques: "What was Marilyn Monroe's name at birth?",
    ans: ["Abbie Naylor Pressley", "Norma Jeane Mortenson", "Sarah Michelle Geller", "Eva Marie Saint"],
    correct: "Norma Jeane Mortenson",
    category: "Film"
},
{
    ques: "What year was the first Toy Story film released in cinemas?",
    ans: ["1995", "1999", "1990", "1989"],
    correct: "1995",
    category: "Film"
}

{
    ques: "What is the name of the hottest pepper in the world?",
    ans: ["Tabasco", "Habanero", "Jalapeños", "Carolina Reaper"],
    correct: "Carolina Reaper",
    category: "Food and Drink"
},
{
    ques: "How many valves does the heart have?",
    ans: ["Six", "Four", "Eight", "Three"],
    correct: "Four",
    category: "General Knowledge"
},
{
    ques: "What river runs through Baghdad?",
    ans: ["Nile", "Ganges", "Tigris", "Mississippi"],
    correct: "Tigris",
    category: "Science and Geography"
},
{
    ques: "Who played James Bond in 'For Your Eyes Only'?",
    ans: ["Daniel Craig", "Roger Moore", "Pierce Brosnan", "Tomothy Dalton"],
    correct: "Roger Moore",
    category: "Film"
},
{
    ques: "What novel begins with:'Call me Ishmael'?",
    ans: ["Moby Dick", "Omoo", "The Sea", "Twenty Thousand Leagues Under the Seas"],
    correct: "Moby Dick",
    category: "Literature"
},

{
    ques: "Yerevan is the capital of what country?",
    ans: ["Georgia", "Armenia", "Iran", "Azerbaijan"],
    correct: "Armenia",
    category: "Science and Geography"
},
{
    ques: "What do you call a vegetarian who only consumes chicken and fowl but no other meats?",
    ans: ["Pollotarian", "Pescatarian", "Totalitarian", "Kiptarian"],
    correct: "Pollotarian",
    category: "Food and Drink"
},
{
    ques: "What is the only edible food that is said to never spoils?",
    ans: ["Peanut Butter", "Dried Beans", "Canned foods", "Honey"],
    correct: "Honey",
    category: "Food and Drink"
},
{
    ques: "What is a group of cats called?",
    ans: ["A Clowder", "A Murder", "A Litter", "A Shadow"],
    correct: "A Clowder",
    category: "Science and Geography"
},
{
    ques: "In what year did The Beatles split up?",
    ans: ["1970", "1974", "1978", "1980"],
    correct: "1970",
    category: "General Knowledge"
},
{
    ques: "How many horses are on each team in a polo match?",
    ans: ["6", "4", "2", "10"],
    correct: "4",
    category: "General Knowledge"
},
{
    ques: "Which movie features an iconic dance scene between Uma Thurman and John Travolta?",
    ans: ["Saturday Night Fever", "Dangerous Liaisons", "The Producers", "Pulp Fiction"],
    correct: "Pulp Fiction",
    category: "Films"
},
{
    ques: "Who has won the most Oscars for acting in the history of the Academy Awards?",
    ans: ["Daniel Day-Lewis", "Katharine Hepburn", "Meryl Streep", "Jack Nicholson"],
    correct: "Katharine Hepburn",
    category: "Films"
},
{
    ques: "Emily Brontë's Wuthering Heights recounts the tragic romance between which two lovers?",
    ans: ["Isabella and Hindley", "Catherine and Heathcliff", "Eleanor and Christian", "Brad and Angelina"],
    correct: "Catherine and Heathcliff",
    category: "Literature"
},
{
    ques: "The Girl with the Dragoon Tattoo was originally published in which language?",
    ans: ["Swedish", "Norweigian", "Danish", "English"],
    correct: "Swedish",
    category: "Literature"
}
] 

// CODE

const triviaGame = new Trivia(questions);

const btnStart = document.getElementById('btn-start');

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btnRestart = document.getElementById('btn-restart')

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
   
    if (triviaGame.isFinished() === true) {
        setTimeout(function() {
            triviaGame.gameEnd();
            }, 1000);
    } else if (triviaGame.notFinished() === true){
        setTimeout(function() {
            triviaGame.questionDisplay();
            triviaGame.resetButtons();
            }, 1000);
    }

    // counter on how many questions
    triviaGame.totalQuestions++
    
})

btn2.addEventListener('click', function() {

    if (triviaGame.isCorrect(btn2.innerHTML)) {
        //change button to green  
        btn2.classList.remove("btn-light")
        btn2.classList.add("btn-success")
    } else {
        //change button to red
        btn2.classList.remove("btn-light")
        btn2.classList.add("btn-danger")
    }
    
    if (triviaGame.isFinished() === true) {
        setTimeout(function() {
            triviaGame.gameEnd();
            }, 1000);
    } else if (triviaGame.notFinished() === true){
        setTimeout(function() {
            triviaGame.questionDisplay();
            triviaGame.resetButtons();
            }, 1000);
    }

    // counter on how many questions
    triviaGame.totalQuestions++
    
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

    if (triviaGame.isFinished() === true) {
        setTimeout(function() {
            triviaGame.gameEnd();
            }, 1000);
    } else if (triviaGame.notFinished() === true){
        setTimeout(function() {
            triviaGame.questionDisplay();
            triviaGame.resetButtons();
            }, 1000);
    }

    // counter on how many questions
    triviaGame.totalQuestions++
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
    
    if (triviaGame.isFinished() === true) {
        setTimeout(function() {
            triviaGame.gameEnd();
            }, 1000);
    } else if (triviaGame.notFinished() === true){
        setTimeout(function() {
            triviaGame.questionDisplay();
            triviaGame.resetButtons();
            }, 1000);
    }

    // counter on how many questions
    triviaGame.totalQuestions++
})

btnRestart.addEventListener('click', function(){
    // triviaGame.startClick();
    triviaGame.restart();
    triviaGame.questionDisplay();

    document.getElementById("finish-page").classList.add("d-none")
    document.getElementById("start-page").classList.remove("d-none")
})