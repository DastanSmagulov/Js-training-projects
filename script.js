
function ageInDays(){
    let birthYear = prompt('What your year of birth bro?');
    let daysOfAge = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textArea = document.createTextNode('You are ' + daysOfAge + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textArea);
    document.getElementById('flexbox-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove()
}

function generateCat(){
    let img = document.createElement('img');
    let div = document.getElementById('cat-gen');
    img.src = 'https://cdn2.thecatapi.com/images/o0.gif';
    div.appendChild(img);
}

function rpsGame(yourChoice){
    console.log(yourChoice);
    let botChoice, humanChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(rpsRandom());
    console.log('Computer Choice:', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message)
}

function rpsRandom(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice){
    rpsDatabase = {
    'rock': {'rock': 0.5, 'paper': 0, 'scissors': 1 },
    'paper': {'paper': 0.5, 'scissors': 0, 'rock': 1 },
    'scissors': {'scissors': 0.5, 'rock': 0, 'paper': 1 },
};

    let humanScore = rpsDatabase[humanChoice][botChoice];
    let botScore = rpsDatabase[botChoice][humanChoice];

    return [humanScore, botScore];
}

function finalMessage([humanScore, botScore]){
    if(humanScore === 0){ 
        return {'message': 'You lost!', 'color': 'red'};
    } else if (humanScore === 0.5){
        return {'message': 'You tied', 'color': 'yellow'}
    }
    else {
        return {'message': 'You won!', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src
    }
    // maybe there is a mistake

    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=200 width=200 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    

    document.getElementById("flexbox-rps-div").appendChild(humanDiv);
    document.getElementById("flexbox-rps-div").appendChild(messageDiv)
    document.getElementById("flexbox-rps-div").appendChild(botDiv); 
}

// challenge 4

    let all_button = document.getElementsByTagName('button');

    let copyAllButtons = [];
    
    for (let i = 0; i < all_button.length; i++){
        copyAllButtons.push(all_button[i].classList[1])
    }

    function buttonColorChange(buttonThingy){
        if(buttonThingy.value === "red"){
            buttonRed();
        } else if (buttonThingy.value === 'green'){
            buttonGreen();
        } else if (buttonThingy.value === 'reset'){
            buttonColorReset();
        } else if(buttonThingy.value === 'random'){
            randomColors();
        }
    }

    function buttonRed(){
        for (let i = 0; i < all_button.length; i++){
            all_button[i].classList.remove(all_button[i].classList[1]);
            all_button[i].classList.add('btn-danger');
        }
    }

    function buttonGreen(){
        for (let i = 0; i < all_button.length; i++){
            all_button[i].classList.remove(all_button[i].classList[1]);
            all_button[i].classList.add('btn-success');
        }
    }

    function buttonColorReset(){
        for(let i = 0; i < all_button.length; i++){
            all_button[i].classList.remove(all_button[i].classList[1]);
            all_button[i].classList.add(copyAllButtons[i]);
        }
    }

    function randomColors(){
        let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'] 
        
        for(let i = 0; i < all_button.length; i++) {
            let randomNumber = Math.floor(Math.random() * 4);
            all_button[i].classList.remove(all_button[i].classList[1]);
            all_button[i].classList.add(choices[randomNumber]);
        }
    }

    





