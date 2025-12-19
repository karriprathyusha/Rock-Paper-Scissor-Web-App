let myScore = 0;
let compScore = 0;

// First to this many points wins the match
const MATCH_TARGET = 3;

// Probability that the computer will pick the winning move against the player (0-1)
// This makes the computer a little smarter / biased. Set to 0 for fully random.
const COMPUTER_BIAS = 0.35;

function updateScores() {
  const me = document.getElementById("score-me");
  const comp = document.getElementById("score-computer");
  if (me) me.textContent = myScore;
  if (comp) comp.textContent = compScore;
}

function resetGame() {
  myScore = 0;
  compScore = 0;
  updateScores();
  const resultBox = document.getElementById("resultBox");
  if (resultBox) {
    resultBox.textContent = "";
    resultBox.classList.remove("result-show");
  }
  const startBtn = document.getElementById("start");
  if (startBtn) {
    startBtn.style.display = "inline-block";
    startBtn.textContent = "START";
  }
  const scoreboard = document.getElementById("scoreboard");
  if (scoreboard) {
    scoreboard.classList.remove("match-over");
    const cols = scoreboard.querySelectorAll(".score-col");
    cols.forEach((c) => c.classList.remove("winner"));
  }
}

function start() {
  const startBtn = document.getElementById("start");
  const choices = ["rock", "paper", "scissors"];

  // If match already finished or button is a replay, reset instead
  if (
    myScore >= MATCH_TARGET ||
    compScore >= MATCH_TARGET ||
    (startBtn && startBtn.textContent.trim().toLowerCase() === "play again")
  ) {
    resetGame();
    return;
  }

  // remove start button from layout
  startBtn.style.display = "none";

  // clear result box
  const rB = document.getElementById("resultBox");
  if (rB) {
    rB.textContent = "";
    rB.classList.remove("result-show");
  }

  // reveal choice buttons
  choices.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.visibility = "visible";
      el.style.opacity = "1";
      el.disabled = false;
    }
  });
}

clickedHand = [
  "<img src='rock.png' id='img1'>",
  "<img src='paper.png' id='img1'>",
  "<img src='scissors.png' id='img1'>",
];

clickedRightHand = [
  "<img src='rock.png' id='img2'>",
  "<img src='paper.png' id='img2'>",
  "<img src='scissors.png' id='img2'>",
];

function game(position) {
  // start shaking animations (these are defined in CSS)
  const leftImg = document.getElementById("img1");
  const rightImg = document.getElementById("img2");
  // disable/hide choice buttons immediately to avoid double-clicks
  const choices = ["rock", "paper", "scissors"];
  choices.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.visibility = "hidden";
      el.style.opacity = "0";
      el.disabled = true;
    }
  });

  if (leftImg) leftImg.style.animation = "shakeLeft 1s 5 ease-in-out";
  if (rightImg) rightImg.style.animation = "shakeRight 1s 5 ease-in-out";

  // compute computer choice with a bias: sometimes pick the winning move
  const random = getComputerChoice(position);

  // show chosen images after animation
  setTimeout(() => {
    const h2 = document.getElementById("hand2");
    const h1 = document.getElementById("hand1");
    if (h2) h2.innerHTML = clickedRightHand[random];
    if (h1) h1.innerHTML = clickedHand[position];
  }, 5000);

  // decide result and update score, then reset UI for next round
  setTimeout(() => {
    const resultBox = document.getElementById("resultBox");
    let resultText = "";
    let resultType = ""; // 'draw' | 'playerWin' | 'computerWin'

    if (random === position) {
      resultText = "Match Draw!";
      resultType = "draw";
      // no score change
    } else if (
      (position === 0 && random === 2) ||
      (position === 1 && random === 0) ||
      (position === 2 && random === 1)
    ) {
      resultText = "You are the Winner!";
      resultType = "playerWin";
      myScore += 1;
    } else {
      resultText = "Computer wins this round.";
      resultType = "computerWin";
      compScore += 1;
    }

    // update scoreboard and show result
    updateScores();
    if (resultBox) {
      resultBox.textContent = resultText;
      // display with transition/gradient box
      resultBox.classList.add("result-show");
    }

    // If match finished, mark scoreboard and highlight winner column
    if (myScore >= MATCH_TARGET || compScore >= MATCH_TARGET) {
      const scoreboard = document.getElementById("scoreboard");
      if (scoreboard) {
        scoreboard.classList.add("match-over");
        // clear any previous winner markers
        const cols = scoreboard.querySelectorAll(".score-col");
        cols.forEach((c) => c.classList.remove("winner"));
        // decide which column is the winner: first column is player, second is computer
        if (myScore > compScore) {
          if (cols[0]) cols[0].classList.add("winner");
        } else if (compScore > myScore) {
          if (cols[1]) cols[1].classList.add("winner");
        }
      }
    }

    // stop animations
    if (leftImg) leftImg.style.animation = "";
    if (rightImg) rightImg.style.animation = "";
    // show controls depending on resultType
    const startBtn = document.getElementById("start");
    const continueBtn = document.getElementById("continue");

    if (myScore >= MATCH_TARGET || compScore >= MATCH_TARGET) {
      // match finished: show Play Again button and keep choices hidden
      if (startBtn) {
        startBtn.style.display = "inline-block";
        startBtn.textContent = "Play Again";
      }
      if (continueBtn) continueBtn.style.display = "none";
    } else {
      // not match finished: if draw, auto-reveal choices; if a win, show Continue button and wait
      if (resultType === "draw") {
        // brief pause then show choices
        setTimeout(() => {
          choices.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
              el.style.visibility = "visible";
              el.style.opacity = "1";
              el.disabled = false;
            }
          });
          if (startBtn) startBtn.style.display = "none";
        }, 900);
        if (continueBtn) continueBtn.style.display = "none";
      } else {
        // player or computer won this round — show Continue button and wait for user
        if (continueBtn) {
          continueBtn.style.display = "inline-block";
        }
        if (startBtn) startBtn.style.display = "none";
      }
    }
  }, 5500);
}

// Called when the user clicks CONTINUE after a win round.
function continueRound() {
  const continueBtn = document.getElementById("continue");
  const resultBox = document.getElementById("resultBox");
  const choices = ["rock", "paper", "scissors"];

  if (continueBtn) continueBtn.style.display = "none";
  if (resultBox) resultBox.classList.remove("result-show");

  // show choices for next round
  choices.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.style.visibility = "visible";
      el.style.opacity = "1";
      el.disabled = false;
    }
  });

  const startBtn = document.getElementById("start");
  if (startBtn) startBtn.style.display = "none";
}

// Return an index 0..2 for computer choice. If COMPUTER_BIAS > 0, there is a chance
// the computer will deliberately choose the winning move against `playerChoice`.
function getComputerChoice(playerChoice) {
  // mapping: 0 rock, 1 paper, 2 scissors
  // move that beats playerChoice:
  const beats = { 0: 1, 1: 2, 2: 0 };
  // move that loses to playerChoice:
  const loses = { 0: 2, 1: 0, 2: 1 };

  const r = Math.random();
  if (r < COMPUTER_BIAS) {
    // pick the move that beats player -> computer likely wins
    return beats[playerChoice];
  }
  // small chance computer plays a bad move
  if (r < COMPUTER_BIAS + 0.05) {
    return loses[playerChoice];
  }
  // otherwise pick uniformly at random
  return Math.floor(Math.random() * 3);
}
