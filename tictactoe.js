//winning combination
//losing
//draw

//functions when X and O is clicked alternatively

//update win count
//play again
//disable all cell when the game finishes


// Get the elements needed
const cells = document.querySelectorAll('.cell');
const cellsArray = Array.from(cells); //convert to an array I didn't know this just googled-
const resetBtn = document.getElementsByClassName('reset');

let currentPlayer = 'X';
let boardArray = ['', '', '', '', '', '', '', '', '']; //this is what our board looks like we fill it with X and O then if it is the same as our checkIfWinner we win!!

// clicking every cell
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
      return boardArray[0];
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
  
    // right top to bottom left, bottom right top left
    if (boardArray[0] !== '' && boardArray[0] === boardArray[4] && boardArray[0] === boardArray[8]) {
      return boardArray[0];
    }
    if (boardArray[2] !== '' && boardArray[2] === boardArray[4] && boardArray[2] === boardArray[6]) {
      return boardArray[2];
    }
  
    if (boardArray === '') {
      return 'Tie';
    }
}

// show the game result
function gameResult(result) {
  if (result === 'X' || result === 'O') {
    alert('Player ' + result + ' wins!');
    resetAuto();
  } else if (result === 'Tie') {
    alert('Tied');
    resetAuto();
  }
}

// switch
function switchPlayer() {
  if (currentPlayer === "X") {
    currentPlayer === "O";
  } else {
    currentPlayer === "X";
  }
}

// reset the game automatically after winning/losing
function resetAuto() {
  boardArray = ['', '', '', '', '', '', '', '', ''];
  cellsArray.forEach(function (cell) {
    cell.textContent = '';
  });
}

// reset with  play again button
function resetGame() {
  resetBtn.addEventListener('click', resetAuto);
}

gameStart();
resetGame();



/*
- how do I make the reset button functional it resets automatically when someone wins
- how do I tally wins
- cant have tied result
-cant reset
-cant switch to 'O'
- ONLY X NOW WHAT DID I DO
*/