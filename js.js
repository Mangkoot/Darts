
//Ved feil i console - jquery og touchstart
//    document.addEventListener('touchstart', onTouchStart, {passive: true});

function scoreCountP1() {

    let scoreP1 = $('#player1-score').val();
    let restP1 = $('#player1-rest').html();
    event.preventDefault();
    if ((scoreP1 - restP1) < 0) {
   $('#player1-rest').html(restP1 - scoreP1);
   $('#player1-score').val("");
   $('#player2-score').focus(); 
  }
 
   else {
     alert("Du kan ikke skrive mer enn du har igjen (" + restP1 + ")")
   };
  }


  function scoreCountP2() {
    let scoreP2 = $('#player2-score').val();
    let restP2 = $('#player2-rest').html();
    event.preventDefault()
   $('#player2-rest').html(restP2 - scoreP2);
   $('#player2-score').val("");
   $('#player1-score').focus(); 
 
  }

