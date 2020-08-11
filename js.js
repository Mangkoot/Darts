
//Ved feil i console - jquery og touchstart
//    document.addEventListener('touchstart', onTouchStart, {passive: true});
/***************************PLAYER 1 START***************************************/
function scoreCountP1() {
  //Score and rest math - Player 1
  //Calculating score
  let scoreP1 = $('#player1-score').val();
  let restP1 = $('#player1-rest').html();

  event.preventDefault();

  let newRestP1 = restP1 - scoreP1;
  if (newRestP1 > 0) {
    $('#player1-rest').html(newRestP1);
    $('#player1-score').val("");
    $('#player2-score').focus();

  let dartsP1 = parseInt($("#dartsThrownP1").text(), 10) + 3;
  $("#dartsThrownP1").text(dartsP1);

  addToTableP1(scoreP1, newRestP1)
    
  }
  // On checkout
  else if (newRestP1 == 0) {
    alert("Checkout!");
    $('#player1-rest').html(newRestP1);
    $('#player1-score').val("");
  }
  // On entering higher score than what's left
  else {
    alert("Du kan ikke skrive mer enn din restscore (" + restP1 + ")")
  };
};

//Count darts Player 1
function dartsAmountP1() {
  
}
/***************************PLAYER 1 END*****************************************/


/***************************PLAYER 2 START***************************************/

function scoreCountP2() {
  //Score and rest math - Player 1
  //Calculating score
  let scoreP2 = $('#player2-score').val();
  let restP2 = $('#player2-rest').html();
  event.preventDefault();
  let newRestP2 = restP2 - scoreP2;
  if (newRestP2 > 0) {
    $('#player2-rest').html(newRestP2);
    $('#player2-score').val("");
    $('#player1-score').focus();
    
    let dartsP2 = parseInt($("#dartsThrownP2").text(), 10) + 3;
    $("#dartsThrownP2").text(dartsP2);

    addToTableP1(scoreP2, newRestP2)

  }


  // On checkout
  //TODO: modal popup with input for amount of darts
  else if (newRestP2 == 0) {
    alert("Checkout!");
    $('#player2-rest').html(newRestP2);
    $('#player2-score').val("");
  }
  // On entering higher score than what's left
  else {
    alert("Du kan ikke skrive mer enn din restscore (" + restP2 + ")")
  };
};

/***************************PLAYER 2 END*****************************************/


function addToTableP1(scoreP1, newRestP1, scoreP2, newRestP2)
{
let scoresheet = document.getElementById('fullScoresheetTable').getElementsByTagName('tbody')[0];

// Insert a row in the table at the last row
let newRowScoresheet   = scoresheet.insertRow();

// Insert a cell in the row at index 0
let newCellScoreP1  = newRowScoresheet.insertCell(0);
let newCellRestP1 = newRowScoresheet.insertCell(1);
let newCellDarts = newRowScoresheet.insertCell(2);
let newCellScoreP2 = newRowScoresheet.insertCell(3);
let newCellRestP2 = newRowScoresheet.insertCell(4);


// Append a text node to the cell
 //let scoreP1 = $('#player1-score').val();
 console.log(scoreP1)
 let newScore  = document.createTextNode(scoreP1);
newCellScoreP1.appendChild(newScore);

//let restP1 = $('#player1-rest').html();
let newRest = document.createTextNode(newRestP1); 
newCellRestP1.appendChild(newRest);
console.log(newRestP1)

console.log(scoreP2)
let ScoreP2  = document.createTextNode(scoreP2);
newCellScoreP2.appendChild(ScoreP2);

//let restP2 = $('#player1-rest').html();
let RestP2 = document.createTextNode(newRestP2); 
newCellRestP2.appendChild(RestP2);
console.log(newRestP2)


// dartsThrownP1

}

