function addUser() {

   var factorNumber = Math.random() * 10; 

   localStorage.setItem("factorNumber", factorNumber);
   
   player1_name = document.getElementById("player1_name_input").value;
   player2_name = document.getElementById("player2_name_input").value;

   localStorage.setItem("player1_name", player1_name);
   localStorage.setItem("player2_name", player2_name);

   window.location = "game_page.html";

   getFactor();
}

function getFactor() {
   
   factorNumber = localStorage.getItem("factorNumber");

   factor = "";
  
  if(factorNumber >= 0 && factorNumber < 3) {
   factor = "+";
  }
  
  if(factorNumber >= 3 && factorNumber < 5) {
  factor = "-";
  }
  
  if(factorNumber >= 5 && factorNumber < 7) {
  factor = "x"
  }
  
  if(factorNumber >= 7 && factorNumber <= 10) {
  factor = "÷"
  }
  

  localStorage.setItem("factor", factor);
  }


