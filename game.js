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

function determineRoundWinner(playerChoice, computerChoice) {
  if (!playerChoice)
    return "Error: no player choice"

  if(playerChoice === computerChoice)
    return "draw"
  else if(playerChoice === "rock" && computerChoice === "scissors")
    return "player"
  else if(playerChoice === "scissors" && computerChoice === "paper")
    return "player"
  else if(playerChoice === "paper" && computerChoice === "rock")
    return "player"
  else
    return "computer"
}

function declareWinner(winner) {
  const gameWinner = document.createElement("div")
  gameWinner.style.fontSize = "24px";
  gameWinner.style.fontWeight = "900";
  gameWinner.textContent = `${winner} has won the game!`
  return gameWinner
}

function updateScoreboard(winner, choices) {
  const scoreboard = document.querySelector("#scoreboard");
  const winnerDiv = document.querySelector("#winner");
  scoreboard.removeChild(winnerDiv);
  const round = document.querySelector("#round");
  scoreboard.removeChild(round);
  const score = document.querySelector("#score");
  scoreboard.removeChild(score);

  if (wins === 5) {
    gameWinner = declareWinner("Player")
    scoreboard.appendChild(gameWinner)
  } else if (losses === 5) {
    gameWinner = declareWinner("Computer")
    scoreboard.appendChild(gameWinner)
  }

  winnerDiv.style.fontSize = "18px";
  winnerDiv.style.fontWeight = "900";
  winnerDiv.textContent = `The winner is: ${winner}`;
  scoreboard.appendChild(winnerDiv);

  round.textContent = `Player: ${choices[0]}, Computer: ${choices[1]}`
  scoreboard.append(round)
  
  score.textContent = `Wins: ${wins}, Losses: ${losses}, Draws: ${draws}`;
  scoreboard.append(score);
  
  if (wins >= 5 || losses >= 5) {
    wins = 0
    losses = 0
    draws = 0
  }
}

function playRound(e) {
  const computerChoice = getComputerChoice();
  const playerChoice = e.target.id;
  let winner = "";

  winner = determineRoundWinner(playerChoice, computerChoice);

  if(winner === "player")
    wins++
  else if(winner === "computer")
    losses++
  else if (winner === "draw")
    draws++

  updateScoreboard(winner, [playerChoice, computerChoice])
}

const buttons = document.querySelectorAll(".playerChoice")
buttons.forEach (button => button.addEventListener("click", playRound))
