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
question_turn="player1";
answer_turn="player2";
function check(){
    answer = document.getElementById("input_check_box").value;
    console.log(answer);
    if(answer == actual_answer){
        document.body.style.background ="lightgreen";
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    else{
        document.body.style.background ="red";
    }
    setTimeout(function(){document.body.style.background="orange"}, 5000);
    console.log("espera 5 seg");

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="turno para preguntar - "+ player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="turno para preguntar - "+ player1_name;
    }
    if(answer_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_answer").innerHTML="turno para responder - "+ player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="turno para responder - "+ player1_name;
    }
    document.getElementById("output").innerHTML="";
    
}
