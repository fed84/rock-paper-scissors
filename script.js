
let computerMove = "";
      
let result = "";
      
let score = JSON.parse(localStorage.getItem('score')) || 0
        
document.querySelector('.score').innerHTML = `${score}`

function playgame(playerMove) {
        
    pickMove()

    if (playerMove === computerMove) {result = 'YOU TIED'}
    else if (playerMove === 'rock' && computerMove === 'paper'){result = 'YOU LOST'}
    else if (playerMove === 'rock' && computerMove === 'scissors'){result = 'YOU WON'}
    else if (playerMove === 'paper' && computerMove === 'scissors'){result = 'YOU LOST'}
    else if (playerMove === 'paper' && computerMove === 'rock'){result = 'YOU WON'}
    else if (playerMove === 'scissors' && computerMove === 'paper'){result = 'YOU WON'}
    else if (playerMove === 'scissors' && computerMove === 'rock'){result = 'YOU LOST';}

    if (result === 'YOU WON') {score +=1}
    if(result === 'YOU LOST') {score = 0}
        
    document.querySelector('.score').innerHTML = `${score}`
       
    displayResult(`${playerMove}`)

    localStorage.setItem('score',JSON.stringify(score))
        
}


function pickMove() {
    computerMove = Math.random()
    if (computerMove <= 1/3) {computerMove = 'rock'}
    else if (computerMove > 1/3 && computerMove <=2/3) {computerMove = 'paper'}
    else if (computerMove >2/3) {computerMove = 'scissors'};

    return computerMove;
}


function displayResult(playerMove2) {
    document.querySelector('.button-container').innerHTML = `
    <div class="useful">
    <div class="result-container"> 
    <div class="cont1"> <div class="title2">YOU PICKED</div><button class="button-${playerMove2}"><img src="images/icon-${playerMove2}.svg"</button></div>
    <div class="cont2"><div class="result-title">${result}</div><button onclick="playAgain()" class="play-again">PLAY AGAIN</button></div>
    <div class="cont3"><div class="title2">THE HOUSE PICKED</div><button class="button-${computerMove}"><img src="images/icon-${computerMove}.svg"</button></div>
    </div>
    </div>`
}

function playAgain() {
  document.querySelector('.button-container').innerHTML = `
      <div class="first-two">
        <div class="use">
          <button class="button-paper" onclick="playgame('paper')">
            <img src="images/icon-paper.svg" />
          </button>
          <button class="button-scissors" onclick="playgame('scissors')">
            <img src="images/icon-scissors.svg" />
          </button>
        </div>
      </div>
      <div class="third">
        <button class="button-rock" onclick="playgame('rock')">
          <img src="images/icon-rock.svg" />
        </button>
      </div>
      <img class="triangle-img" src="images/bg-triangle.svg">
      <div class="rules"><button class="rules-button" onclick="showRules()">RULES</button></div>
      <div class="rules-container"></div>`
}

function showRules() {
  document.querySelector('.rules-container').innerHTML = `
  <div class="use2">
  <div class="cont4"><div class="rules-title">RULES</div><button class="x-button" onclick="hideRules()">X</div>
  <img src="images/image-rules.svg">
  </div>
  `
}
function hideRules() {
  document.querySelector('.rules-container').innerHTML = ``
}
