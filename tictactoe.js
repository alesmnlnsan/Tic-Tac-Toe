
// Get the elements needed
const cells = document.querySelectorAll('.cell');
const cellsArray = Array.from(cells); 


let currentPlayer = 'X';
let boardArray = ['', '', '', '', '', '', '', '', '']; 
//[0, 1, 2]
//[3, 4, 5]
//[6, 7, 8]
//this is what our board looks like we fill it with X and O then if it is the same as our checkIfWinner we win!!
let playerOne = 0;
let playerTwo= 0;


function handleClick(event) {
  const clickedCell = event.target; 
  const clickedCellArray = cellsArray.indexOf(clickedCell); //cell we clicked. every cell because we accessed the index

  if (boardArray[clickedCellArray] === '') {
    boardArray[clickedCellArray] = currentPlayer;
    clickedCell.textContent = currentPlayer;
//if the cell we clicked on the board array is empty { clicked cell = what the player clicked then we update the textContent of the cell to currentPlayer}

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
    alert('Player ' + result + ' wins the game!');
    playerOne++; // increment tries of games
    playerOneWin.innerText = "Player X WIN: " + playerOne;
    resetAuto();
  } else if (result === 'O') {
    alert('Player ' + result + ' wins the game!');
    playerTwo++
    playerTwoWin.innerText = "Player O WIN: " + playerTwo;
    resetAuto();
  } else if (result === 'Tie') {
    alert('Tied Resut!');
    resetAuto();
  }
}

// switch. pod 1 helped me but hooooow is that the case with =
function switchPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = 'X';
  }
}

// reset the game automatically after winning/tied results
//we want to reset all the cell element to empty again or ''
//we want to reset the boardArray
function resetAuto() {
  boardArray = ['', '', '', '', '', '', '', '', '']; 
  cellsArray.forEach(function (cell) {
    cell.innerText = '';
  });
}

// reset with  play again button.
function resetGame() {
  const resetBtn = document.getElementById('reset');
  resetBtn.addEventListener('click', resetAuto);
}

gameStart();
resetGame();

