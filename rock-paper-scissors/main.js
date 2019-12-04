

$('.btn').click(function(e){
    let inputArray = ["Rock", "Paper", "Scissors"];

    let userInput = e.target.innerHTML;
    let compInput = inputArray[Math.floor(Math.random()*inputArray.length)];
    let playerInputs = [];
    playerInputs.push(userInput, compInput);
    console.log(playerInputs);
    let winningPlayer = decideWinner(playerInputs);
    renderGame(playerInputs, winningPlayer);
});

function decideWinner(moves){
    let winner = "";
    if ((moves[0] == "Rock" && moves[1] == "Scissors") || (moves[0] == "Scissors" && moves[1] == "Paper") || (moves[0] == "Paper" && moves[1] == "Rock")){
        console.log("Player 1 wins");
        winner = "Player 1";
        return winner;
    } else if ((moves[1] == "Rock" && moves[0] == "Scissors") || (moves[1] == "Scissors" && moves[0] == "Paper") || (moves[1] == "Paper" && moves[0] == "Rock")){
        console.log("Computer Wins!");
        winner = "Computer";
        return winner;
    } else if (moves[0] == moves[1]){
        console.log("It's a tie!");
        winner = "No One";
        return winner;
    }
}

function renderGame(moves, winner){
  $('#results').html(` <div class="d-flex justify-content-center">
    <div class="m-5">You played: <b>${moves[0]}</b></div>
    <div class="m-5">The computer played: <b>${moves[1]}</b></div>
    </div>
    <h1 class="text-center">${winner} wins!</h1>`);
}