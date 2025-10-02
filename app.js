// Step 2: computer choice
function getComputerChoice() {
  const r = Math.random();
  if (r < 1/3) return "rock";
  if (r < 2/3) return "paper";
  return "scissors";
}

// Step 3: human choice (assume valid input)
function getHumanChoice() {
  const input = prompt("Choose: rock, paper, or scissors");
  return input;
}

// Step 6: play entire game (5 rounds)
// Move scoring and playRound into playGame as required
function playGame() {
  // Step 4: scores
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: single round
  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const comp = computerChoice.toLowerCase();

    if (human === comp) {
      console.log("Draw!");
    } else if (
      (human === "rock" && comp === "scissors") ||
      (human === "paper" && comp === "rock") ||
      (human === "scissors" && comp === "paper")
    ) {
      humanScore++;
      console.log("You win! " + human + " beats " + comp);
    } else {
      computerScore++;
      console.log("You lose! " + comp + " beats " + human);
    }
  }

  // 5 rounds
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // final result
  console.log("Final score — You: " + humanScore + " | Computer: " + computerScore);
  if (humanScore > computerScore) {
    console.log("You win the match!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the match!");
  } else {
    console.log("It's a draw!");
  }
}

playGame();
