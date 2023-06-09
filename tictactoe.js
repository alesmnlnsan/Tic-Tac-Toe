// background-music.
let audio = document.getElementById("bg-music");
let playBtn = document.getElementById("play-song")

playBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Get the elements needed
const cells = document.querySelectorAll('.cell');
const cellsArray = Array.from(cells); 

//variables
let currentPlayer = 'X';
let boardArray = ['', '', '', '', '', '', '', '', '']; 
//[0, 1, 2]
//[3, 4, 5]
//[6, 7, 8]
//this is what our board looks like 
let playerOne = 0;
let playerTwo= 0;


function handleClick(event) {
  const clickedCell = event.target; 
  const clickedCellArray = cellsArray.indexOf(clickedCell); 
  if (boardArray[clickedCellArray] === '') {
    boardArray[clickedCellArray] = currentPlayer;
    clickedCell.textContent = currentPlayer;


    const result = checkIfWinner();
    gameResult(result);
    switchPlayer();
  }
}

// start the game and add event listeners
function gameStart() {
  cellsArray.forEach(function (cell) {
    cell.addEventListener('click', handleClick);
  });
}

// Check if there is a winner or tie
function checkIfWinner() {
    // Check rows if board array index is not blank/ board is filled with X or O
    if (boardArray[0] !== '' && boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2]) {
      return boardArray[0]; //return the letter of the player! X or O
    }
    if (boardArray[3] !== '' && boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5]) {
      return boardArray[3];
    }
    if (boardArray[6] !== '' && boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8]) {
      return boardArray[6];
    }
  
    //down up
    if (boardArray[0] !== '' && boardArray[0] === boardArray[3] && boardArray[0] === boardArray[6]) {
      return boardArray[0];
    }
    if (boardArray[1] !== '' && boardArray[1] === boardArray[4] && boardArray[1] === boardArray[7]) {
      return boardArray[1];
    }
    if (boardArray[2] !== '' && boardArray[2] === boardArray[5] && boardArray[2] === boardArray[8]) {
      return boardArray[2];
    }
  
    // right top to bottom left, bottom right to top left
    if (boardArray[0] !== '' && boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8]) {
      return boardArray[0];
    }
    if (boardArray[2] !== '' && boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6]) {
      return boardArray[2];
    }
  

    //TIED RESULT
    let gameTied = true;
  
    boardArray.forEach(function(cell) {
      if (cell === '') {
        gameTied = false;
      }
    });

    if (gameTied) {
      return 'Tie';
    }
}

// show the game result
function gameResult(result) {
  const playerOneWin = document.querySelector('.playerX');
  const playerTwoWin = document.querySelector('.playerO');

  if (result === 'X') {
    playerOne++; 
    playerOneWin.innerText = "Player X WIN: " + playerOne;
    resetAuto();
  } else if (result === 'O') {
    playerTwo++
    playerTwoWin.innerText = "Player O WIN: " + playerTwo;
    resetAuto();
  } else if (result === 'Tie') {
    resetAuto();
  }
}

// switch players
function switchPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = 'X';
  }
}

// reset the game automatically after winning/tied results
function resetAuto() {
  boardArray = ['', '', '', '', '', '', '', '', '']; 
  cellsArray.forEach(function (cell) {
    cell.innerText = '';
  });
  currentPlayer = 'x';
}

// reset with  play again button
function resetGame() {
  const resetBtn = document.getElementById('reset');
  resetBtn.addEventListener('click', resetAuto);
}

gameStart();
resetGame();