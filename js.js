
//Ved feil i console - jquery og touchstart
//    document.addEventListener('touchstart', onTouchStart, {passive: true});

function dartsMath() {
  event.preventDefault();

  const P1amountOfDarts = document.getElementById('dartsThrownP1').innerHTML;
  const P2amountOfDarts = document.getElementById('dartsThrownP2').innerHTML;
  let scoreP1 = $('#player1-score').val();
  let newRestP1
  let scoreP2 = $('#player2-score').val();
  let newRestP2
  let newRowScoresheet
  let newCellScoreP1
  let newCellRestP1
  let newCellDarts
  let newCellScoreP2
  let newCellRestP2
  if (scoreP1 != ""){  
      scoreCountP1()
    }
  else if (scoreP2 != ""){
    scoreCountP2()
  }
  /***************************PLAYER 1 START***************************************/
  function scoreCountP1() {
    //Score and rest math - Player 1
    //Calculating score
    let restP1 = $('#player1-rest').html();

    event.preventDefault();

    let newRestP1 = restP1 - scoreP1;
    if (newRestP1 > 0) {
      $('#player1-rest').html(newRestP1);
      $('#player1-score').val("");
      $('#player2-score').focus();

      let dartsP1 = parseInt($("#dartsThrownP1").text(), 10) + 3;
      $("#dartsThrownP1").text(dartsP1);

      amountP1(scoreP1, newRestP1)

      // addToTableP1(scoreP1, newRestP1)

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
  
  /***************************PLAYER 1 END*****************************************/


  /***************************PLAYER 2 START***************************************/

  function scoreCountP2() {
    //Score and rest math - Player 1
    //Calculating score
    let restP2 = $('#player2-rest').html();
    event.preventDefault();
    let newRestP2 = restP2 - scoreP2;
    if (newRestP2 > 0) {
      $('#player2-rest').html(newRestP2);
      $('#player2-score').val("");
      $('#player1-score').focus();

      let dartsP2 = parseInt($("#dartsThrownP2").text(), 10) + 3;
      $("#dartsThrownP2").text(dartsP2);
      amountP2(scoreP2, newRestP2)
    }
    // On checkout
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


  function addToTableP1() {
    //let scoresheet = document.getElementById('fullScoresheetTable').getElementsByTagName('tbody')[0];

    // Insert a row in the table at the last row
    //let newRowScoresheet   = scoresheet.insertRow();

    // Insert a cell in the row at index 0
    /* let newCellScoreP1  = newRowScoresheet.insertCell(0);
    let newCellRestP1 = newRowScoresheet.insertCell(1);
    let newCellDarts = newRowScoresheet.insertCell(2);
    let newCellScoreP2 = newRowScoresheet.insertCell(3);
    let newCellRestP2 = newRowScoresheet.insertCell(4); */


    // Append a text node to the cell
    //let scoreP1 = $('#player1-score').val();
    console.log(scoreP1)
    let newScore = document.createTextNode(scoreP1);
    newCellScoreP1.appendChild(newScore);

    //let restP1 = $('#player1-rest').html();
    let newRest = document.createTextNode(newRestP1);
    newCellRestP1.appendChild(newRest);
    console.log(newRestP1)

    console.log(scoreP2)
    let ScoreP2 = document.createTextNode(scoreP2);
    newCellScoreP2.appendChild(ScoreP2);

    //let restP2 = $('#player1-rest').html();
    let RestP2 = document.createTextNode(newRestP2);
    newCellRestP2.appendChild(RestP2);
    console.log(newRestP2)


    // dartsThrownP1

  }

  function amountP1(scoreP1, newRestP1) {
    const P1amountOfDarts = document.getElementById('dartsThrownP1').innerHTML;
    const P2amountOfDarts = document.getElementById('dartsThrownP2').innerHTML;

    if (P1amountOfDarts > P2amountOfDarts) {
      let scoresheet = document.getElementById('fullScoresheetTable').getElementsByTagName('tbody')[0];
      let newRowScoresheet = scoresheet.insertRow();
      let newCellScoreP1 = newRowScoresheet.insertCell(0);
      let newCellRestP1 = newRowScoresheet.insertCell(1);
      let newCellDarts = newRowScoresheet.insertCell(2);
      let newCellScoreP2 = newRowScoresheet.insertCell(3);
      let newCellRestP2 = newRowScoresheet.insertCell(4);

      let newScore = document.createTextNode(scoreP1);
      newCellScoreP1.appendChild(newScore);

      let newRest = document.createTextNode(newRestP1);
      newCellRestP1.appendChild(newRest);
    }
    else if (P1amountOfDarts == P2amountOfDarts) {
      let newRowScoresheet
      let newCellScoreP1 = newRowScoresheet.insertCell(0);
      let newCellRestP1 = newRowScoresheet.insertCell(1);
      let newScore = document.createTextNode(scoreP1);
      newCellScoreP1.appendChild(newScore);

      let newRest = document.createTextNode(newRestP1);
      newCellRestP1.appendChild(newRest);
    }
  }

  function amountP2(scoreP2, newRestP2) {
    
    const P1amountOfDarts = document.getElementById('dartsThrownP1').innerHTML;
    const P2amountOfDarts = document.getElementById('dartsThrownP2').innerHTML;
    if (P1amountOfDarts < P2amountOfDarts) {
      let scoresheet = document.getElementById('fullScoresheetTable').getElementsByTagName('tbody')[0];
      let newRowScoresheet = scoresheet.insertRow();
      let newCellScoreP1 = newRowScoresheet.insertCell(0);
      let newCellRestP1 = newRowScoresheet.insertCell(1);
      let newCellDarts = newRowScoresheet.insertCell(2);
      let newCellScoreP2 = newRowScoresheet.insertCell(3);
      let newCellRestP2 = newRowScoresheet.insertCell(4);

      let newScore = document.createTextNode(scoreP2);
      newCellScoreP2.appendChild(newScore);

      let newRest = document.createTextNode(newRestP2);
      newCellRestP2.appendChild(newRest);
    }
    else if (P2amountOfDarts == P2amountOfDarts) {
      let newCellScoreP2 = newRowScoresheet.insertCell(3);
      let newCellRestP2 = newRowScoresheet.insertCell(4);
      let newScore = document.createTextNode(scoreP2);
      newCellScoreP2.appendChild(newScore);

      let newRest = document.createTextNode(newRestP2);
      newCellRestP2.appendChild(newRest);
    }
  }
}
let allScoresPlayer1 = []
let allScoresPlayer2 = []

function calculationP1() {
  
  let scoreP1 = $('#player1-score').val();
  event.preventDefault();
  let restP1 = $('#player1-rest').html();
  let newRestP1 = restP1 - scoreP1;
    if (newRestP1 > 0) {
      $('#player1-rest').html(newRestP1);
      $('#player1-score').val("");
      $('#player2-score').focus();

      let dartsP1 = parseInt($("#dartsThrownP1").text(), 10) + 3;
      $("#dartsThrownP1").text(dartsP1);
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
}
let dartsP1 = $('#dartsThrownP1').html()
  let allScoresP1 = new Object();
  allScoresP1.scoreP1 = scoreP1;
  allScoresP1.restP1 = newRestP1;
  allScoresP1.dartsP1 = dartsP1;
  allScoresPlayer1.push(allScoresP1)
 makeObject()
}

function calculationP2() {
  
  let scoreP2 = $('#player2-score').val();
  event.preventDefault();
  let restP2 = $('#player2-rest').html();
  let newRestP2 = restP2 - scoreP2;
    if (newRestP2 > 0) {
      $('#player2-rest').html(newRestP2);
      $('#player2-score').val("");
      $('#player1-score').focus();

      let dartsP2 = parseInt($("#dartsThrownP2").text(), 10) + 3;
      $("#dartsThrownP2").text(dartsP2);
    }

    // On checkout
    else if (newRestP2 == 0) {
      alert("Checkout!");
      $('#player2-rest').html(newRestP2);
      $('#player2-score').val("");
    }
    // On entering higher score than what's left
    else {
      alert("Du kan ikke skrive mer enn din restscore (" + restP2 + ")")
}
let dartsP2 = $('#dartsThrownP2').html()
  let allScoresP2 = new Object();
  allScoresP2.scoreP2 = scoreP2;
  allScoresP2.restP2 = newRestP2;
  allScoresP2.dartsP2 = dartsP2;
  allScoresPlayer2.push(allScoresP2)
  makeObject()
}

/* let allScores = [{
  "scoreP1": "",
  "restP1": "",
  "dartsP1": "",
  "scoreP2": "",
  "restP2": "",
  "dartsP2": ""
}]; */

function makeObject() {
  if (allScoresPlayer1.length = allScoresPlayer2.length) {
    fillForm()
}
}

function fillForm() {

    let allScores = {
    ...allScoresPlayer1,
    ...allScoresPlayer2
  }
  console.log(allScores)
  }
  
  
  
 

  /* let scoresheet = document.getElementById('fullScoresheetTable').getElementsByTagName('tbody')[0];

      let newRowScoresheet = scoresheet.insertRow();
      let newCellScoreP1 = newRowScoresheet.insertCell(0);
      let newCellRestP1 = newRowScoresheet.insertCell(1);
      let newCellDarts = newRowScoresheet.insertCell(2);
      let newCellScoreP2 = newRowScoresheet.insertCell(3);
      let newCellRestP2 = newRowScoresheet.insertCell(4);

      let newScore = document.createTextNode(allScores.scoreP1);
      newCellScoreP1.appendChild(newScore);

      let newRest = document.createTextNode(allScores.restP1);
      newCellRestP1.appendChild(newRest);
    }
 */