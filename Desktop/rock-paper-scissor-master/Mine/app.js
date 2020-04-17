const game = () => {
  let pScore = 0;
  let cScore = 0;
  //Start the game
  const startGame = () => {
    const playBtn = document.querySelector(".wrapper>button");
    const introWrapper = document.querySelector(".wrapper");
    const gameWrapper = document.querySelector(".game");
    playBtn.addEventListener("click", () => {
      introWrapper.classList.add("fadeOut");
      gameWrapper.classList.remove("fadeOut");
      gameWrapper.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".buttons button");
    const computerOptions = ["rock", "paper", "scissors"];
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    options.forEach(option => {
      option.addEventListener("click", function() {
        const randomNum = Math.floor(Math.random() * 3);
        const cChoice = computerOptions[randomNum];
        setTimeout(() => {
          compareHands(cChoice, this.textContent);
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${cChoice}.png`;
        }, 2000);
        computerHand.style.animation = "shakeComputer 2s ease";
        playerHand.style.animation = "shakePlayer 2s ease";
      });
    });
  };
  const updateScore = () => {
    playerScore = document.querySelector(".player-score p");
    computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  const compareHands = (computerChoice, playerChoice) => {
    const winner = document.querySelector(".winner");
    if (computerChoice === playerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else if (computerChoice === "paper") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };
  startGame();
  playMatch();
};
game();
