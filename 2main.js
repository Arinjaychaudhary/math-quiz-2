function name(){
player1name=localStorage.getItem("player1");
player2name=localStorage.getItem("player2");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1name;
document.getElementById("player2name").innerHTML=player2name;

document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;

document.getElementById("question").innerHTML="Question turn -  "+player1name;
document.getElementById("answer").innerHTML="Answer turn -  "+player2name;
}
 function send(){
     num1=document.getElementById("word").value;
     num2=document.getElementById("word1").value;
     actualanswer=parseInt(num1)*parseInt(num2);
     console.log(actualanswer);
     quenum="<h4>"+num1+"X"+num2+"</h4>";
     input="<br><input id='checkbox' type'text'>";
     checkbtn="<br><br><button class='btn-success' type='submit' onclick=check()>Check</button>";
     row=quenum+input+checkbtn;
     document.getElementById("output").innerHTML=row;
     document.getElementById("word").innerHTML="";
     document.getElementById("word1").innerHTML="";
    
 }