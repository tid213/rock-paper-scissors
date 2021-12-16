//Creates variable to store scores

let computerScore = 0;
let playerScore = 0;
let draws = 0;

// Creates computers choice for Rock, Paper, Scissors

function computerPlay(){
    let choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomNum = Math.floor(Math.random()*choices.length);
    let computerChoice =  choices[randomNum];
    return computerChoice;
}

//creates image to match user choice

function choiceImg(clickInput){
    var img1 = document.getElementById('image1');
    if (clickInput === 'ROCK'){
        img1.src = 'images/rock.jpg';
    } else if (clickInput === 'PAPER'){
        img1.src = 'images/paper.jpg';
    } else if (clickInput === 'SCISSORS'){
        img1.src = 'images/scissors.jpg';
    } else{

    }
    
}

//creates image to match computer choice

function computerImg(compPlay){
    var img2 = document.getElementById('image2')
    if (compPlay === 'ROCK'){
        img2.src = 'images/rock.jpg';
    } else if (compPlay === 'PAPER'){
        img2.src = 'images/paper.jpg';
    } else if (compPlay === 'SCISSORS'){
        img2.src = 'images/scissors.jpg';
    } else{

    }
}

//Game function that compares user choice and computer choice

function newGame(choice){
    var compPlay = computerPlay();
    if (choice === 'ROCK'){
        choiceImg(choice);
        if (compPlay === 'PAPER'){
            computerImg(compPlay);
            computerScore = ++computerScore;
        } else if (compPlay === 'SCISSORS'){
            computerImg(compPlay);
            playerScore = ++playerScore;
        } else{
            computerImg(compPlay);
            draws = ++draws;
        }
    } else if (choice === 'PAPER'){
        choiceImg(choice);
        if (compPlay === 'ROCK'){
            computerImg(compPlay);
            playerScore = ++playerScore;
        } else if (compPlay === 'SCISSORS'){
            computerImg(compPlay);
            computerScore = ++computerScore;
        } else{
            computerImg(compPlay);
            draws = ++draws;
        }
    } else if (choice === 'SCISSORS'){
        choiceImg(choice);
        if (compPlay === 'ROCK'){
            computerImg('ROCK');
            computerScore = ++computerScore;
        } else if (compPlay === 'PAPER'){
            computerImg('PAPER');
            playerScore = ++playerScore;
        } else{
            computerImg('SCISSORS');
            draws = ++draws;

        }
    }
    keepScore();
}

//Keeps score and resets page once score limit is reached

function keepScore(){
    document.getElementById('pScore').innerText = playerScore;
    document.getElementById('cScore').innerText = computerScore;
    document.getElementById('pDraws').innerText = draws;

    if (playerScore === 5){
        window.alert("WIN!!!!");
        window.location.reload();
    } else if (computerScore === 5){
        window.alert("LOST!!!");
        window.location.reload();
    } else if (draws === 10){
        window.alert("TOO MANY DRAWS!!!!!");
        window.location.reload();
    } else{

    }
}
