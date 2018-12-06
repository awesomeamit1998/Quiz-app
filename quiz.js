var score=0;
document.getElementById("question").innerHTML="Which of these is the largest mountain?";
document.getElementById("btn0").innerHTML="Mt kilimanjaro";
document.getElementById("btn1").innerHTML="Mt himalaya";
document.getElementById("btn2").innerHTML="Mt Andes";
document.getElementById("btn3").innerHTML="Mt Alps";
document.getElementById("btn2").addEventListener("click",function at1(){
  score++;
});
document.getElementById("buttons").addEventListener("click",function at(){
  document.getElementById("question").innerHTML="Who is the king of north in s08 of got?";
  document.getElementById("btn0").innerHTML="Jon";
  document.getElementById("btn1").innerHTML="Eddard";
  document.getElementById("btn2").innerHTML="Roose";
  document.getElementById("btn3").innerHTML="Tommen";
});
document.getElementById("btn1").addEventListener("click",function ta1(){
  score++;
});
document.getElementById("buttons").addEventListener("click",function ta(){
  document.getElementById("question").innerHTML="Which day is the shortest day of the year?";
  document.getElementById("btn0").innerHTML="monday";
  document.getElementById("btn1").innerHTML="tuesday";
  document.getElementById("btn2").innerHTML="wednesday";
  document.getElementById("btn3").innerHTML="21st dec";
});
document.getElementById("btn3").addEventListener("click",function(){
  score++;
});
document.getElementById("progress").innerHTML=score.toString();
