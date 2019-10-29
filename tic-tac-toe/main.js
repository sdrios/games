var content = document.getElementById('content');


/////////STATE///////////

var ticTacToe = [
    ["-","-","-"], //row 0
    ["-","-","-"], //row 1
    ["-","-","-"]  //row 2
    ]

var isPlayerXTurn = false
var player ='O'
content.innerHTML = renderGame(ticTacToe);

//////FUNCTIONS//////////
function buttonClicked(event){

    let clickedButton=event.target //capture target of event (button)
    let clickedButtonId = clickedButton.id //capture id of event target (button id)

    let rowIndex = clickedButtonId[0] //make row index the value of selected id 
    let columnIndex = clickedButtonId[2] //make column index the value of selected id 

    //if statement to assign value ('x' or 'o') to associated row/column index and switch player
    if (isPlayerXTurn){
        ticTacToe[rowIndex][columnIndex] = "X" //update state of tic tac toe board
        isPlayerXTurn = false;
        player = 'O'
    } else {
        ticTacToe[rowIndex][columnIndex] = "O" //update state of tic tac toe board
        isPlayerXTurn = true;
        player = 'X'
    }

    let displayPlayer = document.getElementById("current-player") //select HTML element assigned to current-player id
    displayPlayer.innerHTML = player //set inner HTML of selected element

    renderCell(rowIndex,columnIndex) //render display of updated tic tac toe board 
     document.getElementById("winning-player").innerHTML=winningCondition(ticTacToe,rowIndex,columnIndex)
     console.log(clickedButtonId)
}





 ////////WINNING CONDITION FUNCTION/////
 function winningCondition(ticTacToeState,row,column){
    console.log(ticTacToeState) 
    if ((ticTacToeState[0][0] == ticTacToeState[0][1] && ticTacToeState[0][0] == ticTacToeState[0][2]) && ticTacToeState[0][0] != '-') {
        return `Player ${ticTacToeState[0][0]} wins!`
    }
    else if ((ticTacToeState[1][0] == ticTacToeState[1][1] && ticTacToeState[1][0]==ticTacToeState[1][2]) && ticTacToeState[1][0] != '-'){ 
        return `Player ${ticTacToeState[1][0]} wins!`
    }
    else if ((ticTacToeState[2][0] == ticTacToeState[2][1] && ticTacToeState[2][0]==ticTacToeState[2][2]) && ticTacToeState[2][0] != '-'){ 
         return `Player ${ticTacToeState[2][0]} Wins!`  
    }
    else if((ticTacToeState[0][0] == player && ticTacToeState[1][0] && ticTacToeState[0][0]== ticTacToeState[2][0]) && ticTacToeState[0][0] != '-'){

         return `Player ${ticTacToeState[2][0]} Wins!` 
    }
    else if ((ticTacToeState[0][1] == ticTacToeState[1][1] && ticTacToeState[0][1]== ticTacToeState[2][1]) && ticTacToeState[0][1] != '-' ){
         return `Player ${ticTacToeState[2][0]} Wins!` 
    }
    else if ((ticTacToeState[0][2] ==  ticTacToeState[1][2] && ticTacToeState[0][2]==ticTacToeState[2][2]) && ticTacToeState[0][2] != '-' ){
         return `Player ${ticTacToeState[0][2]} Wins!`  
    }
    else {return 'No Winner'}
    }

//document.getElementById("id").innerHTML //access innerHTML of element

/////////RENDER FUNCTIONS///////////
function renderCell(row,column){
    let id = `${row},${column}`
    let button = document.getElementById(id)
    button.innerHTML = ticTacToe[row][column]
} 

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player  <span id="current-player">${player}</span>'s turn!</h4>
            <div class="w-50 text-center">
                <button id="0,0" onClick="buttonClicked(event); this.disabled=true;">${game[0][0]} </button>
                <button id="0,1" onClick="buttonClicked(event); this.disabled=true;">${game[0][1]}</button>
                <button id="0,2" onClick="buttonClicked(event); this.disabled=true;">${game[0][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="1,0" onClick="buttonClicked(event); this.disabled=true;">${game[1][0]}</button>
                <button id="1,1" onClick="buttonClicked(event); this.disabled=true;">${game[1][1]}</button>
                <button id="1,2" onClick="buttonClicked(event); this.disabled=true;">${game[1][2]}</button> 
            </div>
            <div class="w-50 text-center">
            <button id="2,0" onClick="buttonClicked(event); this.disabled=true;">${game[2][0]}</button>
            <button id="2,1" onClick="buttonClicked(event); this.disabled=true;">${game[2][1]}</button>
            <button id="2,2" onClick="buttonClicked(event); this.disabled=true;">${game[2][2]}</button>
            </div>
            <div id="winner"> </div>
        </div>

    `
}