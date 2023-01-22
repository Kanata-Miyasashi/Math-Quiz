player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
factor = localStorage.getItem("factor");

player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
setScore()

riddler = player1_name;
seeker = player2_name;
document.getElementById("player_question").innerHTML = "Riddler - " + riddler;
document.getElementById("player_awnser").innerHTML = "Seeker - " + seeker;

function send() {
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
question_word = "<h4 id='number_display'> W. "+number1 +" "+ factor +" "+ number2+"</h4>"
input_box = "<br>Awnser : <input type='number' id='input_check_box'>"
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;

}

function check() {

    awnser_input = document.getElementById("input_check_box").value;
    awnser = NaN;
    console.log("factor")

    if(factor == "+"){
        awnser = Number(number1) + Number(number2);
    }

    if(factor == "-") {
        awnser = Number(number1) - Number(number2);
    }

    if(factor == "x") {
        awnser = Number(number1) * Number(number2);
    }

    if(factor == "÷") {
        awnser = Number(number1) / Number(number2);
    }

    if(awnser_input == awnser) {
        window.alert("Good Aawnser, +2 points");

        if(seeker == player1_name) {
            player1_score = player1_score +2;
            setScore()

            riddler = player1_name;
            seeker = player2_name;
            document.getElementById("player_question").innerHTML = "Riddler - " + riddler;
            document.getElementById("player_awnser").innerHTML = "Seeker - " + seeker;
            document.getElementById("output").innerHTML = "";
            document.getElementById("number1").value = "";
            document.getElementById("number2").value = "";
        }
        if(seeker == player2_name) {
            player2_score = player2_score +2;
            setScore()

            riddler = player2_name;
            seeker = player1_name;
            document.getElementById("player_question").innerHTML = "Riddler - " + riddler;
            document.getElementById("player_awnser").innerHTML = "Seeker - " + seeker;
            document.getElementById("output").innerHTML = "";
            document.getElementById("number1").value = "";
            document.getElementById("number2").value = "";
        }
        
    }
    else {
        window.alert("Wrong Awnser, -1 Points");

        if(seeker == player1_name) {
            player1_score = player1_score -1;
            setScore()

            riddler = player1_name;
            seeker = player2_name;
            document.getElementById("player_question").innerHTML = "Riddler - " + player2_name ;
            document.getElementById("player_awnser").innerHTML = "Seeker - " + player1_name ;
            document.getElementById("output").innerHTML = "";
            document.getElementById("number1").value = "";
            document.getElementById("number2").value = "";
        }
        if(seeker == player2_name) {
            player2_score = player2_score -1;
            setScore()

            riddler = player2_name;
            seeker = player1_name;
            document.getElementById("player_question").innerHTML = "Riddler - " + player2_name ;
            document.getElementById("player_awnser").innerHTML = "Seeker - " + player1_name ;
            document.getElementById("output").innerHTML = "";
            document.getElementById("number1").value = "";
            document.getElementById("number2").value = "";
            
        }
    }
}

function setScore() {
    document.getElementById("player1_score").innerHTML = player1_score ;
    document.getElementById("player2_score").innerHTML = player2_score ;
    }