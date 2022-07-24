let wins = 0
let losses = 0
let draws = 0

function getComputerChoice() {
  switch(Math.floor(Math.random() * 3) + 1) {
    case 1:
      return "rock"
    case 2:
      return "paper"
    case 3:
      return "scissors"
  }
}

function determineWinner(playerChoice, computerChoice) {
  let winner = ""

  if (!playerChoice)
    return "Error: no player choice"

  if(playerChoice === computerChoice)
    winner = "draw"
  else if(playerChoice === "rock" && computerChoice === "scissors")
    winner = "player"
  else if(playerChoice === "scissors" && computerChoice === "paper")
    winner = "player"
  else if(playerChoice === "paper" && computerChoice === "rock")
    winner = "player"
  else
    winner = "computer"

  return winner
}

function getPlayerChoice() {
  console.log("Get player choice placeholder")
}

function playRound() {
  let computerChoice = getComputerChoice();
  let ele = document.getElementsByName("gameChoice")
  let playerChoice = ""
  let winner = ""

  for (let i = 0; i < ele.length; i++) {
    if(ele[i].checked)
      playerChoice = ele[i].value;
  }

  winner = determineWinner(playerChoice, computerChoice)


  if(winner === "player")
    wins++
  else if(winner === "computer")
    losses++
  else if (winner === "draw")
    draws++

  console.log("Winner: " + winner)
  console.log("Player: " + playerChoice + " Computer: " + computerChoice)
  console.log("Total wins: " + wins + " Losses: " + losses + " Draws: " + draws)
}

let formElem = document.getElementById("playerChoice")
formElem.addEventListener("submit", playRound);
