player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "turno para preguntar - " + player1_name;
document.getElementById("player_answer").innerHTML = "turno para responder - " + player2_name;
function send(){
    get_number1 = document.getElementById("number1").value;
    get_number2 = document.getElementById("number2").value;
    actual_answer = parseInt(get_number1) * parseInt(get_number2);
    question_number = "<h4>" + get_number1 + " X " + get_number2 + "</h4>";
    input_box = "<br>answer: <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
function check(){
    answer = document.getElementById(input_check_box).value;
    console.log(answer);
    if(answer == actual_answer){
        document.body.style.background ="lightgreen";
    }
    else{
        document.body.style.background ="red";
    }
    setTimeout(function(){document.body.style.background="lightblue"}, 5000);
    console.log("espera 5 seg");
    
}
